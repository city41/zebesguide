import { crateria0 } from './crateria0';
import { crateria1 } from './crateria1';
import uniqBy from 'lodash/uniqBy';

const cells = uniqBy(
	crateria0.concat(crateria1),
	(c) => `${c.mapCell.x}-${c.mapCell.y}`
);

console.log('crateria0 count', crateria0.length);
console.log('crateria1 count', crateria1.length);
console.log('total cells', cells.length);

export { cells };
