import { MAP_COLS, MAP_ROWS, MAP_SHIP_POINT } from './constants';
import { cells } from './mapBits';
import { addFullElevatorExposure } from './elevators';

function isExposed(c: Point, save: Uint8Array): Cell {
	if (MAP_SHIP_POINT.x === c.x && MAP_SHIP_POINT.y === c.y) {
		return {
			area: 'crateria',
			exposed: true,
		};
	}

	const mapCellEntry = cells.find(
		(mce) => mce.mapCell.x === c.x && mce.mapCell.y === c.y
	);

	if (!mapCellEntry) {
		return { exposed: false };
	}

	const saveByte = save[mapCellEntry.byte];

	return {
		area: mapCellEntry.area as Area,
		exposed: !!(saveByte & (1 << mapCellEntry.bit)),
	};
}

function parseCells(save: Uint8Array): CellMatrix {
	const matrixMinusElevators = [];

	for (let y = 0; y < MAP_ROWS; ++y) {
		const row = [];
		for (let x = 0; x < MAP_COLS; ++x) {
			const isExposedResult = isExposed({ x, y }, save);
			row.push(isExposedResult);
		}
		matrixMinusElevators.push(row);
	}

	return addFullElevatorExposure(matrixMinusElevators);
}

export { parseCells };
