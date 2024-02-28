import React from 'react';
import { IndexPage } from './IndexPage';
import { dispatch } from '../../store';
import { setSaveFileData, setSaveIndex } from './zebesSlice';

function ConnectedIndexPage() {
	function handleSaveFileData(data: Uint8Array) {
		dispatch(setSaveFileData(data));
	}

	function handleSaveIndexChosen(index: 0 | 1 | 2) {
		dispatch(setSaveIndex(index));
	}

	return (
		<IndexPage
			onSaveFileData={handleSaveFileData}
			onSaveIndexChosen={handleSaveIndexChosen}
		/>
	);
}

export { ConnectedIndexPage };
