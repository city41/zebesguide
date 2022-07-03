import React, { CSSProperties, Fragment, useState } from 'react';
import clsx from 'clsx';

import styles from './ZebesMap.module.css';

type ZebesMapProps = {
	className?: string;
	style?: CSSProperties;
	matrix: CellMatrix;
};

function CellCover({
	exposed,
	showUnvisited,
}: {
	exposed: boolean;
	showUnvisited: boolean;
}) {
	return (
		<div
			className={clsx('w-full h-full', {
				[styles.unexposedMapCell]: !exposed,
				'opacity-75': !exposed && showUnvisited,
			})}
		/>
	);
}

function ZebesMap({ className, style, matrix }: ZebesMapProps) {
	const [showUnvisited, setShowUnvisited] = useState(false);

	const rows = matrix.map((row, y) => {
		const rowCells = row.map((c, x) => {
			return (
				<CellCover
					key={`${x}-${y}`}
					exposed={c.exposed}
					showUnvisited={showUnvisited}
				/>
			);
		});
		return <Fragment key={`row-${y}`}>{rowCells}</Fragment>;
	});

	const gridStyle = {
		'--col-count': matrix[0].length,
		'--row-count': matrix.length,
	} as CSSProperties;

	return (
		<div className={clsx(className, 'relative')}>
			<div
				className={clsx(
					className,
					'overflow-auto border-8 border-white rounded-xl'
				)}
				style={style}
			>
				<div
					style={gridStyle}
					className={clsx(styles.root, 'relative bg-cover')}
				>
					{rows}
				</div>
			</div>
			<button
				className="absolute top-0 left-0 px-2 py-1 bg-white text-black text-xs cursor-pointer hover:bg-yellow-500"
				onClick={() => {
					setShowUnvisited((uv) => !uv);
				}}
			>
				{showUnvisited ? 'hide' : 'show'} unvisited areas
			</button>
		</div>
	);
}

export { ZebesMap };
