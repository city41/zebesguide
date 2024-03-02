import 'ignore-styles';
import fs from 'fs';
import path from 'path';
import { createCanvas, Image, CanvasRenderingContext2D } from 'canvas';
import uniqBy from 'lodash/uniqBy';
import uniq from 'lodash/uniq';
import mean from 'lodash/mean';
import { START_OF_MAP_BYTES } from '../src/lib/parser/constants';

const savePointLocations = {
	brinstar0: { x: 11, y: 23 },
	brinstar1: { x: 4, y: 24 },
	brinstar3: { x: 45, y: 37 },
	brinstar4: { x: 34, y: 27 },
	crateria0: { x: 26, y: 5 },
	crateria1: { x: 17, y: 7 },
	maridia0: { x: 36, y: 38 },
	maridia1: { x: 59, y: 23 },
	norfair0: { x: 39, y: 50 },
	norfair5: { x: 63, y: 51 },
	tourian0: { x: 12, y: 18 },
	tourian1: { x: 17, y: 13 },
	wreckedShip0: { x: 50, y: 5 },
};

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
// const WHITE = [255, 255, 255] as const;
const CELL_SIZE = 8;

const GRID_UPPER_LEFT_X = 8;
const GRID_UPPER_LEFT_Y = 23;
const GRID_WIDTH = 240;
const GRID_HEIGHT = 144;

function throwOutOutliers(a: number[]): number[] {
	const avg = mean(a);

	return a.filter((n) => {
		const diff = Math.abs(n - avg);
		const p = (diff / avg) * 100;

		return p < 10;
	});
}

/**
 * the graphic is not always lined up with the grid
 * So this function attempts to find the center of the square
 * and uses that to determine the cell
 */
export function getCell_old2(
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

	const pixelIndicesSet = new Set<number>();

	for (let p = 0; p < dataA.length; p += 4) {
		if (
			dataA[p + 0] === color[0] &&
			dataA[p + 1] === color[1] &&
			dataA[p + 2] === color[2]
		) {
			pixelIndicesSet.add(p);
		}
	}

	const pixelIndices = Array.from(pixelIndicesSet);

	if (pixelIndices.length === 0) {
		return;
	}

	const pixelXs = uniq(pixelIndices.map((i) => (i / 4) % GRID_WIDTH));
	const pixelYs = uniq(pixelIndices.map((i) => i / 4 / GRID_WIDTH));

	const avgX = mean(throwOutOutliers(pixelXs));
	const avgY = mean(throwOutOutliers(pixelYs));

	return {
		// x: Math.floor(avgX / CELL_SIZE),
		// y: Math.floor(avgY / CELL_SIZE),
		x: avgX,
		y: avgY,
	};
}

function getSaveCell(context: CanvasRenderingContext2D): Point | undefined {
	const { data } = context.getImageData(
		GRID_UPPER_LEFT_X,
		GRID_UPPER_LEFT_Y,
		GRID_WIDTH,
		GRID_HEIGHT
	);

	const dataA = Array.from(data);
	const matrix: string[] = [];

	function toStringRow(r: number[]): string {
		return r.reduce<string>((b, _v, i, a) => {
			if (i % 4 !== 0) {
				return b;
			}
			const isWhite =
				a[i + 0] === 255 &&
				a[i + 1] === 255 &&
				a[i + 2] === 255 &&
				a[i + 3] === 255;

			return b.concat(isWhite ? 'w' : '-');
		}, '');
	}

	for (let y = 0; y < GRID_HEIGHT; ++y) {
		matrix.push(
			toStringRow(dataA.slice(y * GRID_WIDTH * 4, (y + 1) * GRID_WIDTH * 4))
		);
	}

	const topRow = matrix.find((row) => {
		// for some reason they are "targets" when in norfair
		// instead of full squares, so only looking for 3 pixels
		return row.includes('www');
	});

	if (!topRow) {
		return undefined;
	}

	return {
		x: Math.floor((topRow.indexOf('w') + 4) / CELL_SIZE),
		y: Math.floor((matrix.indexOf(topRow) + 4) / CELL_SIZE),
	};
}

function getPinkCell(context: CanvasRenderingContext2D): Point | undefined {
	const { data } = context.getImageData(
		GRID_UPPER_LEFT_X,
		GRID_UPPER_LEFT_Y,
		GRID_WIDTH,
		GRID_HEIGHT
	);

	const dataA = Array.from(data);

	const pinkIndex = dataA.findIndex((_v, i, a) => {
		return a[i + 0] === PINK[0] && a[i + 1] === PINK[1] && a[i + 2] === PINK[2];
	});

	if (pinkIndex < 0) {
		return undefined;
	}

	return {
		x: Math.floor(((pinkIndex / 4) % GRID_WIDTH) / CELL_SIZE),
		y: Math.floor(Math.floor(pinkIndex / 4 / GRID_WIDTH) / CELL_SIZE),
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

	const pinkCell = getPinkCell(context);

	if (!pinkCell) {
		return undefined;
	}

	const saveCell = getSaveCell(context);

	// console.log('pinkCell', JSON.stringify(pinkCell));
	// console.log('saveCell', JSON.stringify(saveCell));

	if (!saveCell) {
		console.warn('Failed to find the save cell for: ' + screenshotFileName);
		return undefined;
	}

	const deltaFromSave = {
		x: pinkCell.x - saveCell.x,
		y: pinkCell.y - saveCell.y,
	};

	// console.log('deltaFromSave', JSON.stringify(deltaFromSave));

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
	const area = process.argv[3];
	const savePointStr = process.argv[4];

	if (!screenshotDir || !area || !savePointStr) {
		console.error(
			'usage: ts-node parseScreenshots <screenshot-dir> <save-area> <save-point>'
		);
		console.error('example: node parseScreenshots my-screenshots/ crateria 1');
		process.exit(1);
	}

	const savePoint = parseInt(savePointStr, 10);
	const saveSpotPoint =
		savePointLocations[
			`${area}${savePoint}` as keyof typeof savePointLocations
		];

	if (!saveSpotPoint) {
		console.error('No save spot found for', area, savePoint);
		process.exit(1);
	}

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

		console.warn('overlaps');
		console.warn(JSON.stringify(overlaps, null, 2));
	}
}

main();
