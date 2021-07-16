import { useEffect, useState } from 'react';
import { DropZone } from './DropZone';
import { parse } from '../../parser';
import type { SaveFile } from '../../parser';

function IndexPage() {
	const [file, setFile] = useState<null | File>(null);
	const [parsedSaveFile, setParsedSaveFile] = useState<null | SaveFile>(null);

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
		</div>
	);
}

export { IndexPage };
