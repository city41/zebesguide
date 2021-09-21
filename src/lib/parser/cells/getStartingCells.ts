import { MAP_COLS, MAP_ROWS, MAP_SHIP_POINT } from './constants';

function getStartingCells(): CellMatrix {
	const matrix = [];

	for (let y = 0; y < MAP_ROWS; ++y) {
		const row = [];
		for (let x = 0; x < MAP_COLS; ++x) {
			row.push({
				exposed: MAP_SHIP_POINT.x === x && MAP_SHIP_POINT.y === y,
			});
		}
		matrix.push(row);
	}

	return matrix;
}

export { getStartingCells };
