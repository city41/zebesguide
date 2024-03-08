import { SAVE_OFFSETS, SAVE_SLOT_SIZE } from '../getFirstSave';

/**
 * recalculates the check sums for saves in a Super Metroid save file
 *
 * copied from https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt
 *
 * @param save {Uint8Array} An entire save file
 * @param sanitizeSlots {[boolean, boolean, boolean]} which of the three saves to sanitize
 */
function sanitize(
	save: Uint8Array,
	sanitizeSlots: [boolean, boolean, boolean]
): Uint8Array {
	if (save.byteLength !== 0x2000) {
		throw new Error('santize: provided data is not 0x2000 long');
	}

	for (let game = 0; game < 3; ++game) {
		if (!sanitizeSlots[game]) {
			continue;
		}

		const ptr = SAVE_OFFSETS[game];
		let high = 0;
		let low = 0;

		for (let i = 0; i < SAVE_SLOT_SIZE; i += 2) {
			let value = save[ptr + i];

			if ((high += value) > 0xff) {
				high &= 0xff;
				++low;
			}

			value = save[ptr + i + 1];

			if ((low += value) > 0xff) {
				low &= 0xff;
			}
		}

		const hb = high & 0xff;
		const lb = low & 0xff;
		const hc = hb ^ 0xff;
		const lc = lb ^ 0xff;

		save[game * 2] = hb;
		save[game * 2 + 1] = lb;

		save[8 + game * 2] = hc;
		save[8 + game * 2 + 1] = lc;

		save[0x1ff0 + game * 2] = hb;
		save[0x1ff0 + game * 2 + 1] = lb;

		save[0x1ff8 + game * 2] = hc;
		save[0x1ff8 + game * 2 + 1] = lc;
	}

	return save;
}

export { sanitize };
