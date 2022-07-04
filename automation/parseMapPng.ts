import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import { createCanvas, Image } from 'canvas';

const CELL_SIZE = 8;

const colors = Object.entries({
	crateria: [216, 56, 144],
	tourian: [153, 27, 140],
	brinstar: [1, 126, 19],
	maridia: [40, 56, 136],
	norfair: [212, 32, 32],
	wreckedShip: [209, 177, 2],
});

function determineRegion(data: Uint8ClampedArray) {
	for (let p = 0; p < data.length; p += 4) {
		const pixel = data.slice(p, p + 4);

		if (pixel[0] === 0 && pixel[1] === 0 && pixel[2] === 0) {
			return null;
		}

		const entry = colors.find((c) => {
			return (
				c[1][0] === pixel[0] && c[1][1] === pixel[1] && c[1][2] === pixel[2]
			);
		});

		if (entry) {
			return entry[0];
		}
	}

	return null;
}

function parseMap(mapPath: string) {
	const buffer = fs.readFileSync(mapPath);
	const image = new Image();
	image.src = buffer;

	const canvas = createCanvas(image.width, image.height);
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;
	// @ts-ignore
	context.drawImage(image, 0, 0, image.width, image.height);

	const rows = [];

	for (let y = 0; y < image.height; y += CELL_SIZE) {
		const row = [];
		for (let x = 0; x < image.width; x += CELL_SIZE) {
			const imageData = context.getImageData(x, y, CELL_SIZE, CELL_SIZE).data;
			const region = determineRegion(imageData);

			row.push({
				x: x / CELL_SIZE,
				y: y / CELL_SIZE,
				region,
			});
		}

		rows.push(row);
	}

	return rows;
}

function main() {
	const mapPngRelativePath = process.argv[2];
	if (!mapPngRelativePath) {
		console.error('usage: node parseMapPng <map-png-path>');
		process.exit(1);
	}

	const mapPngPath = path.resolve(process.cwd(), mapPngRelativePath);

	const parseResult = parseMap(mapPngPath);

	console.log('RESULT', JSON.stringify(parseResult, null, 2));
}

main();
