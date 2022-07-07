import 'ignore-styles';
import fs from 'fs';
import path from 'path';

const SAVE_SLOT_SIZE = 0x65c;
const SAVE_OFFSETS = [0x10, 0x10 + SAVE_SLOT_SIZE, 0x10 + 2 * SAVE_SLOT_SIZE];

function main() {
	const sourceSaveRelPath = process.argv[2];
	const destSaveRelPath = process.argv[3];

	if (!sourceSaveRelPath || !destSaveRelPath) {
		console.error(
			'usage: node copySaveToSecondSlot <source-save-file> <dest-save-file>'
		);
		process.exit(1);
	}

	const sourceSavePath = path.resolve(process.cwd(), sourceSaveRelPath);
	const destSavePath = path.resolve(process.cwd(), destSaveRelPath);

	const srcBuffer = new Uint8Array(fs.readFileSync(sourceSavePath));
	const destBuffer = new Uint8Array(fs.readFileSync(destSavePath));

	const sourceSave = srcBuffer.slice(SAVE_OFFSETS[1], SAVE_OFFSETS[2]);

	destBuffer.set(sourceSave, SAVE_OFFSETS[1]);

	fs.writeFileSync(process.cwd() + '/result.srm', destBuffer);
}

main();
