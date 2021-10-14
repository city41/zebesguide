const SAVE_SLOT_SIZE = 0x65c;
const SAVE_OFFSETS = [0x10, 0x10 + SAVE_SLOT_SIZE, 0x10 + 2 * SAVE_SLOT_SIZE];

function getSave(data: Uint8Array, index: number): Uint8Array {
	return data.slice(SAVE_OFFSETS[index], SAVE_OFFSETS[index] + SAVE_SLOT_SIZE);
}

export { getSave, SAVE_OFFSETS, SAVE_SLOT_SIZE };
