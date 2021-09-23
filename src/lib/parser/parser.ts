import { getFirstSave } from '../getFirstSave';
import { BitOffset, isBitOffset, offsets } from './constants';
import isEqual from 'lodash/isEqual';

type Quantity = {
	current: number;
	max: number;
};

type ItemStatus = {
	inInventory: boolean;
	equipped: boolean;
};

type SaveFile = {
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

	// TODO: little or big endian?
	return matchingOffset.size === 8
		? saveFileView.getUint8(matchingOffset.offset)
		: saveFileView.getUint16(matchingOffset.offset);
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
 * Reads a Super Metroid SRAM save file and returns
 * the first save parsed out into an object
 */
function parse(save: Uint8Array): SaveFile {
	const view = new DataView(save.buffer);

	return {
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
	};
}

export { parse };
export type { SaveFile };
