import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { offsets } from '../../lib/parser/constants';

type HexViewProps = {
	className?: string;
	data: Uint8Array;
};

function toHexString(value: number): string {
	const hexS = value.toString(16);

	if (hexS.length === 1) {
		return '0' + hexS;
	} else {
		return hexS;
	}
}

function Cell({
	value,
	known,
	description,
}: {
	value: number;
	known: boolean;
	description?: string;
}) {
	return (
		<div
			className={clsx('p-0.5 border border-gray-400 font-mono', {
				'bg-gray-600 text-gray-400': !known,
				'bg-green-600 text-white': known,
			})}
			title={description}
		>
			{toHexString(value)}
		</div>
	);
}

function HexView({ className, data }: HexViewProps) {
	let curOffset = 0;

	const sortedOffsets = [...offsets].sort((a, b) => a.offset - b.offset);

	const cells: ReactNode[] = sortedOffsets.reduce<ReactNode[]>(
		(building, offset) => {
			const nodes = [];

			while (curOffset < offset.offset) {
				nodes.push(
					<Cell key={curOffset} value={data[curOffset]} known={false} />
				);
				curOffset += 1;
			}

			nodes.push(
				<Cell
					key={curOffset}
					value={data[curOffset]}
					known={true}
					description={`${toHexString(offset.offset)}: ${offset.key.join(
						', '
					)}`}
				/>
			);
			curOffset += 1;

			if (offset.size === 16) {
				nodes.push(
					<Cell key={curOffset} value={data[curOffset]} known={true} />
				);
				curOffset += 1;
			}

			return building.concat(nodes);
		},
		[]
	);

	const lastOffset = offsets[offsets.length - 1];
	let restOfDataStart = lastOffset.offset + 1;

	if (lastOffset.size === 16) {
		restOfDataStart += 1;
	}

	data.slice(restOfDataStart).forEach((byte, i) => {
		cells.push(
			<div
				key={restOfDataStart + i}
				className="p-0.5 border border-gray-400 font-mono"
			>
				{toHexString(byte)}
			</div>
		);
	});

	return (
		<div className={clsx(className, 'flex flex-row flex-wrap')}>{cells}</div>
	);
}

export { HexView };
