import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import { createCanvas, Image } from 'canvas';

const PINK = [222, 57, 148] as const;

const GRID_UPPER_LEFT_X = 8;
const GRID_UPPER_LEFT_Y = 23;
const GRID_WIDTH = 240;
const GRID_HEIGHT = 144;

function hasColor(
	context: CanvasRenderingContext2D,
	color: readonly [number, number, number]
): boolean {
	const data = context.getImageData(
		GRID_UPPER_LEFT_X,
		GRID_UPPER_LEFT_Y,
		GRID_WIDTH,
		GRID_HEIGHT
	);

	const dataA = Array.from(data.data);

	const colorIndex = dataA.findIndex((_, index, array) => {
		return (
			array[index + 0] === color[0] &&
			array[index + 1] === color[1] &&
			array[index + 2] === color[2] &&
			array[index + 3] === 255
		);
	});

	return colorIndex !== -1;
}

function hasMapCell(screenshotPath: string): boolean {
	const buffer = fs.readFileSync(screenshotPath);
	const image = new Image();
	image.src = buffer;

	const canvas = createCanvas(image.width, image.height);
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;
	// @ts-ignore
	context.drawImage(image, 0, 0, image.width, image.height);

	return hasColor(context, PINK);
}

function main() {
	const screenshotDir = process.argv[2];

	if (!screenshotDir) {
		console.error('usage: node deleteShotsWithNoMapCell <screenshot-dir>');
		process.exit(1);
	}

	const screenshotDirPath = path.resolve(process.cwd(), screenshotDir);
	const screenshotFiles = fs.readdirSync(screenshotDirPath).filter((s) => {
		return s.endsWith('.png');
	});

	let deleteCount = 0;

	screenshotFiles.forEach((screenshotFile) => {
		const screenPath = path.resolve(screenshotDirPath, screenshotFile);
		if (!hasMapCell(screenPath)) {
			fs.unlinkSync(screenPath);
			deleteCount++;
		}
	});

	console.log('deleted', deleteCount);
}

main();
