export const offsets = [
	{
		offset: 0x0,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			0: ['variaSuit'],
			1: ['springBall'],
			2: ['morphBall'],
			3: ['screwAttack'],
			5: ['gravitySuit'],
		},
	},
	{
		offset: 0x1,
		size: 8,
		key: ['itemEquipped'],
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
		bits: {
			0: ['variaSuit'],
			1: ['springBall'],
			2: ['morphBall'],
			3: ['screwAttack'],
			5: ['gravitySuit'],
		},
	},
	{
		offset: 0x3,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			0: ['highJumpBoots'],
			1: ['spaceJump'],
			3: ['bombs'],
			5: ['speedBooster'],
			6: ['grapplingBeam'],
			7: ['xRayScope'],
		},
	},
	{
		offset: 0x4,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			0: ['waveBeam'],
			1: ['iceBeam'],
			2: ['spazer'],
			3: ['plazmaBeam'],
		},
	},
	{
		offset: 0x5,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			4: ['chargeBeam'],
		},
	},
	{
		offset: 0x6,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			0: ['waveBeam'],
			1: ['iceBeam'],
			2: ['spazer'],
			3: ['plasmaBeam'],
		},
	},
	{
		offset: 0x7,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			4: ['chargeBeam'],
		},
	},
	{
		offset: 0x10,
		size: 16,
		key: ['config', 'shotButton'],
	},
	{
		offset: 0x12,
		size: 16,
		key: ['config', 'jumpButton'],
	},
	{
		offset: 0x14,
		size: 16,
		key: ['config', 'dashButton'],
	},
	{
		offset: 0x16,
		size: 16,
		key: ['config', 'itemCancelButton'],
	},
	{
		offset: 0x18,
		size: 16,
		key: ['config', 'itemSelectButton'],
	},
	{
		offset: 0x1a,
		size: 16,
		key: ['config', 'angleDownButton'],
	},
	{
		offset: 0x1c,
		size: 16,
		key: ['config', 'angleUputton'],
	},
	{
		offset: 0x20,
		size: 16,
		key: ['currentEnergy'],
	},
	{
		offset: 0x22,
		size: 16,
		key: ['maxEnergy'],
	},
	{
		offset: 0x24,
		size: 16,
		key: ['currentMissiles'],
	},
	{
		offset: 0x26,
		size: 16,
		key: ['maxMissiles'],
	},
	{
		offset: 0x28,
		size: 16,
		key: ['currentSuperMissiles'],
	},
	{
		offset: 0x2a,
		size: 16,
		key: ['maxSuperMissiles'],
	},
	{
		offset: 0x32,
		size: 16,
		key: ['maxReserveEnergy'],
	},
	{
		offset: 0x34,
		size: 16,
		key: ['reserveEnergy'],
	},
	{
		offset: 0x3e,
		size: 8,
		key: ['gameTime', 'Hours'],
	},
	{
		offset: 0x3c,
		size: 8,
		key: ['gameTime', 'Minutes'],
	},
	{
		offset: 0x40,
		size: 8,
		key: ['config', 'language'],
		bits: {
			0: ['englishOrJapanese'],
		},
	},
	{
		offset: 0x42,
		size: 8,
		key: ['config', 'moonwalk'],
		bits: {
			0: ['moonwalkOffOrOn'],
		},
	},
	{
		offset: 0x48,
		size: 8,
		key: ['config', 'icon cancel'],
		bits: {
			0: ['iconCancelManualOrAutomatic'],
		},
	},
	{
		offset: 0x60,
		size: 8,
		key: ['bossStatueBroken', 'zebetites'],
		bits: {
			0: ['zebetiteBit0'],
			1: ['zebetiteBit1'],
			2: ['zebetiteBit2'],
			6: ['bossStatueBroken', 'phantoon'],
			7: ['bossStatueBroken', 'ridley'],
		},
	},
	{
		offset: 0x61,
		size: 8,
		key: ['bossStatueBroken', 'landmark'],
		bits: {
			0: ['bossStateuBroken', 'draygon'],
			1: ['bossStateuBroken', 'kraid'],
			2: ['landmark', 'tourian', 'elevator'],
			3: ['landmark', 'maridia', 'glassTubeBroken'],
			7: ['landmark', 'rescuedAnimals'],
		},
	},
	{
		offset: 0x62,
		size: 8,
		key: ['metroidRooms'],
		bits: {
			0: ['metroidRoom0'],
			1: ['metroidRoom1'],
			2: ['metroidRoom2'],
			3: ['metroidRoom3'],
		},
	},
	{
		offset: 0x68,
		size: 8,
		key: ['bossDefeated'],
		bits: {
			2: ['bossDefeated', 'silverTorizo'],
		},
	},
	{
		offset: 0x69,
		size: 8,
		key: ['bossDefeated'],
		bits: {
			0: ['bossDefeated', 'kraid'],
			1: ['bossDefeated', 'sporeSpawn'],
		},
	},
	{
		offset: 0x6a,
		size: 8,
		key: ['bossDefeated'],
		bits: {
			0: ['bossDefeated', 'ridley'],
			1: ['bossDefeated', 'crocomire'],
			2: ['bossDefeated', 'goldenTorizo'],
		},
	},
	{
		offset: 0x6b,
		size: 8,
		key: ['bossDefeated'],
		bits: {
			0: ['bossDefeated', 'phantoon'],
		},
	},
	{
		offset: 0x6c,
		size: 8,
		key: ['bossDefeated'],
		bits: {
			0: ['bossDefeated', 'draygon'],
			1: ['bossDefeated', 'botwoon'],
		},
	},
	{
		offset: 0xb0,
		size: 8,
		key: [
			'itemAcquired',
			'crateria',
			'missilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			0: ['crateria', 'powerBombPack'],
			1: ['crateria', 'missilePack'],
			2: ['crateria', 'missilePack'],
			3: ['crateria', 'missilePack'],
			4: ['crateria', 'missilePack'],
			5: ['crateria', 'energyTank'],
			6: ['crateria', 'missilePack'],
			7: ['crateria', 'bombPack'],
		},
	},
	{
		offset: 0xb1,
		size: 8,
		key: [
			'crateria',
			'brinstar',
			'missilePacks',
			'superMissilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			0: ['crateria', 'energyTank'],
			1: ['crateria', 'missilePack'],
			2: ['crateria', 'missilePack'],
			3: ['crateria', 'superMissilePack'],
			4: ['crateria', 'missilePack'],
			5: ['brinstar', 'powerBombPack'],
			6: ['brinstar', 'superMissilePack'],
			7: ['brinstar', 'missilePack'],
		},
	},
	{
		offset: 0xb2,
		size: 8,
		key: [
			'itemAcquired',
			'brinstar',
			'missilePacks',
			'superMissilePacks',
			'reserveTanks',
		],
		bits: {
			0: ['brinstar', 'superMissilePack'],
			1: ['brinstar', 'reserveTank'],
			2: ['brinstar', 'missilePack'],
			3: ['brinstar', 'missilePack'],
			5: ['brinstar', 'missilePack'],
			6: ['brinstar', 'missilePack'],
			7: ['itemAcquired', 'chargeBeam'],
		},
	},
	{
		offset: 0xb3,
		size: 8,
		key: [
			'itemAcquired',
			'brinstar',
			'missilePacks',
			'superMissilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			0: ['brinstar', 'powerBombPack'],
			1: ['brinstar', 'missilePack'],
			2: ['itemAcquired', 'morphBall'],
			3: ['brinstar', 'powerBombPack'],
			4: ['brinstar', 'missilePack'],
			5: ['brinstar', 'energyTank'],
			6: ['brinstar', 'energyTank'],
			7: ['brinstar', 'superMissilePack'],
		},
	},
	{
		offset: 0xb4,
		size: 8,
		key: [
			'itemAcquired',
			'brinstar',
			'missilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			1: ['brinstar', 'energyTank'],
			2: ['brinstar', 'missilePack'],
			3: ['brinstar', 'energyTank'],
			4: ['brinstar', 'missilePack'],
			5: ['brinstar', 'missilePack'],
			6: ['itemAcquired', 'xRayScope'],
			7: ['brinstar', 'powerBombPack'],
		},
	},
	{
		offset: 0xb5,
		size: 8,
		key: [
			'itemAcquired',
			'brinstar',
			'missilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			0: ['brinstar', 'powerBombPack'],
			1: ['brinstar', 'missilePack'],
			2: ['itemAcquired', 'spazer'],
			3: ['brinstar', 'energyTank'],
			4: ['brinstar', 'missilePack'],
		},
	},
	{
		offset: 0xb6,
		size: 8,
		key: ['itemAcquired', 'norfair', 'missilePacks', 'energyTanks'],
		bits: {
			0: ['itemAcquired', 'variaSuit'],
			1: ['norfair', 'missilePack'],
			2: ['itemAcquired', 'iceBeam'],
			3: ['norfair', 'missilePack'],
			4: ['norfair', 'energyTank'],
			5: ['itemAcquired', 'highJumpBoots'],
			6: ['norfair', 'missilePack'],
			7: ['norfair', 'missilePack'],
		},
	},
	{
		offset: 0xb7,
		size: 8,
		key: [
			'itemAcquired',
			'norfair',
			'missilePacks',
			'powerBombPacks',
			'energyTanks',
			'reserverTanks',
		],
		bits: {
			0: ['norfair', 'energyTank'],
			1: ['norfair', 'powerBombPack'],
			2: ['norfair', 'missilePack'],
			3: ['norfair', 'missilePack'],
			4: ['itemAcquired', 'grapplingBeam'],
			5: ['norfair', 'reservePack'],
			6: ['norfair', 'missilePack'],
			7: ['norfair', 'missilePack'],
		},
	},
	{
		offset: 0xb8,
		size: 8,
		key: ['itemAcquired', 'norfair', 'missilePacks', 'superMissilePacks'],
		bits: {
			0: ['norfair', 'missilePack'],
			1: ['norfair', 'missilePack'],
			2: ['itemAcquired', 'speedBooster'],
			4: ['itemAcquired', 'waveBeam'],
			3: ['norfair', 'missilePack'],
			6: ['norfair', 'missilePack'],
			7: ['norfair', 'superMissilePack'],
		},
	},
	{
		offset: 0xb9,
		size: 8,
		key: [
			'itemAcquired',
			'norfair',
			'missilePacks',
			'powerBombPacks',
			'energyTanks',
		],
		bits: {
			0: ['norfair', 'energyTank'],
			1: ['norfair', 'missilePack'],
			2: ['norfair', 'missilePack'],
			3: ['norfair', 'powerBombPack'],
			4: ['norfair', 'powerBombPack'],
			5: ['norfair', 'missilePack'],
			7: ['itemAcquired', 'screwAttack'],
		},
	},
	{
		offset: 0xba,
		size: 8,
		key: ['norfair', 'energyTanks'],
		bits: {
			0: ['norfair', 'energyTank'],
		},
	},
	{
		offset: 0xc0,
		size: 8,
		key: [
			'itemAcquired',
			'wreckedShip',
			'missilePacks',
			'superMissilePacks',
			'energyTanks',
			'reserverTanks',
		],
		bits: {
			0: ['wreckedShip', 'missilePack'],
			1: ['wreckedShip', 'reserveTank'],
			2: ['wreckedShip', 'missilePack'],
			3: ['wreckedShip', 'missilePack'],
			4: ['wreckedShip', 'energyTank'],
			5: ['wreckedShip', 'superMissilePack'],
			6: ['wreckedShip', 'superMissilePack'],
			7: ['itemAcquired', 'gravitySuit'],
		},
	},
	{
		offset: 0xc1,
		size: 8,
		key: [
			'itemAcquired',
			'maridia',
			'missilePacks',
			'superMissilePacks',
			'energyTanks',
		],
		bits: {
			0: ['maridia', 'missilePack'],
			1: ['maridia', 'superMissilePack'],
			2: ['maridia', 'energyTank'],
			3: ['maridia', 'missilePack'],
			4: ['maridia', 'superMissilePack'],
			5: ['maridia', 'missilePack'],
			6: ['maridia', 'missilePack'],
			7: ['itemAcquired', 'plasmaBeam'],
		},
	},
	{
		offset: 0xc2,
		size: 8,
		key: [
			'itemAcquired',
			'maridia',
			'missilePacks',
			'superMissilePacks',
			'powerBombPacks',
			'reserverTanks',
		],
		bits: {
			0: ['maridia', 'missilePack'],
			1: ['maridia', 'reserveTank'],
			2: ['maridia', 'missilePack'],
			3: ['maridia', 'powerBombPack'],
			4: ['maridia', 'missilePack'],
			5: ['maridia', 'superMissilePack'],
			6: ['itemAcquired', 'springBall'],
			7: ['maridia', 'missilePack'],
		},
	},
	{
		offset: 0xc3,
		size: 8,
		key: ['itemAcquired', 'maridia', 'energyTanks'],
		bits: {
			0: ['maridia', 'energyTank'],
			2: ['itemAcquired', 'spaceJump'],
		},
	},
	{
		offset: 0xf0,
		size: 8,
		key: ['crateria', 'redDoors', 'greenDoors'],
		bits: {
			0: ['crateria', 'greenDoor'],
			5: ['crateria', 'redDoor'],
		},
	},
	{
		offset: 0xf3,
		size: 8,
		key: ['crateria', 'brinstar', 'redDoors', 'greenDoors'],
		bits: {
			4: ['crateria', 'greenDoor'],
			5: ['crateria', 'redDoor'],
			6: ['crateria', 'redDoor'],
			7: ['brinstar', 'redDoor'],
		},
	},
	{
		offset: 0xf4,
		size: 8,
		key: ['brinstar', 'redDoors'],
		bits: {
			0: ['brinstar', 'redDoor'],
			1: ['brinstar', 'redDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'redDoor'],
			6: ['brinstar', 'redDoor'],
		},
	},
	{
		offset: 0xf5,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors'],
		bits: {
			1: ['brinstar', 'greenDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'redDoor'],
			6: ['brinstar', 'greenDoor'],
		},
	},
	{
		offset: 0xf6,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors'],
		bits: {
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'greenDoor'],
			4: ['brinstar', 'greenDoor'],
			5: ['brinstar', 'greenDoor'],
		},
	},
	{
		offset: 0xf7,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors'],
		bits: {
			0: ['brinstar', 'greenDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'greenDoor'],
			5: ['brinstar', 'greenDoor'],
			7: ['brinstar', 'greenDoor'],
		},
	},
	{
		offset: 0xf8,
		size: 8,
		key: ['brinstar', 'greenDoors'],
		bits: {
			4: ['brinstar', 'greenDoor'],
		},
	},
	{
		offset: 0xf9,
		size: 8,
		key: ['norfair', 'redDoors', 'greenDoors'],
		bits: {
			1: ['norfair', 'greenDoor'],
			2: ['norfair', 'redDoor'],
			3: ['norfair', 'greenDoor'],
			5: ['norfair', 'redDoor'],
			6: ['norfair', 'greenDoor'],
		},
	},
	{
		offset: 0xfa,
		size: 8,
		key: ['norfair', 'redDoors', 'greenDoors'],
		bits: {
			1: ['norfair', 'redDoor'],
			2: ['norfair', 'redDoor'],
			3: ['norfair', 'greenDoor'],
			4: ['norfair', 'greenDoor'],
			5: ['norfair', 'redDoor'],
			6: ['norfair', 'redDoor'],
			7: ['norfair', 'redDoor'],
		},
	},
	{
		offset: 0xfb,
		size: 8,
		key: ['norfair', 'greenDoors'],
		bits: {
			7: ['norfair', 'greenDoor'],
		},
	},
	{
		offset: 0x100,
		size: 8,
		key: ['wreckedShip', 'greenDoors'],
		bits: {
			4: ['wreckedShip', 'greenDoor'],
		},
	},
	{
		offset: 0x101,
		size: 8,
		key: ['wreckedShip', 'maridia', 'redDoors', 'greenDoors'],
		bits: {
			3: ['wreckedShip', 'redDoor'],
			4: ['maridia', 'redDoor'],
			5: ['maridia', 'redDoor'],
			6: ['maridia', 'redDoor'],
			7: ['maridia', 'greenDoor'],
		},
	},
	{
		offset: 0x102,
		size: 8,
		key: ['maridia', 'redDoors', 'greenDoors'],
		bits: {
			0: ['maridia', 'redDoor'],
			2: ['maridia', 'redDoor'],
			4: ['maridia', 'greenDoor'],
			5: ['maridia', 'greenDoor'],
			6: ['maridia', 'redDoor'],
		},
	},
	{
		offset: 0x103,
		size: 8,
		key: ['maridia', 'redDoors', 'greenDoors'],
		bits: {
			0: ['maridia', 'redDoor'],
			2: ['maridia', 'greenDoor'],
		},
	},
	{
		offset: 0x104,
		size: 8,
		key: ['tourian', 'redDoors'],
		bits: {
			7: ['tourian', 'redDoor'],
		},
	},
	{
		offset: 0x105,
		size: 8,
		key: ['tourian', 'redDoors'],
		bits: {
			1: ['tourian', 'redDoor'],
		},
	},
	{
		offset: 0x148,
		size: 8,
		key: ['crateria', 'map'],
	},
	{
		offset: 0x149,
		size: 8,
		key: ['brinstar', 'map'],
	},
	{
		offset: 0x14a,
		size: 8,
		key: ['norfair', 'map'],
	},
	{
		offset: 0x14b,
		size: 8,
		key: ['wreckedShip', 'map'],
	},
	{
		offset: 0x14c,
		size: 8,
		key: ['maridia', 'map'],
	},
	{
		offset: 0x14d,
		size: 8,
		key: ['tourian', 'map'],
	},
	{
		offset: 0x156,
		size: 8,
		key: ['save spot', 'point'],
	},
	{
		offset: 0x158,
		size: 8,
		key: ['save spot', 'area'],
	},
] as const;
