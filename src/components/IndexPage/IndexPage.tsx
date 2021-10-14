import React, { useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { parseCells } from '../../lib/parser/cells/parseCells';
import { Intro } from './Intro';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut/SamusLoadOut';
import { parse, SaveFile } from '../../lib/parser';

type Mode = 'choose-save' | 'map' | 'samus';

function IndexPage() {
	const [mode, setMode] = useState<Mode>('choose-save');
	const [cells, setCells] = useState<CellMatrix | null>(null);
	const [saveFile, setSaveFile] = useState<SaveFile | null>(null);

	let body;

	switch (mode) {
		case 'map': {
			body = (
				<div className="relative w-full h-full grid place-items-center">
					<ZebesMap matrix={cells!} />
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
					<SamusLoadOut saveFile={saveFile!} />
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
						const saveCells = parseCells(gameSave);
						setCells(saveCells);
						const saveFile = parse(gameSave);
						setSaveFile(saveFile);
						setMode('map');
					}}
				/>
			);
			break;
		}
	}

	return (
		<div className="w-screen h-screen mx-auto" style={{ maxWidth: 1088 }}>
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
