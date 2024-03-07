import * as path from 'path';
import * as fsp from 'fs/promises';
import { createHash } from 'crypto';
import * as mkdirp from 'mkdirp';

async function main(baseImgPath: string, imgDir: string) {
	const dupeDir = 'dupes';
	mkdirp.sync(path.resolve(imgDir, dupeDir));

	const baseImgBuffer = await fsp.readFile(baseImgPath);
	const baseHash = createHash('sha256').update(baseImgBuffer).digest('base64');

	const imageFiles = (await fsp.readdir(imgDir)).filter((f) =>
		f.endsWith('.png')
	);

	let moveCount = 0;
	for (const imageFile of imageFiles) {
		const fullPath = path.resolve(imgDir, imageFile);
		const buffer = await fsp.readFile(fullPath);
		const hash = createHash('sha256').update(buffer).digest('base64');

		if (baseHash === hash) {
			// move to dupes
			const movedPath = path.resolve(imgDir, dupeDir, imageFile);
			await fsp.rename(fullPath, movedPath);
			moveCount += 1;
		}
	}

	console.log(`moved ${moveCount} dupes`);
}

const [_tsnode, _removeDupes, baseImgPath, imgDir] = process.argv;

if (!baseImgPath || !imgDir) {
	console.error('usage: ts-node removeDupes <base-image-dupe-path> <img-dir>');
	process.exit(1);
}

main(path.resolve(baseImgPath), path.resolve(imgDir))
	.then(() => console.log('done'))
	.catch((e) => console.error(e));
