import { brinstar0 } from './brinstar0';
import { brinstar1 } from './brinstar1';
import { brinstar3 } from './brinstar3';
import { brinstar4 } from './brinstar4';
import { brinstarm } from './brinstarm';
import { crateria0 } from './crateria0';
import { crateria1 } from './crateria1';
import { crateriamovie0 } from './crateriamovie0';
import { crateriamovie1 } from './crateriamovie1';
import { crateriamovie2 } from './crateriamovie2';
import { maridia0 } from './maridia0';
import { maridia1 } from './maridia1';
import { maridia3 } from './maridia3';
import { maridiam } from './maridiam';
import { norfair0 } from './norfair0';
import { norfair1 } from './norfair1';
import { norfair5 } from './norfair5';
import { norfairm } from './norfairm';
import { tourian1 } from './tourian1';
import { wreckedShip0 } from './wreckedShip0';

import uniqBy from 'lodash/uniqBy';

const inputs = [
	brinstar0,
	brinstar1,
	brinstar3,
	brinstar4,
	brinstarm,
	crateria0,
	crateria1,
	crateriamovie0,
	crateriamovie1,
	crateriamovie2,
	maridia0,
	maridia1,
	maridia3,
	maridiam,
	norfair0,
	norfair1,
	norfair5,
	norfairm,
	tourian1,
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

export { cells };
