import React from 'react';
import { mapData, regionColors } from '../../data/mapData';
import { cells } from '../../lib/parser/cells/mapBits';

function MapDump() {
	const cellData: Array<Array<typeof cells[number]>> = [[]];

	cells.forEach((cell) => {
		const row = (cellData[cell.mapCell.y] = cellData[cell.mapCell.y] ?? []);
		row[cell.mapCell.x] = cell;
	});

	const cellRowEls = mapData.map((row, ri) => {
		const cellEls = row.map((c, ci) => {
			const cell = cells.find((c) => c.mapCell.x === ci && c.mapCell.y === ri);
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
							{cell.byte.toString(36)}
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
		<div className="grid" style={style}>
			{cellRowEls}
		</div>
	);
}

export { MapDump };
