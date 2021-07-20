
export const offsets = [
	{
		offset: 0x0,
		size: 8,
		key: ['itemEquipped'],
		description: 'flag for item equipped',
		bits: {
			variaSuit: 0,
			springBall: 1,
			morphBall: 2,
			screwAttack: 3,
			gravitySuit: 5,
		},
	} ,
	{
		offset: 0x1,
		size: 8,
		key: ['itemEquipped'],
		description: 'flag for item equipped',
		bits: {
			highJumpBoots: 0,
			spaceJump: 1,
			bombs: 2,
			speedBooster: 5,
			grapplingBeam: 6,
			xRayScope: 7,
		},
	} ,
	{
		offset: 0x2,
		size: 8,
		key: ['itemInInventory'],
		description: 'flag for item in inventory',
		bits: {
			variaSuit: 0,
			springBall: 1,
			morphBall: 2,
			screwAttack: 3,
			gravitySuit: 5,
		},
	} ,
	{
		offset: 0x3,
		size: 8,
		key: ['itemInInventory'],
		description: 'flag for item in inventory',
		bits: {
			highJumpBoots: 0,
			spaceJump: 1,
			bombs: 3,
			speedBooster: 5,
			grapplingBeam: 6,
			xRayScope: 7,
		},
	} ,
	{
		offset: 0x4,
		size: 8,
		key: ['itemEquipped'],
		description: 'flag for item equipped',
		bits: {
			waveBeam: 0,
			iceBeam: 1,
			spazer: 2,
			plasmaBeam: 3,
		},
	} ,
	{
		offset: 0x5,
		size: 8,
		key: ['itemEquipped'],
		description: 'flag for item equipped',
		bits: {
			chargeBeam: 4,
		},
	} ,
	{
		offset: 0x6,
		size: 8,
		key: ['itemInInventory'],
		description: 'flag for item in inventory',
		bits: {
			waveBeam: 0,
			iceBeam: 1,
			spazer: 2,
			plasmaBeam: 3,
		},
	} ,
	{
		offset: 0x7,
		size: 8,
		key: ['itemInInventory'],
		description: 'flag for item in inventory',
		bits: {
			chargeBeam: 4,
		},
	} ,
	{
		offset: 0x10,
		size: 16,
		key: ['config', 'shotButton'],
		description: 'shot button',
	} ,
	{
		offset: 0x12,
		size: 16,
		key: ['config', 'jumpButton'],
		description: 'jump button',
	} ,
	{
		offset: 0x14,
		size: 16,
		key: ['config', 'dashButton'],
		description: 'dash button',
	} ,
	{
		offset: 0x16,
		size: 16,
		key: ['config', 'itemCancelButton'],
		description: 'item cancel button',
	} ,
	{
		offset: 0x18,
		size: 16,
		key: ['config', 'itemSelectButton'],
		description: 'item select button',
	} ,
	{
		offset: 0x1a,
		size: 16,
		key: ['config', 'angleDownButton'],
		description: 'angle down button',
	} ,
	{
		offset: 0x1c,
		size: 16,
		key: ['config', 'angleUputton'],
		description: 'angle up button',
	} ,
	{
		offset: 0x20,
		size: 16,
		key: ['currentEnergy'],
		description: 'current energy',
	} ,
	{
		offset: 0x22,
		size: 16,
		key: ['maxEnergy'],
		description: 'max energy',
	} ,
	{
		offset: 0x24,
		size: 16,
		key: ['currentMissiles'],
		description: 'current missiles',
	} ,
	{
		offset: 0x26,
		size: 16,
		key: ['maxMissiles'],
		description: 'max missiles',
	} ,
	{
		offset: 0x28,
		size: 16,
		key: ['currentSuperMissiles'],
		description: 'current super missiles',
	} ,
	{
		offset: 0x2a,
		size: 16,
		key: ['maxSuperMissiles'],
		description: 'max super missiles',
	} ,
	{
		offset: 0x32,
		size: 16,
		key: ['maxReserveEnergy'],
		description: 'max reserve energy',
	} ,
	{
		offset: 0x34,
		size: 16,
		key: ['reserveEnergy'],
		description: 'current reserve energy',
	} ,
	{
		offset: 0x3e,
		size: 8,
		key: ['gameTime', 'Hours'],
		description: 'game time hours',
	} ,
	{
		offset: 0x3c,
		size: 8,
		key: ['gameTime', 'Minutes'],
		description: 'game time minutes',
	} ,
	{
		offset: 0x40,
		size: 8,
		key: ['config', 'language'],
		description: 'config: English or Japanese',
		bits: {
			englishOrJapanese: 0
		}
	} ,
	{
		offset: 0x42,
		size: 8,
		key: ['config', 'moonwalk'],
		description: 'config: Moonwalk',
		bits: {
			moonWalkOffOrOn: 0
		}
	} ,
	{
		offset: 0x48,
		size: 8,
		key: ['config', 'icon cancel'],
		description: 'config: Icon Cancel',
		bits: {
			iconCancelManualOrAutomatic: 0
		}
	} ,
	{
		offset: 0x60,
		size: 8,
		key: ['bossStatueBroken', 'zebetites'],
		description: 'flag for boss statue broken | zebetites',
		bits: {
			zebetiteBit0: 0,
			zebetiteBit1: 1,
			zebetiteBit2: 2,
			phantoon: 6,
			ridley: 7,
		},
	} ,
	{
		offset: 0x61,
		size: 8,
		key: ['bossStatueBroken', 'landmarks'],
		description: 'flag for boss statue broken | landmarks',
		bits: {
			tourianElevator: 2,
			maridiaGlassTubeBroken: 3,
			draygon: 0,
			kraid: 1,
			rescuedAnimals: 7,
		},
	} ,
	{
		offset: 0x62,
		size: 8,
		key: ['metroidRooms'],
		description: 'flag for if metroid rooms cleared',
		bits: {
			room0: 0,
			room1: 1,
			room2: 2,
			room3: 3,
		},
	} ,
	{
		offset: 0x68,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			silverTorizo: 2,
		},
	} ,
	{
		offset: 0x69,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			kraid: 0,
			sporeSpawn: 1,
		},
	} ,
	{
		offset: 0x6a,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			ridley: 0,
			crocomire: 1,
			goldenTorizo: 2,
		},
	} ,
	{
		offset: 0x6b,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			phantoon: 0,
		},
	} ,
	{
		offset: 0x6c,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			draygon: 0,
			botwoon: 1,
		},
	} ,
	{
		offset: 0xb0,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			bombs: 7,
		},
	} ,
	{
		offset: 0xb2,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			chargeBeam: 7,
		},
	} ,
	{
		offset: 0xb3,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			morphBall: 2,
		},
	} ,
	{
		offset: 0xb4,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			xRayScope: 6,
		},
	} ,
	{
		offset: 0xb5,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			spazer: 2,
		},
	} ,
	{
		offset: 0xb6,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			variaSuit: 0,
			iceBeam: 2,
			highJumpBoots: 5,
		},
	} ,
	{
		offset: 0xb9,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			screwAttack: 7,
		},
	} ,
	{
		offset: 0xb7,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			grapplingBeam: 4,
		},
	} ,
	{
		offset: 0xb8,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			speedBooster: 2,
			waveBeam: 4,
		},
	} ,
	{
		offset: 0xb9,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			screwAttack: 7,
		},
	} ,
	{
		offset: 0xc0,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			gravitySuite: 7,
		},
	} ,
	{
		offset: 0xc1,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			plasmaBeam: 7,
		},
	} ,
	{
		offset: 0xc2,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			springBall: 6,
		},
	} ,
	{
		offset: 0xc3,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			spaceJump: 2,
		},
	} ,
	{
		offset: 0x148,
		size: 8,
		key: ['crateria', 'map'],
		description: 'flag for Crateria map',
	} ,
	{
		offset: 0x149,
		size: 8,
		key: ['brinstar', 'map'],
		description: 'flag for Brinstar map',
	} ,
	{
		offset: 0x14a,
		size: 8,
		key: ['norfair', 'map'],
		description: 'flag for Norfair map',
	} ,
	{
		offset: 0x14b,
		size: 8,
		key: ['wreckedShip', 'map'],
		description: 'flag for Wrecked Ship map',
	} ,
	{
		offset: 0x14c,
		size: 8,
		key: ['maridia', 'map'],
		description: 'flag for Maridia map',
	} ,
	{
		offset: 0x14d,
		size: 8,
		key: ['tourian', 'map'],
		description: 'flag for Tourian map',
	}
] as const;
