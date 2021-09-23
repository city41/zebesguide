import React, { useEffect, useState } from 'react';
import { ZebesMap } from './ZebesMap';
import { parseCells } from '../../lib/parser/cells/parseCells';
import { getFirstSave } from '../../lib/getFirstSave';
import { Planet } from './Planet';
import { HudNavButton } from '../HudNavButton/HudNavButton';

type Mode = 'planet' | 'map' | 'samus';

function IndexPage() {
	const [mode, setMode] = useState<Mode>('planet');
	const [data, setData] = useState<null | Uint8Array>(null);
	const [cells, setCells] = useState<CellMatrix | null>(null);

	useEffect(() => {
		if (data) {
			const saveCells = parseCells(getFirstSave(data));
			setCells(saveCells);
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
					samus
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

	return <div className="w-screen h-screen">{body}</div>;
}

export { IndexPage };
