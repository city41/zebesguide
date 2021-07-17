import { useEffect, useState } from 'react';
import { DropZone } from './DropZone';
import { parse } from '../../lib/parser';
import type { SaveFile } from '../../lib/parser';
import { ZebesMap } from './ZebesMap';
import { getStartingCells } from '../../lib/parser/cells/getStartingCells';

function IndexPage() {
	const [file, setFile] = useState<null | File>(null);
	const [parsedSaveFile, setParsedSaveFile] = useState<null | SaveFile>(null);
	const [cells] = useState<CellMatrix>(getStartingCells());

	useEffect(() => {
		if (file) {
			const reader = new FileReader();
			reader.addEventListener('loadend', () => {
				const saveFile = new Uint8Array(reader.result as ArrayBuffer);
				const parsed = parse(saveFile);
				setParsedSaveFile(parsed);
			});
			reader.readAsArrayBuffer(file);
		}
	}, [file]);

	return (
		<div className="w-32 h-32">
			<DropZone onFileChosen={(f) => setFile(f)} />
			{parsedSaveFile && <pre>{JSON.stringify(parsedSaveFile, null, 2)}</pre>}
			<ZebesMap matrix={cells} />
		</div>
	);
}

export { IndexPage };
