import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut';
import { EditSave } from './EditSave';
import { HUD } from './HUD';
import { EarlyStarburst } from '../EarlyStarburst';

type Mode = 'map' | 'samus' | 'edit';

type InternalIndexPageProps = {
	onSaveFileData: (data: Uint8Array) => void;
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
					<div className="relative w-full flex flex-col">
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
					<div className="relative w-full flex flex-col">
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
			<EarlyStarburst className="fixed top-4 left-4" />
			<div className="w-screen h-full mx-auto max-w-6xl">
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
				<footer className="grid place-items-center mt-12">
					<ul className="flex flex-row gap-x-4 text-xs">
						<li>
							<a className="text-blue-100" href="/about">
								about
							</a>
						</li>
						<li>
							<a
								className="text-blue-100"
								href="https://github.com/city41/zebesguide"
							>
								GitHub
							</a>
						</li>
						<li className="ml-8">
							made by{' '}
							<a className="text-blue-100" href="https://mattgreer.dev">
								Matt Greer
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}

export { IndexPage };
