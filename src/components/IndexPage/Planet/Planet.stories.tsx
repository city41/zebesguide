import React from 'react';

import { Planet } from '.';

export default {
	title: 'Planet',
	component: Planet,
};

export const basic = () => <Planet onData={() => {}} />;
