import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import { createCanvas, Image } from 'canvas';

type Point = {
	x: number;
	y: number;
};

type ParseResult = {
	screenshotFileName: string;
	deltaFromSave: Point;
};

const PINK = [222, 57, 148] as const;
const SHIP_GREEN = [0, 255, 90] as const;
const CELL_SIZE = 8;

const GRID_UPPER_LEFT_X = 8;
const GRID_UPPER_LEFT_Y = 23;
const GRID_WIDTH = 240;
const GRID_HEIGHT = 144;

function getCell(
	context: CanvasRenderingContext2D,
	color: readonly [number, number, number]
): Point | undefined {
	const data = context.getImageData(
		GRID_UPPER_LEFT_X,
		GRID_UPPER_LEFT_Y,
		GRID_WIDTH,
		GRID_HEIGHT
	);

	const dataA = Array.from(data.data);

	const colorIndex = dataA.findIndex((_, index, array) => {
		return (
			array[index] === color[0] &&
			array[index + 1] === color[1] &&
			array[index + 2] === color[2] &&
			array[index + 3] === 255
		);
	});

	if (colorIndex === -1) {
		return undefined;
	}

	const pixelY = colorIndex / 4 / context.canvas.width;
	const pixelX = (colorIndex / 4) % context.canvas.width;

	return {
		x: Math.floor(pixelX / CELL_SIZE),
		y: Math.floor(pixelY / CELL_SIZE),
	};
}

function parseScreenshot(screenshotPath: string): ParseResult | undefined {
	const screenshotFileName = path.basename(screenshotPath);
	const buffer = fs.readFileSync(screenshotPath);
	const image = new Image();
	image.src = buffer;

	const canvas = createCanvas(image.width, image.height);
	const context = canvas.getContext('2d') as CanvasRenderingContext2D;
	// @ts-ignore
	context.drawImage(image, 0, 0, image.width, image.height);

	const pinkCell = getCell(context, PINK);

	if (!pinkCell) {
		return undefined;
	}

	const saveCell = getCell(context, SHIP_GREEN);

	if (!saveCell) {
		throw new Error('Failed to find the save cell for: ' + screenshotFileName);
	}

	const deltaFromSave = {
		x: pinkCell.x - saveCell.x,
		y: pinkCell.y - saveCell.y,
	};

	return {
		screenshotFileName,
		deltaFromSave,
	};
}

function main() {
	const screenshotDir = process.argv[2];

	if (!screenshotDir) {
		console.error('usage: node parseScreenshots <screenshot-dir>');
		process.exit(1);
	}

	const screenshotDirPath = path.resolve(process.cwd(), screenshotDir);
	const screenshotFiles = fs.readdirSync(screenshotDirPath).filter((s) => {
		return s.endsWith('.png');
	});

	const result = screenshotFiles.reduce<ParseResult[]>(
		(building, screenshotFile) => {
			const parseResult = parseScreenshot(
				path.resolve(screenshotDirPath, screenshotFile)
			);

			if (parseResult) {
				return building.concat(parseResult);
			} else {
				return building;
			}
		},
		[]
	);

	console.log(JSON.stringify(result, null, 2));
	console.log('count:', result.length);
}

main();
