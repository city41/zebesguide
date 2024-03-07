import React, { CSSProperties, Fragment, useCallback, useState } from 'react';
import clsx from 'clsx';

import styles from './ZebesMap.module.css';

import samusMarkerPng from './samusMarker.png';

type PublicZebesMapProps = {
	className?: string;
	style?: CSSProperties;
};

type InternalZebesMapProps = {
	matrix: CellMatrix;
	samusLocation: Point;
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

function hasVisited(matrix: CellMatrix, area: Area): boolean {
	return matrix.some((row) => {
		return row.some((cell) => {
			return cell.exposed && cell.area == area;
		});
	});
}

function AreaLabels({ matrix }: { matrix: CellMatrix }) {
	return (
		<>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'crateria'),
				})}
				style={{ left: 80, top: 80, backgroundColor: '#d83890' }}
			>
				Crateria
			</div>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'brinstar'),
				})}
				style={{ left: 80, top: 570, backgroundColor: '#017e13' }}
			>
				Brinstar
			</div>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'wreckedShip'),
				})}
				style={{ left: 900, top: 40, backgroundColor: '#d1b102' }}
			>
				Wrecked Ship
			</div>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'tourian'),
				})}
				style={{ left: 120, top: 180, backgroundColor: '#991b8c' }}
			>
				Tourian
			</div>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'maridia'),
				})}
				style={{ left: 900, top: 480, backgroundColor: '#283888' }}
			>
				Maridia
			</div>
			<div
				className={clsx('absolute p-0.5 text-white', {
					hidden: !hasVisited(matrix, 'norfair'),
				})}
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
	samusLocation,
}: PublicZebesMapProps & InternalZebesMapProps) {
	const [showUnvisited, setShowUnvisited] = useState(false);
	const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number } | null>(
		null
	);

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

	let handleMouseMove: any = () => {};
	if (process.env.NODE_ENV !== 'production') {
		handleMouseMove = useCallback(
			(e: any) => {
				const br = (
					e.target.parentElement as HTMLDivElement
				).getBoundingClientRect();
				setHoverPoint({
					x: Math.floor((e.clientX - br.left) / 16),
					y: Math.floor((e.clientY - br.top) / 16),
				});
			},
			[showUnvisited, setHoverPoint]
		);
	}

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
						onMouseMove={handleMouseMove}
					>
						{rows}
						<img
							src={samusMarkerPng.src}
							alt="samus marker"
							className="absolute"
							style={{
								left: `calc(var(--cell-size) * ${samusLocation.x} + 1px)`,
								top: `calc(var(--cell-size) * ${samusLocation.y} + 1px)`,
								width: 'var(--cell-size)',
								height: 'var(--cell-size)',
							}}
						/>
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
				<AreaLabels matrix={matrix} />
				{showUnvisited && hoverPoint ? (
					<div>
						({hoverPoint.x},{hoverPoint.y})
					</div>
				) : null}
			</div>
		</>
	);
}

export type { PublicZebesMapProps };
export { ZebesMap };
