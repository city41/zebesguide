import React from 'react';

import { SamusLoadOut } from './SamusLoadOut';
import { SaveFile } from '../../../lib/parser';

export default {
	title: 'SamusLoadOut/SamusLoadOut',
	component: SamusLoadOut,
};

const EQUIPPED = {
	inInventory: true,
	equipped: true,
};

const FULLY_EQUIPPED: SaveFile = {
	energy: {
		current: 99,
		max: 99,
	},
	missiles: {
		current: 25,
		max: 35,
	},
	superMissiles: {
		current: 12,
		max: 20,
	},
	powerBombs: {
		current: 7,
		max: 15,
	},
	suits: {
		varia: EQUIPPED,
		gravity: EQUIPPED,
	},
	misc: {
		morphingBall: EQUIPPED,
		bombs: EQUIPPED,
		screwAttack: EQUIPPED,
	},
	boots: {
		hiJumpBoots: EQUIPPED,
		spaceJump: EQUIPPED,
		speedBooster: EQUIPPED,
	},
	beam: {
		charge: EQUIPPED,
		ice: EQUIPPED,
		wave: EQUIPPED,
		spazer: EQUIPPED,
		plasma: EQUIPPED,
	},
};

export const FullyEquipped = () => <SamusLoadOut saveFile={FULLY_EQUIPPED} />;
