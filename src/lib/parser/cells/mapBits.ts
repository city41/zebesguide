import { brinstar0 } from './brinstar0';
import { crateria0 } from './crateria0';
import { crateria1 } from './crateria1';
import { maridia0 } from './maridia0';
import { norfair0 } from './norfair0';
import { tourian1 } from './tourian1';
import { wreckedShip0 } from './wreckedShip0';

import uniqBy from 'lodash/uniqBy';

const inputs = [
	brinstar0,
	crateria0,
	crateria1,
	maridia0,
	norfair0,
	tourian1,
	wreckedShip0,
];

const nonDedupedCells = inputs.reduce((building, input) => {
	// eslint-disable-next-line no-console
	console.log(input[0].area, input[0].savePoint, input.length);
	return building.concat(input);
}, []);

const cells = uniqBy(nonDedupedCells, (c) => `${c.mapCell.x}-${c.mapCell.y}`);
// eslint-disable-next-line no-console
console.log('total cells', cells.length);

export { cells };
