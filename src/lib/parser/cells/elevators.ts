import cloneDeep from 'lodash/cloneDeep';

type Elevator = {
	top: Point;
	bottom: Point;
	topArea: Area;
	bottomArea: Area;
};

const elevators: Elevator[] = [
	{
		top: { x: 5, y: 10 },
		bottom: { x: 5, y: 20 },
		topArea: 'crateria',
		bottomArea: 'brinstar',
	},
	{
		top: { x: 22, y: 19 },
		bottom: { x: 22, y: 28 },
		topArea: 'crateria',
		bottomArea: 'brinstar',
	},
	{
		top: { x: 33, y: 9 },
		bottom: { x: 33, y: 24 },
		topArea: 'crateria',
		bottomArea: 'brinstar',
	},
	{
		top: { x: 58, y: 12 },
		bottom: { x: 58, y: 20 },
		topArea: 'crateria',
		bottomArea: 'maridia',
	},
	// maridia->maridia
	// this is really one elevator, but it goes behind
	// rooms, so for this purpose it has been divided into two
	{
		top: { x: 46, y: 24 },
		bottom: { x: 46, y: 26 },
		topArea: 'maridia',
		bottomArea: 'maridia',
	},
	{
		top: { x: 46, y: 31 },
		bottom: { x: 46, y: 33 },
		topArea: 'maridia',
		bottomArea: 'maridia',
	},
	{
		top: { x: 37, y: 38 },
		bottom: { x: 37, y: 40 },
		topArea: 'brinstar',
		bottomArea: 'norfair',
	},
	{
		top: { x: 48, y: 50 },
		bottom: { x: 48, y: 51 },
		topArea: 'norfair',
		bottomArea: 'norfair',
	},
];

/**
 * Returns true if any cell in an elevator is exposed
 */
function hasVisitedElevator(elevator: Elevator, matrix: CellMatrix): boolean {
	for (let y = elevator.top.y; y <= elevator.bottom.y; ++y) {
		if (matrix[y][elevator.top.x].exposed) {
			return true;
		}
	}

	return false;
}

/**
 * If any cell in the matrix is exposed and part of an elevator, then the entire
 * elevator will be exposed.
 */
function addFullElevatorExposure(matrix: CellMatrix): CellMatrix {
	const matrixWithElevators = cloneDeep(matrix);

	for (const elevator of elevators) {
		if (hasVisitedElevator(elevator, matrixWithElevators)) {
			for (let y = elevator.top.y; y <= elevator.bottom.y; ++y) {
				matrixWithElevators[y][elevator.top.x].exposed = true;
			}
		}
	}

	return matrixWithElevators;
}

export { addFullElevatorExposure };
