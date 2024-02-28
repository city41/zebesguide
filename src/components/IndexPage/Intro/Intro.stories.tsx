import React from 'react';

import { Intro } from '.';

export default {
	title: 'Intro',
	component: Intro,
};

export const basic = () => (
	<Intro onSaveFileData={() => {}} onSaveIndexChosen={() => {}} />
);
