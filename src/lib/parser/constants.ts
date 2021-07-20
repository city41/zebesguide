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
	},
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
	},
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
	},
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
	},
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
	},
	{
		offset: 0x5,
		size: 8,
		key: ['itemEquipped'],
		description: 'flag for item equipped',
		bits: {
			chargeBeam: 4,
		},
	},
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
	},
	{
		offset: 0x7,
		size: 8,
		key: ['itemInInventory'],
		description: 'flag for item in inventory',
		bits: {
			chargeBeam: 4,
		},
	},
	{
		offset: 0x10,
		size: 16,
		key: ['config', 'shotButton'],
		description: 'shot button',
	},
	{
		offset: 0x12,
		size: 16,
		key: ['config', 'jumpButton'],
		description: 'jump button',
	},
	{
		offset: 0x14,
		size: 16,
		key: ['config', 'dashButton'],
		description: 'dash button',
	},
	{
		offset: 0x16,
		size: 16,
		key: ['config', 'itemCancelButton'],
		description: 'item cancel button',
	},
	{
		offset: 0x18,
		size: 16,
		key: ['config', 'itemSelectButton'],
		description: 'item select button',
	},
	{
		offset: 0x1a,
		size: 16,
		key: ['config', 'angleDownButton'],
		description: 'angle down button',
	},
	{
		offset: 0x1c,
		size: 16,
		key: ['config', 'angleUputton'],
		description: 'angle up button',
	},
	{
		offset: 0x20,
		size: 16,
		key: ['currentEnergy'],
		description: 'current energy',
	},
	{
		offset: 0x22,
		size: 16,
		key: ['maxEnergy'],
		description: 'max energy',
	},
	{
		offset: 0x24,
		size: 16,
		key: ['currentMissiles'],
		description: 'current missiles',
	},
	{
		offset: 0x26,
		size: 16,
		key: ['maxMissiles'],
		description: 'max missiles',
	},
	{
		offset: 0x28,
		size: 16,
		key: ['currentSuperMissiles'],
		description: 'current super missiles',
	},
	{
		offset: 0x2a,
		size: 16,
		key: ['maxSuperMissiles'],
		description: 'max super missiles',
	},
	{
		offset: 0x32,
		size: 16,
		key: ['maxReserveEnergy'],
		description: 'max reserve energy',
	},
	{
		offset: 0x34,
		size: 16,
		key: ['reserveEnergy'],
		description: 'current reserve energy',
	},
	{
		offset: 0x3e,
		size: 8,
		key: ['gameTime', 'Hours'],
		description: 'game time hours',
	},
	{
		offset: 0x3c,
		size: 8,
		key: ['gameTime', 'Minutes'],
		description: 'game time minutes',
	},
	{
		offset: 0x40,
		size: 8,
		key: ['config', 'language'],
		description: 'config: English or Japanese',
		bits: {
			englishOrJapanese: 0,
		},
	},
	{
		offset: 0x42,
		size: 8,
		key: ['config', 'moonwalk'],
		description: 'config: Moonwalk',
		bits: {
			moonWalkOffOrOn: 0,
		},
	},
	{
		offset: 0x48,
		size: 8,
		key: ['config', 'icon cancel'],
		description: 'config: Icon Cancel',
		bits: {
			iconCancelManualOrAutomatic: 0,
		},
	},
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
	},
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
	},
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
	},
	{
		offset: 0x68,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			silverTorizo: 2,
		},
	},
	{
		offset: 0x69,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			kraid: 0,
			sporeSpawn: 1,
		},
	},
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
	},
	{
		offset: 0x6b,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			phantoon: 0,
		},
	},
	{
		offset: 0x6c,
		size: 8,
		key: ['bossDefeated'],
		description: 'flag for boss defeated',
		bits: {
			draygon: 0,
			botwoon: 1,
		},
	},
	{
		offset: 0xb0,
		size: 8,
		key: ['itemAcquired', 'crateria', 'missilePacks'],
		description: 'flags for if items obtained | crateria missile packs 1-5',
		bits: {
			missilePack1: 1,
			missilePack2: 2,
			missilePack3: 3,
			missilePack4: 4,
			missilePack5: 6,
			bombs: 7,
		},
	},
	{
		offset: 0xb1,
		size: 8,
		key: ['crateria', 'brinstar', 'missilePacks', 'superMissilePacks'],
		description:
			'crateria missile packs 6-8 | crateria super missile pack | brinstar missile packs 1 | brinstar super missile packs 1',
		bits: {
			missilePack6: 1,
			missilePack7: 2,
			crateria_superMissilePack1: 3,
			missilePack8: 4,
			brinstar_superMissilePack1: 6,
			missilePack1: 7,
		},
	},
	{
		offset: 0xb2,
		size: 8,
		key: ['itemAcquired', 'brinstar', 'missilePacks', 'superMissilePacks'],
		description:
			'flags for if items obtained | brinstar missile packs 2-5 | brinstar super missile packs 2',
		bits: {
			superMissilePack2: 0,
			missilePack2: 2,
			missilePack3: 3,
			missilePack4: 5,
			missilePack5: 6,
			chargeBeam: 7,
		},
	},
	{
		offset: 0xb3,
		size: 8,
		key: ['itemAcquired', 'brinstar', 'missilePacks', 'superMissilePacks'],
		description:
			'flags for if items obtained | brinstar missile packs 6-7 | brinstar super missile pack 3',
		bits: {
			missilePack6: 1,
			morphBall: 2,
			missilePack7: 4,
			superMissilePack3: 7,
		},
	},
	{
		offset: 0xb4,
		size: 8,
		key: ['itemAcquired', 'brinstar', 'missilePacks'],
		description: 'flags for if items obtained | brinstar missile packs 8-10',
		bits: {
			missilePack8: 2,
			missilePack9: 4,
			missilePack10: 5,
			xRayScope: 6,
		},
	},
	{
		offset: 0xb5,
		size: 8,
		key: ['itemAcquired', 'brinstar', 'missilePacks'],
		description: 'flags for if items obtained | brinstar missile packs 11-12',
		bits: {
			missilePack11: 1,
			spazer: 2,
			missilePack12: 4,
		},
	},
	{
		offset: 0xb6,
		size: 8,
		key: ['itemAcquired', 'norfair', 'missilePacks'],
		description: 'flags for if items obtained | norfair missile packs 1-4',
		bits: {
			variaSuit: 0,
			missilePack1: 1,
			iceBeam: 2,
			missilePack2: 3,
			highJumpBoots: 5,
			missilePack3: 6,
			missilePack4: 7,
		},
	},
	{
		offset: 0xb7,
		size: 8,
		key: ['norfair', 'missilePacks'],
		description: 'norfair missile packs 5-8',
		bits: {
			missilePack5: 2,
			missilePack6: 3,
			missilePack7: 6,
			missilePack8: 7,
		},
	},
	{
		offset: 0xb8,
		size: 8,
		key: ['norfair', 'missilePacks', 'superMissilePacks'],
		description: 'norfair missile packs 9-12 | norfair super missile packs 1',
		bits: {
			missilePack9: 0,
			missilePack10: 1,
			missilePack11: 3,
			missilePack12: 6,
			superMissilePack1: 7,
		},
	},
	{
		offset: 0xb9,
		size: 8,
		key: ['itemAcquired', 'norfair', 'missilePacks'],
		description: 'flags for if items obtained | norfair missile packs 13-15',
		bits: {
			missilePack13: 1,
			missilePack14: 2,
			missilePack15: 5,
			screwAttack: 7,
		},
	},
	{
		offset: 0xb7,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			grapplingBeam: 4,
		},
	},
	{
		offset: 0xb8,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			speedBooster: 2,
			waveBeam: 4,
		},
	},
	{
		offset: 0xb9,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			screwAttack: 7,
		},
	},
	{
		offset: 0xc0,
		size: 8,
		key: ['itemAcquired', 'wreckedShip', 'missilePacks', 'superMissilePacks'],
		description:
			'flags for if items obtained | wrecked ship missile packs 1-3 | wrecked ship super missile packs 1-2',
		bits: {
			missilePack1: 0,
			missilePack2: 2,
			missilePack3: 3,
			superMissilePack1: 5,
			superMissilePack2: 6,
			gravitySuite: 7,
		},
	},
	{
		offset: 0xc1,
		size: 8,
		key: ['itemAcquired', 'maridia', 'missilePacks'],
		description: 'flags for if items obtained | maridia missile packs 1-4',
		bits: {
			missilePack1: 0,
			missilePack2: 3,
			missilePack3: 5,
			missilePack4: 6,
			plasmaBeam: 7,
		},
	},
	{
		offset: 0xc2,
		size: 8,
		key: ['itemAcquired', 'maridia', 'missilePacks'],
		description: 'flags for if items obtained | maridia missile packs 5-8',
		bits: {
			missilePack5: 0,
			missilePack6: 2,
			missilePack7: 4,
			springBall: 6,
			missilePack8: 7,
		},
	},
	{
		offset: 0xc3,
		size: 8,
		key: ['itemAcquired'],
		description: 'flags for if items obtained',
		bits: {
			spaceJump: 2,
		},
	},
	{
		offset: 0x148,
		size: 8,
		key: ['crateria', 'map'],
		description: 'flag for Crateria map',
	},
	{
		offset: 0x149,
		size: 8,
		key: ['brinstar', 'map'],
		description: 'flag for Brinstar map',
	},
	{
		offset: 0x14a,
		size: 8,
		key: ['norfair', 'map'],
		description: 'flag for Norfair map',
	},
	{
		offset: 0x14b,
		size: 8,
		key: ['wreckedShip', 'map'],
		description: 'flag for Wrecked Ship map',
	},
	{
		offset: 0x14c,
		size: 8,
		key: ['maridia', 'map'],
		description: 'flag for Maridia map',
	},
	{
		offset: 0x14d,
		size: 8,
		key: ['tourian', 'map'],
		description: 'flag for Tourian map',
	},
	{
		offset: 0x156,
		size: 8,
		key: ['save spot', 'point'],
		description: 'save spot point',
	},
	{
		offset: 0x158,
		size: 8,
		key: ['save spot', 'area'],
		description: 'save spot area',
	},
] as const;
