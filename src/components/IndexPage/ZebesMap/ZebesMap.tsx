import React, { CSSProperties, Fragment } from 'react';
import clsx from 'clsx';

import styles from './ZebesMap.module.css';

type ZebesMapProps = {
	className?: string;
	style?: CSSProperties;
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

function ZebesMap({ className, style, matrix }: ZebesMapProps) {
	const rows = matrix.map((row, y) => {
		const rowCells = row.map((c, x) => {
			return <CellCover key={`${x}-${y}`} exposed={c.exposed} />;
		});
		return <Fragment key={`row-${y}`}>{rowCells}</Fragment>;
	});

	const gridStyle = {
		'--col-count': matrix[0].length,
		'--row-count': matrix.length,
	} as CSSProperties;

	return (
		<div
			className={clsx(
				className,
				'overflow-auto border-8 border-white rounded-xl'
			)}
			style={style}
		>
			<div style={gridStyle} className={clsx(styles.root, 'relative bg-cover')}>
				{rows}
			</div>
		</div>
	);
}

export { ZebesMap };
