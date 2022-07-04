import { brinstar0 } from './brinstar0';
import { brinstar3 } from './brinstar3';
import { brinstarm } from './brinstarm';
import { crateria0 } from './crateria0';
import { crateria1 } from './crateria1';
import { maridia0 } from './maridia0';
import { maridia1 } from './maridia1';
import { maridiam } from './maridiam';
import { norfair0 } from './norfair0';
import { norfair5 } from './norfair5';
import { norfairm } from './norfairm';
import { tourian1 } from './tourian1';
import { wreckedShip0 } from './wreckedShip0';

import uniqBy from 'lodash/uniqBy';
import difference from 'lodash/difference';

const inputs = [
	brinstar0,
	brinstar3,
	brinstarm,
	crateria0,
	crateria1,
	maridia0,
	maridia1,
	maridiam,
	norfair0,
	norfair5,
	norfairm,
	tourian1,
	wreckedShip0,
];

const nonDedupedCells = inputs.reduce((building, input) => {
	// eslint-disable-next-line no-console
	console.log(input[0].area, input[0].savePoint, input.length);
	return building.concat(input);
}, []);

const cellsUniqueByXY = uniqBy(
	nonDedupedCells,
	(c) => `${c.mapCell.x}-${c.mapCell.y}`
);

const cells = uniqBy(cellsUniqueByXY, (c) => `${c.byte}-${c.bit}`);

const thrownAway = difference(nonDedupedCells, cells);

console.log('these were thrown away, likely bad data', thrownAway);

// eslint-disable-next-line no-console
console.log('total cells', cells.length);

export { cells };
