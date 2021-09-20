const COLS = 70;
const ROWS = 58;

const shipPoint = { x: 26, y: 5 };

function getStartingCells(): CellMatrix {
	const matrix = [];

	for (let y = 0; y < ROWS; ++y) {
		const row = [];
		for (let x = 0; x < COLS; ++x) {
			row.push({
				exposed: shipPoint.x === x && shipPoint.y === y,
			});
		}
		matrix.push(row);
	}

	return matrix;
}

export { getStartingCells };
