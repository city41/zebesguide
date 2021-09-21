import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import { createCanvas, Image } from 'canvas';
import uniqBy from 'lodash/uniqBy';
import { START_OF_MAP_BYTES } from '../src/lib/parser/constants';

type Point = {
	x: number;
	y: number;
};

type ParseResult = {
	screenshotFileName: string;
	area: string;
	savePoint: number;
	byte: number;
	bit: number;
	mapCell: Point;
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
			array[index + 0] === color[0] &&
			array[index + 1] === color[1] &&
			array[index + 2] === color[2] &&
			array[index + 3] === 255
		);
	});

	if (colorIndex === -1) {
		return undefined;
	}

	const pixelY = colorIndex / 4 / GRID_WIDTH;
	const pixelX = (colorIndex / 4) % GRID_WIDTH;

	return {
		x: Math.floor(pixelX / CELL_SIZE),
		y: Math.floor(pixelY / CELL_SIZE),
	};
}

function getByteBit(name: string): { byte: number; bit: number } {
	const pieces = name.split('_');
	const byte = START_OF_MAP_BYTES + parseInt(pieces[1], 10);
	const bit = parseInt(pieces[2]);

	return { byte, bit };
}

function parseScreenshot(
	screenshotPath: string,
	mapSaveSpotPoint: Point,
	area: string,
	savePoint: number
): ParseResult | undefined {
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

	const mapCell = {
		x: mapSaveSpotPoint.x + deltaFromSave.x,
		y: mapSaveSpotPoint.y + deltaFromSave.y,
	};

	const { byte, bit } = getByteBit(screenshotFileName);

	return {
		screenshotFileName,
		area,
		savePoint,
		mapCell,
		byte,
		bit,
	};
}

function main() {
	const screenshotDir = process.argv[2];
	const saveSpotPointStr = process.argv[3];
	const area = process.argv[4];
	const savePointStr = process.argv[5];

	if (!screenshotDir || !saveSpotPointStr || !area || !savePointStr) {
		console.error(
			'usage: node parseScreenshots <screenshot-dir> <save-spot-point> <save-area> <save-point>'
		);
		console.error('the point should be parsable JSON, ie: { "x": 1, "y": 2 }');
		console.error(
			'example: node parseScreenshots my-screenshots/ \'{ "x": 1, "y": 2 }\' crateria 1'
		);
		process.exit(1);
	}

	const saveSpotPoint = JSON.parse(saveSpotPointStr);
	const savePoint = parseInt(savePointStr, 10);

	const screenshotDirPath = path.resolve(process.cwd(), screenshotDir);
	const screenshotFiles = fs.readdirSync(screenshotDirPath).filter((s) => {
		return s.endsWith('.png');
	});

	const result = screenshotFiles.reduce<ParseResult[]>(
		(building, screenshotFile) => {
			const parseResult = parseScreenshot(
				path.resolve(screenshotDirPath, screenshotFile),
				saveSpotPoint,
				area,
				savePoint
			);

			if (parseResult) {
				return building.concat(parseResult);
			} else {
				return building;
			}
		},
		[]
	);

	const uniqueResult = uniqBy(
		result,
		(r) => `${r.byte}-${r.bit}-${r.mapCell.x}-${r.mapCell.y}`
	);

	const uniqueOnlyByCell = uniqBy(
		result,
		(r) => `${r.mapCell.x}-${r.mapCell.y}`
	);

	console.log(JSON.stringify(uniqueResult, null, 2));

	if (uniqueResult.length !== uniqueOnlyByCell.length) {
		console.warn('multiple byte/bit combos point to the same cell');
		const overlaps = result.filter((r, _, a) => {
			const same = a.filter(
				(other) =>
					other.mapCell.x === r.mapCell.x && other.mapCell.y === r.mapCell.y
			);

			return same.length > 1;
		});

		console.log('overlaps');
		console.log(JSON.stringify(overlaps, null, 2));
	}
}

main();
