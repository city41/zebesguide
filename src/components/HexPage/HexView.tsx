import { ReactNode } from 'react';
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

function Cell({ value, known }: { value: number; known: boolean }) {
	return (
		<div
			className={clsx('p-0.5 border border-gray-400 font-mono', {
				'bg-gray-600 text-gray-400': !known,
				'bg-green-600 text-white': known,
			})}
		>
			{toHexString(value)}
		</div>
	);
}

function HexView({ className, data }: HexViewProps) {
	let curOffset = 0;
	const cells: ReactNode[] = offsets.reduce<ReactNode[]>((building, offset) => {
		const nodes = [];

		while (curOffset < offset.offset) {
			nodes.push(
				<Cell key={curOffset} value={data[curOffset]} known={false} />
			);
			curOffset += 1;
		}

		nodes.push(<Cell key={curOffset} value={data[curOffset]} known={true} />);

		if (offset.size === 16) {
			curOffset += 1;
			nodes.push(<Cell key={curOffset} value={data[curOffset]} known={true} />);
		}

		return building.concat(nodes);
	}, []);

	data.forEach((byte, i) => {
		cells.push(
			<div key={i} className="p-0.5 border border-gray-400 font-mono">
				{toHexString(byte)}
			</div>
		);
	});

	return (
		<div className={clsx(className, 'flex flex-row flex-wrap')}>{cells}</div>
	);
}

export { HexView };
