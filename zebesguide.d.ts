type Area =
	| 'brinstar'
	| 'crateria'
	| 'maridia'
	| 'norfair'
	| 'tourian'
	| 'wreckedShip';

type Cell =
	| { exposed: false }
	| {
			area: Area;
			exposed: true;
	  };

type CellRow = Cell[];

type CellMatrix = CellRow[];

type Point = { x: number; y: number };
type Region = {
	upperLeft: Point;
	lowerRight: Point;
};
