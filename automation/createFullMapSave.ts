import fs from 'fs';
import path from 'path';
import { SAVE_OFFSETS, SAVE_SLOT_SIZE } from '../src/lib/getFirstSave';
import { sanitize } from './sanitize/sanitize';

const startOfMapArea = SAVE_OFFSETS[0] + 0x15a;
const endOfMapArea = SAVE_OFFSETS[0] + SAVE_SLOT_SIZE;

function main() {
	const outPath = process.argv[2];

	if (!outPath) {
		console.error('node createFullMapSave <out-path>');
		process.exit(1);
	}

	const saveFileTemplateBuffer = fs.readFileSync(
		'/home/matt/dev/zebesguide/rom/smetroid.srm_template'
	);
	const saveFileTemplateData = new Uint8Array(saveFileTemplateBuffer.buffer);
	const view = new DataView(saveFileTemplateData.buffer);

	// save spot crateria (start of game)
	view.setUint8(SAVE_OFFSETS[0] + 0x158, 0);
	// first save area
	view.setUint8(SAVE_OFFSETS[0] + 0x156, 0);

	// set the one bit we are focused on
	for (let i = startOfMapArea; i < endOfMapArea; ++i) {
		view.setUint8(i, 0xff);
	}

	const sanitized = sanitize(saveFileTemplateData);

	const outFilePath = path.resolve(process.cwd(), outPath);

	fs.writeFileSync(outFilePath, sanitized);
}

main();
console.log('done');
