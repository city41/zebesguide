import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut/SamusLoadOut';
import { GameSave } from '../../lib/parser';
import { HUD } from './HUD';

type Mode = 'choose-save' | 'map' | 'samus';

function IndexPage() {
	const [mode, setMode] = useState<Mode>('choose-save');
	const [gameSave, setGameSave] = useState<GameSave | null>(null);

	let body;

	switch (mode) {
		case 'map': {
			body = (
				<>
					<div className="relative w-full flex flex-col">
						<HUD gameSave={gameSave!} />
						<ZebesMap style={{ height: '80vh' }} matrix={gameSave!.mapCells} />
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
						<HUD gameSave={gameSave!} />
						<SamusLoadOut style={{ height: '80vh' }} gameSave={gameSave!} />
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
