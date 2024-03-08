import React, { useEffect, useState } from 'react';
import { GameSave, toSaveFile } from '../../../lib/parser';
import { Samus } from './Samus';
import { TabBar } from './TabBar';
import { sendUint8ArrayToAnchorTag } from '../../../lib/sendUint8ArrayToAnchorTag';

type InternalEditSaveProps = {
	gameSave: GameSave;
};

const tabs = ['samus', 'map', 'events'] as const;
type TabType = typeof tabs[number];

function EditSave({ gameSave }: InternalEditSaveProps) {
	const [tab, setTab] = useState<TabType>('samus');
	const [currentGameSave, setCurrentGameSave] = useState<GameSave>(gameSave);

	useEffect(() => {
		setCurrentGameSave(gameSave);
	}, [gameSave]);

	function handleDownloadSave() {
		const saveFile = toSaveFile(currentGameSave);
		sendUint8ArrayToAnchorTag(saveFile, 'zebesGuideEditedSave.srm');
	}

	let body;

	switch (tab) {
		case 'samus':
			body = <Samus gameSave={currentGameSave} onChange={setCurrentGameSave} />;
			break;
		default:
			body = <div>not yet</div>;
			break;
	}

	const dirty = true; // gameSave !== currentGameSave;

	return (
		<div className="relative max-w-6xl w-full h-full mx-auto my-16 pt-8 border-8 border-white rounded-xl flex flex-col">
			<TabBar
				className="-my-14 bg-black px-4 py-2 self-center z-20 "
				tabs={tabs}
				focused={tab}
				onFocus={(t) => setTab(t as TabType)}
			/>
			<div className="px-16 pt-24">{body}</div>
			{dirty && (
				<button
					onClick={handleDownloadSave}
					className="absolute -top-6 right-4 bg-black px-4 py-2 border border-white hover:bg-orange-600"
				>
					download new save
				</button>
			)}
		</div>
	);
}

export { EditSave };
