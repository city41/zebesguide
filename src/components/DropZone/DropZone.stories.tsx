import React from 'react';

import { DropZone } from '.';

export default {
	title: 'DropZone',
	component: DropZone,
};

export const basic = () => <DropZone onData={() => {}} />;
