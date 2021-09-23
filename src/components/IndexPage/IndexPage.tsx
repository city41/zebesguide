import React, { useEffect, useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { parseCells } from '../../lib/parser/cells/parseCells';
import { getFirstSave } from '../../lib/getFirstSave';
import { Planet } from './Planet';
import { HudNavButton } from '../HudNavButton/HudNavButton';
import { ResetButton } from '../ResetButton';
import { SamusLoadOut } from './SamusLoadOut/SamusLoadOut';
import { parse, SaveFile } from '../../lib/parser';

type Mode = 'planet' | 'map' | 'samus';

function IndexPage() {
	const [mode, setMode] = useState<Mode>('planet');
	const [data, setData] = useState<null | Uint8Array>(null);
	const [cells, setCells] = useState<CellMatrix | null>(null);
	const [saveFile, setSaveFile] = useState<SaveFile | null>(null);

	useEffect(() => {
		if (data) {
			const firstSave = getFirstSave(data);
			const saveCells = parseCells(firstSave);
			setCells(saveCells);
			const saveFile = parse(firstSave);
			setSaveFile(saveFile);
		} else {
			setCells(null);
			setSaveFile(null);
		}
	}, [data]);

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
		case 'planet':
		default: {
			body = (
				<Planet
					onData={(f) => {
						setData(f);
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
			{mode !== 'planet' && (
				<ResetButton
					className="fixed top-2 right-2"
					onClick={() => {
						setData(null);
						setMode('planet');
					}}
				/>
			)}
		</div>
	);
}

export { IndexPage };
