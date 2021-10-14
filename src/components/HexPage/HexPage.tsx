import React, { useState } from 'react';
import { getSave } from '../../lib/getFirstSave';
import { DropZone } from '../DropZone';
import { HexView } from './HexView';

function HexPage() {
	const [data, setData] = useState<null | Uint8Array>(null);

	return (
		<div>
			<DropZone
				onData={(saveFile) => {
					setData(getSave(saveFile, 0));
				}}
			>
				{(clickToChoose) => (
					<>
						<div>Drag a Super Metroid file here</div>
						{clickToChoose}
					</>
				)}
			</DropZone>
			{data && <HexView data={data} />}
		</div>
	);
}

export { HexPage };
