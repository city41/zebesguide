import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut';
import { HUD } from './HUD';

type Mode = 'choose-save' | 'map' | 'samus';

type InternalIndexPageProps = {
	onSaveFileData: (data: Uint8Array) => void;
	onSaveIndexChosen: (index: 0 | 1 | 2) => void;
};

function IndexPage({
	onSaveFileData,
	onSaveIndexChosen,
}: InternalIndexPageProps) {
	const [mode, setMode] = useState<Mode>('choose-save');

	let body;

	switch (mode) {
		case 'map': {
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
			break;
		}
		case 'samus': {
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
			break;
		}
		case 'choose-save':
		default: {
			body = (
				<Intro
					onSaveFileData={onSaveFileData}
					onSaveIndexChosen={onSaveIndexChosen}
				/>
			);
			break;
		}
	}

	return (
		<div className="w-screen h-screen mx-auto max-w-6xl">
			{body}
			{mode !== 'choose-save' && (
				<div className="fixed top-2 right-2 flex flex-col items-center">
					<ResetButton
						onClick={() => {
							setMode('choose-save');
						}}
					/>
					<a className="text-blue-100 text-xs" href="/about">
						about
					</a>
				</div>
			)}
		</div>
	);
}

export { IndexPage };
