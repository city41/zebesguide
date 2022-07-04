import React from 'react';
import { mapData, regionColors } from '../../data/mapData';
import { cells } from '../../lib/parser/cells/mapBits';

function MapByteBlock() {
	const min = Math.min(...cells.map((c) => c.byte));
	const max = Math.max(...cells.map((c) => c.byte));

	const bytes: number[] = [];

	cells.forEach((c) => {
		const i = c.byte - min;
		let value = bytes[i] ?? 0;

		value = value | (1 << c.bit);
		bytes[i] = value;
	});

	const byteEls = bytes.map((b, i) => {
		const style = {
			gridColumn: (i + 1).toString(),
		};
		return (
			<div key={`${b}-${i}`} className="text-xs" style={style}>
				{b.toString(16)}
			</div>
		);
	});

	const style = {
		gridTemplateColumns: `repeat(${max - min}, 16px)`,
	};

	return (
		<div className="grid" style={style}>
			{byteEls}
		</div>
	);
}

function MapDump() {
	const cellData: Array<Array<typeof cells[number]>> = [[]];

	cells.forEach((cell) => {
		const row = (cellData[cell.mapCell.y] = cellData[cell.mapCell.y] ?? []);
		row[cell.mapCell.x] = cell;
	});

	let undeterminedCount = 0;

	const cellRowEls = mapData.map((row, ri) => {
		const cellEls = row.map((c, ci) => {
			const cell = cells.find((c) => c.mapCell.x === ci && c.mapCell.y === ri);

			if (c.region && c.region !== 'elevator' && !cell) {
				undeterminedCount += 1;
			}

			return (
				<div
					key={`${ri}-${ci}`}
					className="border border-white text-xs"
					data-point={`x${ci}-y${ri}`}
					style={{
						gridColumn: (ci + 1).toString(),
						gridRow: (ri + 1).toString(),
						backgroundColor: c.region
							? regionColors[c.region as keyof typeof regionColors]
							: undefined,
					}}
				>
					{cell && (
						<span>
							{cell.byte.toString(16)}
							{cell.bit}
						</span>
					)}
					{!cell && <span>.</span>}
				</div>
			);
		});

		return <React.Fragment key={ri}>{cellEls}</React.Fragment>;
	});

	const style = {
		gridTemplateColumns: 'repeat(70, min-content)',
		gridTemplateRows: 'repeat(58, min-content)',
	};

	return (
		<div className="grid relative" style={style}>
			{cellRowEls}
			<div className="absolute left-4 bottom-4 p-4 bg-black text-white">
				{undeterminedCount} to figure out
				<MapByteBlock />
			</div>
		</div>
	);
}

export { MapDump };
