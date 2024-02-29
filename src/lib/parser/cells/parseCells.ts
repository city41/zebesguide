import { MAP_COLS, MAP_ROWS, MAP_SHIP_POINT } from './constants';
import { cells } from './mapBits';
import { addFullElevatorExposure } from './elevators';

function isExposed(c: Point, save: Uint8Array): boolean {
	if (MAP_SHIP_POINT.x === c.x && MAP_SHIP_POINT.y === c.y) {
		return true;
	}

	const mapCellEntry = cells.find(
		(mce) => mce.mapCell.x === c.x && mce.mapCell.y === c.y
	);

	if (!mapCellEntry) {
		return false;
	}

	const saveByte = save[mapCellEntry.byte];

	return !!(saveByte & (1 << mapCellEntry.bit));
}

function parseCells(save: Uint8Array): CellMatrix {
	const matrixMinusElevators = [];

	for (let y = 0; y < MAP_ROWS; ++y) {
		const row = [];
		for (let x = 0; x < MAP_COLS; ++x) {
			row.push({
				exposed: isExposed({ x, y }, save),
			});
		}
		matrixMinusElevators.push(row);
	}

	return addFullElevatorExposure(matrixMinusElevators);
}

export { parseCells };
