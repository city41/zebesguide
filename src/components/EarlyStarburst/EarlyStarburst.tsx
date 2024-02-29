import React, { ReactElement } from 'react';
import clsx from 'clsx';

import { Starburst } from './Starburst';

type EarlyStarburstProps = {
	className?: string;
};

function EarlyStarburst({ className }: EarlyStarburstProps): ReactElement {
	return (
		<Starburst
			className={clsx(
				className,
				'w-20 h-20 font-bold transform -rotate-12 text-sm'
			)}
		>
			<div>Unfinished</div>
			<div>still WIP</div>
		</Starburst>
	);
}

export { EarlyStarburst };
