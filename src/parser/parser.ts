type SaveFile = {
	energy: {
		current: number;
		max: number;
	};
};

const FIRST_SAVE_OFFSET = 0x10;
const SAVE_FILE_SIZE = 0x65c;

/**
 * Reads a Super Metroid SRAM save file and returns
 * the first save parsed out into an object
 */
function parse(saveFile: Uint8Array): SaveFile {
	const view = new DataView(
		saveFile.slice(FIRST_SAVE_OFFSET, FIRST_SAVE_OFFSET + SAVE_FILE_SIZE).buffer
	);

	return {
		energy: {
			current: view.getUint16(0x20, true),
			max: view.getUint16(0x22, true),
		},
	};
}

export { parse };
export type { SaveFile };
