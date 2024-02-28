import { BitOffset, isBitOffset, offsets } from './constants';
import isEqual from 'lodash/isEqual';
import { parseCells } from './cells/parseCells';
import { getSave } from '../getFirstSave';

type Quantity = {
	current: number;
	max: number;
};

type ItemStatus = {
	inInventory: boolean;
	equipped: boolean;
};

type GameSave = {
	/**
	 * If true, this save has info pertaining to a played
	 * game. If false, this save came from a slot in the save file
	 * that has not yet been used for a game. This is needed because
	 * a save file might have say just the second save file used. We need to
	 * properly communicate that the first and third are untouched
	 */
	active: boolean;

	energy: Quantity;
	missiles: Quantity;
	superMissiles: Quantity;
	powerBombs: Quantity;
	suits: {
		varia: ItemStatus;
		gravity: ItemStatus;
	};
	misc: {
		morphingBall: ItemStatus;
		bombs: ItemStatus;
		// ?? something goes here
		screwAttack: ItemStatus;
	};
	boots: {
		hiJumpBoots: ItemStatus;
		spaceJump: ItemStatus;
		speedBooster: ItemStatus;
	};
	beam: {
		charge: ItemStatus;
		ice: ItemStatus;
		wave: ItemStatus;
		spazer: ItemStatus;
		plasma: ItemStatus;
	};
	time: {
		hours: number;
		minutes: number;
	};

	mapCells: CellMatrix;
};

function getBoolean(
	saveFileView: DataView,
	key: string,
	bitKeys: string[]
): boolean {
	const matchingOffset = offsets.find((o) => {
		return (
			o.key.includes(key) &&
			isBitOffset(o) &&
			Object.entries(o.bits).some((e) => isEqual(e[1].sort(), bitKeys.sort()))
		);
	});

	if (!matchingOffset) {
		throw new Error(
			`parser,getBoolean: no offset found for: ${key}, bits: ${bitKeys.join(
				','
			)}`
		);
	}

	if (matchingOffset.size !== 8) {
		throw new Error(`parser,getBoolean: found offset for ${key} is not 8 bits`);
	}

	const bitEntry = Object.entries((matchingOffset as BitOffset).bits).find(
		(e) => isEqual(e[1].sort(), bitKeys.sort())
	);

	if (!bitEntry) {
		throw new Error(
			`parse,getBoolean: no bitEntry found for: [${bitKeys.join(',')}]`
		);
	}

	const value = saveFileView.getUint8(matchingOffset.offset);

	return !!(value & (1 << Number(bitEntry[0])));
}

function getNumber(saveFileView: DataView, key: string): number {
	const matchingOffset = offsets.find((o) => o.key.includes(key));

	if (!matchingOffset) {
		throw new Error(`parser,getBoolean: no offset found for: ${key}`);
	}

	return matchingOffset.size === 8
		? saveFileView.getUint8(matchingOffset.offset)
		: saveFileView.getUint16(matchingOffset.offset, true);
}

function getItemStatus(saveFileView: DataView, itemKey: string): ItemStatus {
	return {
		inInventory: getBoolean(saveFileView, 'itemInInventory', [
			'itemInInventory',
			itemKey,
		]),
		equipped: getBoolean(saveFileView, 'itemEquipped', [
			'itemEquipped',
			itemKey,
		]),
	};
}

/**
 * Reads a Super Metroid SRAM game save and returns
 * it parsed out into an object
 *
 * @param gameSave {Uint8Array} An array containing one game's data from a SM save file
 */
function parseGameSave(gameSave: Uint8Array, active: boolean): GameSave {
	const view = new DataView(gameSave.buffer);

	return {
		active,

		energy: {
			current: getNumber(view, 'currentEnergy'),
			max: getNumber(view, 'maxEnergy'),
		},
		missiles: {
			current: getNumber(view, 'currentMissiles'),
			max: getNumber(view, 'maxMissiles'),
		},
		superMissiles: {
			current: getNumber(view, 'currentSuperMissiles'),
			max: getNumber(view, 'maxSuperMissiles'),
		},
		powerBombs: {
			current: getNumber(view, 'currentPowerBombs'),
			max: getNumber(view, 'maxPowerBombs'),
		},
		suits: {
			varia: getItemStatus(view, 'variaSuit'),
			gravity: getItemStatus(view, 'gravitySuit'),
		},
		misc: {
			morphingBall: getItemStatus(view, 'morphingBall'),
			bombs: getItemStatus(view, 'bombs'),
			screwAttack: getItemStatus(view, 'screwAttack'),
		},
		boots: {
			hiJumpBoots: getItemStatus(view, 'hiJumpBoots'),
			spaceJump: getItemStatus(view, 'spaceJump'),
			speedBooster: getItemStatus(view, 'speedBooster'),
		},
		beam: {
			charge: getItemStatus(view, 'chargeBeam'),
			ice: getItemStatus(view, 'iceBeam'),
			wave: getItemStatus(view, 'waveBeam'),
			spazer: getItemStatus(view, 'spazer'),
			plasma: getItemStatus(view, 'plasmaBeam'),
		},
		time: {
			hours: getNumber(view, 'Hours'),
			minutes: getNumber(view, 'Minutes'),
		},
		mapCells: parseCells(gameSave),
	};
}

// seems SM save files either use 0xff or 0x60 for empty bytes
// probably depends on which emulator is used
const DUMMY_BYTES = [0xff, 0x60];

/**
 * Determines which, if any, game slots in a SM save file are in use
 *
 * @param saveFile {Uint8Array} an entire SM save file
 */
function getUsedGameSlots(saveFile: Uint8Array): [boolean, boolean, boolean] {
	const inUse: [boolean, boolean, boolean] = [false, false, false];

	for (let i = 0; i < 3; ++i) {
		inUse[i] =
			!DUMMY_BYTES.includes(saveFile[i * 2]) &&
			!DUMMY_BYTES.includes(saveFile[i * 2 + 1]);
	}

	return inUse;
}

function parse(saveFile: Uint8Array): [GameSave, GameSave, GameSave] {
	const inUse = getUsedGameSlots(saveFile);

	return inUse.map((active, i) => {
		const gameSaveData = getSave(saveFile, i);
		return parseGameSave(gameSaveData, active);
	}) as [GameSave, GameSave, GameSave];
}

export { parse, getUsedGameSlots };
export type { GameSave };
