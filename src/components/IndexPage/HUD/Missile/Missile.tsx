import React from 'react';
import clsx from 'clsx';

import missileSvg from './missile.svg';

type MissileProps = {
	className?: string;
	missiles?: { current: number };
};

function Missile({ className, missiles }: MissileProps) {
	if (!missiles) {
		return null;
	}

	return (
		<div className="flex flex-col items-center h-full">
			<div
				className={clsx(
					className,
					'w-24 h-16 p-2 bg-pink-800 border-4 border-pink-600 rounded-md'
				)}
			>
				<img
					src={missileSvg.src}
					className="w-full h-full"
					alt="missile icon"
				/>
			</div>
			<div className="font-bold">{missiles.current}</div>
		</div>
	);
}

export { Missile };
