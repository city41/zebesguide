import { useEffect, useState } from 'react';
import { DropZone } from '../DropZone';
import { ZebesMap } from './ZebesMap';
import { getStartingCells } from '../../lib/parser/cells/getStartingCells';
import { parseCells } from '../../lib/parser/cells/parseCells';
import { getFirstSave } from '../../lib/getFirstSave';

function IndexPage() {
	const [data, setData] = useState<null | Uint8Array>(null);
	const [cells, setCells] = useState<CellMatrix>(getStartingCells());

	useEffect(() => {
		if (data) {
			const saveCells = parseCells(getFirstSave(data));
			setCells(saveCells);
		}
	}, [data]);

	return (
		<div className="w-32 h-32">
			<DropZone onData={(f) => setData(f)} />
			<ZebesMap matrix={cells} />
		</div>
	);
}

export { IndexPage };
