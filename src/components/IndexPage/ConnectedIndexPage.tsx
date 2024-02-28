import React from 'react';
import { IndexPage } from './IndexPage';
import { dispatch } from '../../store';
import { setSaveFileData } from './zebesSlice';

function ConnectedIndexPage() {
	function handleSaveFileData(data: Uint8Array) {
		dispatch(setSaveFileData(data));
	}

	return <IndexPage onSaveFileData={handleSaveFileData} />;
}

export { ConnectedIndexPage };
