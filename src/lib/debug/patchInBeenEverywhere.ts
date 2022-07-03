const START_OF_MAP_OFFSET = 0x15a;
const END_OF_MAP_OFFSET = 0x65c;
const SAVE_SLOT_SIZE = 0x65c;
const SAVE_OFFSETS = [0x10, 0x10 + SAVE_SLOT_SIZE, 0x10 + 2 * SAVE_SLOT_SIZE];

export function patchInBeenEverywhere(saveFile: Uint8Array): Uint8Array {
	for (let i = 0; i < 3; ++i) {
		const curMapStart = SAVE_OFFSETS[i] + START_OF_MAP_OFFSET;
		const curMapEnd = SAVE_OFFSETS[i] + END_OF_MAP_OFFSET;

		for (let b = curMapStart; b < curMapEnd; ++b) {
			saveFile[b] = 0xff;
		}
	}

	return saveFile;
}
