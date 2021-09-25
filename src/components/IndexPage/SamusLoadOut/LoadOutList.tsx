import clsx from 'clsx';
import React from 'react';

type LoadOutListProps = Omit<JSX.IntrinsicElements['ul'], 'ref'>;

function LoadOutList({ className, ...rest }: LoadOutListProps) {
	return <ul className={clsx(className, 'list-none')} {...rest} />;
}

type LoadOutListEntryProps = {
	className?: string;
	inInventory: boolean;
	equipped: boolean;
	label: string;
};

type BulbProps = {
	equipped: LoadOutListEntryProps['equipped'];
};

function Bulb({ equipped }: BulbProps) {
	return (
		<div
			className={clsx('relative w-3 h-3 rounded-full border-r border-black', {
				'bg-red-600': equipped,
				'bg-gray-300': !equipped,
			})}
		>
			<div
				className={clsx('absolute top-0.5 left-0.5 w-1 h-1 rounded-full', {
					'bg-white': equipped,
					'bg-gray-400': !equipped,
				})}
			/>
		</div>
	);
}

function LoadOutListEntry({
	className,
	inInventory,
	equipped,
	label,
}: LoadOutListEntryProps) {
	return (
		<li
			className={clsx(
				className,
				'w-full flex flex-row gap-x-2 px-2 items-center justify-start font-bold text-2xl',
				{
					invisible: !inInventory,
					'bg-hud-yellow text-black': equipped,
					'bg-gray-500 text-gray-800': !equipped,
				}
			)}
		>
			<Bulb equipped={equipped} /> <div>{label}</div>
		</li>
	);
}

export { LoadOutList, LoadOutListEntry };
