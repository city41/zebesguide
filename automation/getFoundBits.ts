import { cells } from '../src/lib/parser/cells/mapBits';

const luaEntries = cells.map((c) => {
	return `["${c.byte}-${c.bit}"] = true,`;
});

console.log('local found_bits = {\n', luaEntries.join('\n'), '\n}');
