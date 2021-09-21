import { FIRST_SAVE_OFFSET, SAVE_SLOT_SIZE } from '../../src/lib/getFirstSave';

/**
 * recalculates the check sums for all the saves
 * in a Super Metroid save file
 *
 * copied from https://github.com/jdratlif/smse/blob/master/docs/sram-doc.txt
 */
function sanitize(save: Uint8Array): Uint8Array {
	for (let game = 0; game < 3; ++game) {
		let ptr = FIRST_SAVE_OFFSET + SAVE_SLOT_SIZE * game;
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

		let hb = high & 0xff;
		let lb = low & 0xff;
		let hc = hb ^ 0xff;
		let lc = lb ^ 0xff;

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
