import React, { Fragment } from 'react';
import clsx from 'clsx';

import styles from './ZebesMap.module.css';

type ZebesMapProps = {
	className?: string;
	matrix: CellMatrix;
};

function CellCover({ exposed }: { exposed: boolean }) {
	return (
		<div
			className={clsx('w-full h-full', {
				'bg-blue-900 opacity-90': !exposed,
			})}
		/>
	);
}

function ZebesMap({ className, matrix }: ZebesMapProps) {
	const rows = matrix.map((row, y) => {
		const rowCells = row.map((c, x) => {
			return <CellCover key={`${x}-${y}`} exposed={c.exposed} />;
		});
		return <Fragment key={`row-${y}`}>{rowCells}</Fragment>;
	});

	return <div className={clsx(className, styles.root)}>{rows}</div>;
}

export { ZebesMap };
