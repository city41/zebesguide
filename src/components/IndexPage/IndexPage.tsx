import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut';
import { EditSave } from './EditSave';
import { HUD } from './HUD';
import { EarlyStarburst } from '../EarlyStarburst';
import { Footer } from '../Footer';

type Mode = 'map' | 'samus' | 'edit';

type InternalIndexPageProps = {
	onSaveFileData: ({
		data,
		isDemo,
	}: {
		data: Uint8Array;
		isDemo: boolean;
	}) => void;
	onSaveIndexChosen: (index: 0 | 1 | 2) => void;
	onReset: () => void;
	saveWasChosen: boolean;
};

function IndexPage({
	onSaveFileData,
	onSaveIndexChosen,
	onReset,
	saveWasChosen,
}: InternalIndexPageProps) {
	const [mode, setMode] = useState<Mode>('map');

	let body;

	if (!saveWasChosen) {
		body = (
			<Intro
				onSaveFileData={onSaveFileData}
				onSaveIndexChosen={({ index, mode }) => {
					onSaveIndexChosen(index);
					setMode(mode === 'view' ? 'map' : 'edit');
				}}
			/>
		);
	} else {
		if (mode === 'map') {
			body = (
				<>
					<div className="relative flex flex-col">
						<HUD />
						<ZebesMap style={{ height: '80vh' }} />
					</div>
					<div className="mt-4 text-right">
						<HudNavButton
							onClick={() => {
								setMode('samus');
							}}
						>
							SAMUS
						</HudNavButton>
					</div>
				</>
			);
		} else if (mode === 'samus') {
			body = (
				<>
					<div className="relative flex flex-col">
						<HUD />
						<SamusLoadOut style={{ height: '80vh' }} />
					</div>
					<div className="mt-4">
						<HudNavButton
							onClick={() => {
								setMode('map');
							}}
						>
							MAP
						</HudNavButton>
					</div>
				</>
			);
		} else {
			body = <EditSave />;
		}
	}

	return (
		<>
			<EarlyStarburst className="fixed top-4 left-4 z-20" />
			<div className="w-full h-full mx-auto max-w-6xl flex flex-col">
				{body}
				{saveWasChosen && (
					<div className="fixed top-2 right-2 flex flex-col items-center">
						<ResetButton
							onClick={() => {
								onReset();
							}}
						/>
					</div>
				)}
				<div className="flex-1" />
				<Footer className="pb-8" />
			</div>
		</>
	);
}

export { IndexPage };
