import { useEffect, useState } from 'react';
import { DropZone } from '../DropZone';
import { ZebesMap } from './ZebesMap';
import { parseCells } from '../../lib/parser/cells/parseCells';
import { getFirstSave } from '../../lib/getFirstSave';
import { Planet } from './Planet';

function IndexPage() {
	const [data, setData] = useState<null | Uint8Array>(null);
	const [cells, setCells] = useState<CellMatrix | null>(null);

	useEffect(() => {
		if (data) {
			const saveCells = parseCells(getFirstSave(data));
			setCells(saveCells);
		}
	}, [data]);

	if (cells) {
		return <ZebesMap matrix={cells} />;
	} else {
		return <Planet onData={(f) => setData(f)} />;
	}
}

export { IndexPage };
