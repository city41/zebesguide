import 'ignore-styles';
import fs from 'fs';
import path from 'path';

const SRAM_BASE = 0;
const SRAM_OFFSET = 0x10;
const SAVE_AREA = 0x158;
const SAVE_ROOM_INDEX = 0x156;
const SRAM_SAVE_SIZE = 0x65c;
const START_OF_MAP_OFFSET = 0x15a;
const END_OF_MAP_OFFSET = 0x65c;

const areas: Record<string, number> = {
	crateria: 0,
	brinstar: 1,
	norfair: 2,
	wreckedShip: 3,
	maridia: 4,
	tourian: 5,
};

const saveRoomsInEachArea: Record<string, number> = {
	crateria: 2,
	brinstar: 5,
	norfair: 6,
	wreckedShip: 1,
	maridia: 4,
	tourian: 2,
};

function setSaveRoom(buffer: number[], area: string, roomIndexS: string) {
	const saveAreaNumber: number | undefined = areas[area];

	if (saveAreaNumber === undefined) {
		throw new Error(
			`Invalid save area: ${area}, valid: ${Object.keys(areas).join(',')}`
		);
	}

	const roomIndex = parseInt(roomIndexS, 10);

	if (isNaN(roomIndex)) {
		throw new Error(`Invalid room index: ${roomIndexS}`);
	}

	if (roomIndex >= saveRoomsInEachArea[area]) {
		throw new Error(
			`Invalid room index: ${roomIndex}, max for ${area} is ${
				saveRoomsInEachArea[area] - 1
			}`
		);
	}

	buffer[SRAM_BASE + SRAM_OFFSET + SAVE_AREA] = saveAreaNumber;
	buffer[SRAM_BASE + SRAM_OFFSET + SAVE_ROOM_INDEX] = roomIndex;
}

export function visitWholeMap(buffer: number[]) {
	for (
		let i = SRAM_BASE + START_OF_MAP_OFFSET;
		i < SRAM_BASE + END_OF_MAP_OFFSET;
		++i
	) {
		buffer[i] = 0xff;
	}
}

function sanitize(buffer: number[]) {
	const ptr = SRAM_BASE + SRAM_OFFSET;

	let high = 0;
	let low = 0;

	for (let i = 0; i < SRAM_SAVE_SIZE; i += 2) {
		const highValue = buffer[ptr + i];

		high += highValue;

		if (high > 0xff) {
			high = high & 0xff;
			low += 1;
		}

		const lowValue = buffer[ptr + i + 1];
		low += lowValue;

		if (low > 0xff) {
			low = low & 0xff;
		}
	}

	const hb = high & 0xff;
	const lb = low & 0xff;

	const hc = hb ^ 0xff;
	const lc = lb ^ 0xff;

	buffer[SRAM_BASE + 0] = hb;
	buffer[SRAM_BASE + 1] = lb;
	buffer[SRAM_BASE + 8] = hc;
	buffer[SRAM_BASE + 9] = lc;
	buffer[SRAM_BASE + 0x1ff0] = hb;
	buffer[SRAM_BASE + 0x1ff1] = lb;
	buffer[SRAM_BASE + 0x1ff8] = hc;
	buffer[SRAM_BASE + 0x1ff9] = lc;
}

function main() {
	const [
		_tsnode,
		_setSaveRoom,
		area,
		roomIndex,
		sourceSaveRelPath,
		destSaveRelPath,
	] = process.argv;

	if (!sourceSaveRelPath || !destSaveRelPath || !area || !roomIndex) {
		console.error(
			'usage: ts-node setSaveRoom <area> <room-index> <source-save-file> <dest-save-file>'
		);
		process.exit(1);
	}

	const sourceSavePath = path.resolve(process.cwd(), sourceSaveRelPath);
	const destSavePath = path.resolve(process.cwd(), destSaveRelPath);

	const srcBuffer = new Uint8Array(fs.readFileSync(sourceSavePath).buffer);
	console.log('srcBuffer.length', srcBuffer.length);
	const srcArray = Array.from(srcBuffer);

	setSaveRoom(srcArray, area, roomIndex);
	// visitWholeMap(srcArray);
	sanitize(srcArray);

	fs.writeFileSync(destSavePath, new Uint8Array(srcArray));
	console.log('wrote to', destSavePath);
}

main();
