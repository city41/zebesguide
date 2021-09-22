import { crateria0 } from './crateria0';
import { crateria1 } from './crateria1';
import { brinstar0 } from './brinstar0';

import uniqBy from 'lodash/uniqBy';

const inputs = [crateria0, crateria1, brinstar0];

const nonDedupedCells = inputs.reduce((building, input) => {
	console.log(input[0].area, input[0].savePoint, input.length);
	return building.concat(input);
}, []);

const cells = uniqBy(nonDedupedCells, (c) => `${c.mapCell.x}-${c.mapCell.y}`);
console.log('total cells', cells.length);

export { cells };
