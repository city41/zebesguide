type ByteOffset = {
	offset: number;
	size: 8 | 16;
	key: string[];
};

type BitOffset = ByteOffset & {
	bits: Record<number, string[]>;
};

type Offset = ByteOffset | BitOffset;

export const offsets: Offset[] = [
	{
		offset: 0x0,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			0: ['itemEquipped', 'variaSuit'],
			1: ['itemEquipped', 'springBall'],
			2: ['itemEquipped', 'morphingBall'],
			3: ['itemEquipped', 'screwAttack'],
			5: ['itemEquipped', 'gravitySuit'],
		},
	},
	{
		offset: 0x1,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			0: ['itemEquipped', 'hiJumpBoots'],
			1: ['itemEquipped', 'spaceJump'],
			2: ['itemEquipped', 'bombs'],
			5: ['itemEquipped', 'speedBooster'],
			6: ['itemEquipped', 'grapplingBeam'],
			7: ['itemEquipped', 'xRayScope'],
		},
	},
	{
		offset: 0x2,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			0: ['itemInInventory', 'variaSuit'],
			1: ['itemInInventory', 'springBall'],
			2: ['itemInInventory', 'morphingBall'],
			3: ['itemInInventory', 'screwAttack'],
			5: ['itemInInventory', 'gravitySuit'],
		},
	},
	{
		offset: 0x3,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			0: ['itemInInventory', 'hiJumpBoots'],
			1: ['itemInInventory', 'spaceJump'],
			3: ['itemInInventory', 'bombs'],
			5: ['itemInInventory', 'speedBooster'],
			6: ['itemInInventory', 'grapplingBeam'],
			7: ['itemInInventory', 'xRayScope'],
		},
	},
	{
		offset: 0x4,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			0: ['itemEquipped', 'waveBeam'],
			1: ['itemEquipped', 'iceBeam'],
			2: ['itemEquipped', 'spazer'],
			3: ['itemEquipped', 'plasmaBeam'],
		},
	},
	{
		offset: 0x5,
		size: 8,
		key: ['itemEquipped'],
		bits: {
			4: ['itemEquipped', 'chargeBeam'],
		},
	},
	{
		offset: 0x6,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			0: ['itemInInventory', 'waveBeam'],
			1: ['itemInInventory', 'iceBeam'],
			2: ['itemInInventory', 'spazer'],
			3: ['itemInInventory', 'plasmaBeam'],
		},
	},
	{
		offset: 0x7,
		size: 8,
		key: ['itemInInventory'],
		bits: {
			4: ['itemInInventory', 'chargeBeam'],
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
		offset: 0x2c,
		size: 8,
		key: ['currentPowerBombs'],
	},
	{
		offset: 0x2e,
		size: 8,
		key: ['maxPowerBombs'],
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
			0: ['config', 'englishOrJapanese'],
		},
	},
	{
		offset: 0x42,
		size: 8,
		key: ['config', 'moonwalk'],
		bits: {
			0: ['config', 'moonwalkOffOrOn'],
		},
	},
	{
		offset: 0x48,
		size: 8,
		key: ['config', 'icon cancel'],
		bits: {
			0: ['config', 'iconCancelManualOrAutomatic'],
		},
	},
	{
		offset: 0x60,
		size: 8,
		key: ['bossStatueBroken', 'zebetites'],
		bits: {
			0: ['zebetites', 'zebetiteBit0'],
			1: ['zebetites', 'zebetiteBit1'],
			2: ['zebetites', 'zebetiteBit2'],
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
			0: ['metroidRoom', 'metroidRoom0'],
			1: ['metroidRoom', 'metroidRoom1'],
			2: ['metroidRoom', 'metroidRoom2'],
			3: ['metroidRoom', 'metroidRoom3'],
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
			2: ['itemAcquired', 'morphingBall'],
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
			5: ['itemAcquired', 'hiJumpBoots'],
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
		key: ['crateria', 'redDoors', 'greenDoors', 'yellowDoors'],
		bits: {
			0: ['crateria', 'greenDoor'],
			1: ['crateria', 'yellowDoor'],
			5: ['crateria', 'redDoor'],
		},
	},
	{
		offset: 0xf1,
		size: 8,
		key: ['crateria', 'yellowDoors'],
		bits: {
			5: ['crateria', 'yellowDoor'],
			6: ['crateria', 'yellowDoor'],
			7: ['crateria', 'yellowDoor'],
		},
	},
	{
		offset: 0xf2,
		size: 8,
		key: ['crateria', 'yellowDoors'],
		bits: {
			0: ['crateria', 'yellowDoor'],
			3: ['crateria', 'yellowDoor'],
		},
	},
	{
		offset: 0xf3,
		size: 8,
		key: ['crateria', 'brinstar', 'redDoors', 'greenDoors', 'metalDoors'],
		bits: {
			1: ['brinstar', 'metalDoor'],
			2: ['brinstar', 'metalDoor'],
			3: ['crateria', 'metalDoor'],
			4: ['crateria', 'greenDoor'],
			5: ['crateria', 'redDoor'],
			6: ['crateria', 'redDoor'],
			7: ['brinstar', 'redDoor'],
		},
	},
	{
		offset: 0xf4,
		size: 8,
		key: ['brinstar', 'redDoors', 'metalDoors'],
		bits: {
			0: ['brinstar', 'redDoor'],
			1: ['brinstar', 'redDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'redDoor'],
			5: ['brinstar', 'metalDoor'],
			6: ['brinstar', 'redDoor'],
		},
	},
	{
		offset: 0xf5,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors', 'yellowDoors', 'metalDoors'],
		bits: {
			0: ['brinstar', 'yellowDoor'],
			1: ['brinstar', 'greenDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'redDoor'],
			4: ['brinstar', 'metalDoor'],
			5: ['brinstar', 'metalDoor'],
			6: ['brinstar', 'greenDoor'],
			7: ['brinstar', 'metalDoor'],
		},
	},
	{
		offset: 0xf6,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors', 'yellowDoors', 'metalDoors'],
		bits: {
			0: ['brinstar', 'yellowDoor'],
			1: ['brinstar', 'metalDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'greenDoor'],
			4: ['brinstar', 'greenDoor'],
			5: ['brinstar', 'greenDoor'],
			6: ['brinstar', 'metalDoor'],
			7: ['brinstar', 'metalDoor'],
		},
	},
	{
		offset: 0xf7,
		size: 8,
		key: ['brinstar', 'redDoors', 'greenDoors', 'yellowDoors', 'metalDoors'],
		bits: {
			0: ['brinstar', 'greenDoor'],
			1: ['brinstar', 'yellowDoor'],
			2: ['brinstar', 'redDoor'],
			3: ['brinstar', 'greenDoor'],
			4: ['brinstar', 'yellowDoor'],
			5: ['brinstar', 'greenDoor'],
			6: ['brinstar', 'metalDoor'],
			7: ['brinstar', 'greenDoor'],
		},
	},
	{
		offset: 0xf8,
		size: 8,
		key: ['brinstar', 'greenDoors', 'metalDoors', 'eyeDoors'],
		bits: {
			0: ['brinstar', 'metalDoor'],
			1: ['brinstar', 'metalDoor'],
			2: ['brinstar', 'metalDoor'],
			3: ['brinstar', 'metalDoor'],
			4: ['brinstar', 'greenDoor'],
			5: ['brinstar', 'eyeDoor'],
			6: ['brinstar', 'metalDoor'],
			7: ['brinstar', 'metalDoor'],
		},
	},
	{
		offset: 0xf9,
		size: 8,
		key: ['norfair', 'redDoors', 'greenDoors', 'yellowDoors', 'metalDoors'],
		bits: {
			1: ['norfair', 'greenDoor'],
			2: ['norfair', 'redDoor'],
			3: ['norfair', 'greenDoor'],
			4: ['norfair', 'yellowDoor'],
			5: ['norfair', 'redDoor'],
			6: ['norfair', 'greenDoor'],
			7: ['norfair', 'metalDoor'],
		},
	},
	{
		offset: 0xfa,
		size: 8,
		key: ['norfair', 'redDoors', 'greenDoors', 'metalDoors'],
		bits: {
			0: ['norfair', 'metalDoor'],
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
		key: ['norfair', 'greenDoors', 'yellowDoors', 'metalDoors', 'eyeDoors'],
		bits: {
			0: ['norfair', 'yellowDoor'],
			1: ['norfair', 'metalDoor'],
			2: ['norfair', 'metalDoor'],
			3: ['norfair', 'metalDoor'],
			4: ['norfair', 'eyeDoor'],
			6: ['norfair', 'yellowDoor'],
			7: ['norfair', 'greenDoor'],
		},
	},
	{
		offset: 0xfc,
		size: 8,
		key: ['norfair', 'metalDoors'],
		bits: {
			0: ['norfair', 'metalDoor'],
		},
	},
	{
		offset: 0x100,
		size: 8,
		key: ['wreckedShip', 'greenDoors', 'metalDoors', 'eyeDoors'],
		bits: {
			3: ['wreckedShip', 'metalDoor'],
			4: ['wreckedShip', 'greenDoor'],
			5: ['wreckedShip', 'eyeDoor'],
			6: ['wreckedShip', 'metalDoor'],
		},
	},
	{
		offset: 0x101,
		size: 8,
		key: ['wreckedShip', 'maridia', 'redDoors', 'greenDoors', 'metalDoors'],
		bits: {
			0: ['wreckedShip', 'metalDoor'],
			1: ['wreckedShip', 'metalDoor'],
			2: ['wreckedShip', 'metalDoor'],
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
		key: ['maridia', 'redDoors', 'greenDoors', 'metalDoors'],
		bits: {
			0: ['maridia', 'redDoor'],
			1: ['maridia', 'metalDoor'],
			2: ['maridia', 'redDoor'],
			3: ['maridia', 'metalDoor'],
			4: ['maridia', 'greenDoor'],
			5: ['maridia', 'greenDoor'],
			6: ['maridia', 'redDoor'],
			7: ['maridia', 'metalDoor'],
		},
	},
	{
		offset: 0x103,
		size: 8,
		key: ['maridia', 'redDoors', 'greenDoors', 'metalDoors', 'eyeDoors'],
		bits: {
			0: ['maridia', 'redDoor'],
			2: ['maridia', 'greenDoor'],
			3: ['maridia', 'eyeDoor'],
			4: ['maridia', 'metalDoor'],
			5: ['maridia', 'metalDoor'],
			6: ['maridia', 'metalDoor'],
			7: ['maridia', 'metalDoor'],
		},
	},
	{
		offset: 0x104,
		size: 8,
		key: ['tourian', 'redDoors', 'metalDoors'],
		bits: {
			0: ['tourian', 'metalDoor'],
			1: ['tourian', 'metalDoor'],
			2: ['tourian', 'metalDoor'],
			3: ['tourian', 'metalDoor'],
			5: ['tourian', 'metalDoor'],
			7: ['tourian', 'redDoor'],
		},
	},
	{
		offset: 0x105,
		size: 8,
		key: ['tourian', 'redDoors', 'eyeDoors'],
		bits: {
			0: ['tourian', 'eyeDoor'],
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
];

export function isBitOffset(o: Offset): o is BitOffset {
	return 'bits' in o;
}

export const START_OF_MAP_BYTES = 0x15a;
export type { Offset, BitOffset, ByteOffset };
