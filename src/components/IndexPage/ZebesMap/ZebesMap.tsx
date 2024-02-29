import React, { CSSProperties, Fragment, useState } from 'react';
import clsx from 'clsx';

import styles from './ZebesMap.module.css';

type PublicZebesMapProps = {
	className?: string;
	style?: CSSProperties;
};

type InternalZebesMapProps = {
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

function AreaLabels() {
	return (
		<>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 80, top: 80, backgroundColor: '#d83890' }}
			>
				Crateria
			</div>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 80, top: 570, backgroundColor: '#017e13' }}
			>
				Brinstar
			</div>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 900, top: 40, backgroundColor: '#d1b102' }}
			>
				Wrecked Ship
			</div>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 120, top: 180, backgroundColor: '#991b8c' }}
			>
				Tourian
			</div>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 900, top: 480, backgroundColor: '#283888' }}
			>
				Maridia
			</div>
			<div
				className="absolute p-0.5 text-white"
				style={{ left: 380, top: 750, backgroundColor: '#d42020' }}
			>
				Norfair
			</div>
		</>
	);
}

function ZebesMap({
	className,
	style,
	matrix,
}: PublicZebesMapProps & InternalZebesMapProps) {
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
		<>
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
				{showUnvisited ? <AreaLabels /> : null}
			</div>
		</>
	);
}

export type { PublicZebesMapProps };
export { ZebesMap };
