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
import { tourian0 } from './tourian0';
import { wreckedShip0 } from './wreckedShip0';

import groupBy from 'lodash/groupBy';
import uniqBy from 'lodash/uniqBy';

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
	tourian0,
	wreckedShip0,
];

const nonDedupedCells = inputs.reduce((building, input) => {
	// eslint-disable-next-line no-console
	console.log(
		input[0].area,
		// @ts-ignore
		input[0].savePoint ?? 'manual',
		input.length
	);
	return building.concat(input);
}, []);

const cells = uniqBy(nonDedupedCells, (c) => `${c.mapCell.x} -${c.mapCell.y}`);

const groupedByBit = groupBy(cells, (c) => `${c.byte}-${c.bit}`);
const dupeByBit = Object.values(groupedByBit).filter((v) => v.length > 1);

// eslint-disable-next-line no-console
console.log('dupeByBit', dupeByBit);

export { cells };
