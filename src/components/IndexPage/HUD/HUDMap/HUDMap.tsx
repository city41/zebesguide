import React from 'react';
import clsx from 'clsx';

type HUDMapProps = {
	className?: string;
};

function HUDMap({ className }: HUDMapProps) {
	const cells = [];

	for (let y = 0; y < 3; ++y) {
		for (let x = 0; x < 5; ++x) {
			cells.push(
				<div
					key={`${y}-${x}`}
					style={{
						gridColumn: (x + 1).toString(),
						gridRow: (y + 1).toString(),
					}}
					className={clsx('w-full h-full border-dashed', {
						'border-b-2': y < 2,
						'border-r-2': x < 4,
					})}
				/>
			);
		}
	}

	return (
		<div
			className={clsx(
				className,
				'w-40 h-24 border-2 border-white border-dashed grid grid-cols-5 grid-rows-3'
			)}
		>
			{cells}
		</div>
	);
}

export { HUDMap };
