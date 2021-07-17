const COLS = 70;
const ROWS = 58;

const shipRegion = {
	upperLeft: { x: 26, y: 5 },
	lowerRight: { x: 28, y: 5 },
};

function isInside(point: Point, region: Region) {
	return (
		point.x >= region.upperLeft.x &&
		point.x <= region.lowerRight.x &&
		point.y >= region.upperLeft.y &&
		point.y <= region.lowerRight.y
	);
}

function getStartingCells(): CellMatrix {
	const matrix = [];

	for (let y = 0; y < ROWS; ++y) {
		const row = [];
		for (let x = 0; x < COLS; ++x) {
			row.push({
				exposed: isInside({ x, y }, shipRegion),
			});
		}
		matrix.push(row);
	}

	return matrix;
}

export { getStartingCells };
