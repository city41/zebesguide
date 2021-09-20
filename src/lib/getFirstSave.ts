const FIRST_SAVE_OFFSET = 0x10;
const SAVE_SLOT_SIZE = 0x65c;

function getFirstSave(data: Uint8Array): Uint8Array {
	return data.slice(FIRST_SAVE_OFFSET, FIRST_SAVE_OFFSET + SAVE_SLOT_SIZE);
}

export { getFirstSave, FIRST_SAVE_OFFSET, SAVE_SLOT_SIZE };
