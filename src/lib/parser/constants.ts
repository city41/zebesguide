type Offset = {
	offset: number;
	size: 8 | 16;
	key: string;
	description: string;
	bits?: Record<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, string>;
};

export const offsets: Offset[] = [
	{
		offset: 0x20,
		size: 16,
		key: 'currentEnergy',
		description: 'current energy',
	} as const,
	{
		offset: 0x22,
		size: 16,
		key: 'maxEnergy',
		description: 'max energy',
	} as const,
	{
		offset: 0x34,
		size: 16,
		key: 'reserveEnergy',
		description: 'current reserve energy',
	} as const,
	{
		offset: 0x32,
		size: 16,
		key: 'maxReserveEnergy',
		description: 'max reserve energy',
	} as const,
	{
		offset: 0x24,
		size: 16,
		key: 'currentMissiles',
		description: 'current missiles',
	} as const,
	{
		offset: 0x26,
		size: 16,
		key: 'maxMissiles',
		description: 'max missiles',
	} as const,
	{
		offset: 0x28,
		size: 16,
		key: 'currentSuperMissiles',
		description: 'current super missiles',
	} as const,
	{
		offset: 0x2a,
		size: 16,
		key: 'maxSuperMissiles',
		description: 'max super missiles',
	} as const,
].sort((a, b) => a.offset - b.offset);
