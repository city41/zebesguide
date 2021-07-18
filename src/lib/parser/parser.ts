import { getFirstSave } from '../getFirstSave';

type SaveFile = {
	energy: {
		current: number;
		max: number;
	};
};

/**
 * Reads a Super Metroid SRAM save file and returns
 * the first save parsed out into an object
 */
function parse(saveFile: Uint8Array): SaveFile {
	const firstSave = getFirstSave(saveFile);
	const view = new DataView(firstSave.buffer);

	return {
		energy: {
			current: view.getUint16(0x20, true),
			max: view.getUint16(0x22, true),
		},
	};
}

export { parse };
export type { SaveFile };
