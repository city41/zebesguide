import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut/SamusLoadOut';
import { GameSave } from '../../lib/parser';

type Mode = 'choose-save' | 'map' | 'samus';

function IndexPage() {
	const [mode, setMode] = useState<Mode>('choose-save');
	const [gameSave, setGameSave] = useState<GameSave | null>(null);

	let body;

	switch (mode) {
		case 'map': {
			body = (
				<div className="relative w-full h-full grid place-items-center">
					<ZebesMap matrix={gameSave!.mapCells} />
					<HudNavButton
						className="absolute right-2 bottom-2"
						onClick={() => {
							setMode('samus');
						}}
					>
						SAMUS
					</HudNavButton>
				</div>
			);
			break;
		}
		case 'samus': {
			body = (
				<div className="relative w-full h-full">
					<SamusLoadOut gameSave={gameSave!} />
					<HudNavButton
						className="absolute left-2 bottom-2"
						onClick={() => {
							setMode('map');
						}}
					>
						MAP
					</HudNavButton>
				</div>
			);
			break;
		}
		case 'choose-save':
		default: {
			body = (
				<Intro
					onSave={(gameSave) => {
						setGameSave(gameSave);
						setMode('map');
					}}
				/>
			);
			break;
		}
	}

	return (
		<div className="w-screen h-screen mx-auto max-w-6xl">
			{body}
			{mode !== 'choose-save' && (
				<ResetButton
					className="fixed top-2 right-2"
					onClick={() => {
						setMode('choose-save');
					}}
				/>
			)}
		</div>
	);
}

export { IndexPage };
