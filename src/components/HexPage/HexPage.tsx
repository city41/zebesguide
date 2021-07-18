import { useState } from 'react';
import { getFirstSave } from '../../lib/getFirstSave';
import { DropZone } from '../DropZone';
import { HexView } from './HexView';

function HexPage() {
	const [data, setData] = useState<null | Uint8Array>(null);

	return (
		<div>
			<DropZone
				onData={(saveFile) => {
					setData(getFirstSave(saveFile));
				}}
			/>
			{data && <HexView data={data} />}
		</div>
	);
}

export { HexPage };
