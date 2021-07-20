import { useEffect, useState } from 'react';
import { DropZone } from '../DropZone';
import { parse } from '../../lib/parser';
import type { SaveFile } from '../../lib/parser';
import { ZebesMap } from './ZebesMap';
import { getStartingCells } from '../../lib/parser/cells/getStartingCells';

function IndexPage() {
	const [data, setData] = useState<null | Uint8Array>(null);
	const [parsedSaveFile, setParsedSaveFile] = useState<null | SaveFile>(null);
	const [cells] = useState<CellMatrix>(getStartingCells());

	useEffect(() => {
		if (data) {
			const parsed = parse(data);
			setParsedSaveFile(parsed);
		}
	}, [data]);

	return (
		<div className="w-32 h-32">
			<DropZone onData={(f) => setData(f)} />
			{parsedSaveFile && <pre>{JSON.stringify(parsedSaveFile, null, 2)}</pre>}
			<ZebesMap matrix={cells} />
		</div>
	);
}

export { IndexPage };