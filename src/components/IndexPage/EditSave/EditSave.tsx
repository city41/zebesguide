import React, { ReactChildren, useState } from 'react';
import clsx from 'clsx';
import { GameSave } from '../../../lib/parser';
import { Items } from './Items';

type InternalEditSaveProps = {
	gameSave: GameSave;
};

type TabType = 'items' | 'suits' | 'map' | 'events';

function Tab({
	focused,
	onClick,
	children,
}: {
	focused: boolean;
	onClick: () => void;
	children: ReactChildren | string;
}) {
	return (
		<li className={clsx({ 'bg-orange-700': focused })} onClick={onClick}>
			{children}
		</li>
	);
}

function EditSave({ gameSave }: InternalEditSaveProps) {
	const [tab, setTab] = useState<TabType>('items');

	let body;

	switch (tab) {
		case 'items':
			body = <Items gameSave={gameSave} />;
			break;
		default:
			body = <div>not yet</div>;
			break;
	}

	return (
		<div>
			<ul className="flex flex-row">
				<Tab focused={tab === 'items'} onClick={() => setTab('items')}>
					Items
				</Tab>
				<Tab focused={tab === 'suits'} onClick={() => setTab('suits')}>
					Suits
				</Tab>
				<Tab focused={tab === 'map'} onClick={() => setTab('map')}>
					Map
				</Tab>
				<Tab focused={tab === 'events'} onClick={() => setTab('events')}>
					Events
				</Tab>
			</ul>
			{body}
		</div>
	);
}

export { EditSave };
