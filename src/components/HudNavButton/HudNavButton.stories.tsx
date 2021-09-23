import React from 'react';

import { HudNavButton } from '.';

export default {
	title: 'HudNavButton',
	component: HudNavButton,
};

export const basic = () => (
	<div className="bg-white p-8">
		<HudNavButton>SAMUS</HudNavButton>
	</div>
);
