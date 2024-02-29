type Cell = {
	exposed: boolean;
};

type CellRow = Cell[];

type CellMatrix = CellRow[];

type Point = { x: number; y: number };
type Region = {
	upperLeft: Point;
	lowerRight: Point;
};

type Area =
	| 'brinstar'
	| 'crateria'
	| 'maridia'
	| 'norfair'
	| 'tourian'
	| 'wreckedShip';
