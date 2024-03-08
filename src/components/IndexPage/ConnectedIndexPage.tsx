import React from 'react';
import { useSelector } from 'react-redux';
import { IndexPage } from './IndexPage';
import { AppState, dispatch } from '../../store';
import { setSaveFileData, setIsDemo, setSaveIndex, reset } from './zebesSlice';

function ConnectedIndexPage() {
	function handleSaveFileData({
		data,
		isDemo,
	}: {
		data: Uint8Array;
		isDemo: boolean;
	}) {
		dispatch(setSaveFileData(data));
		dispatch(setIsDemo(isDemo));
	}

	function handleSaveIndexChosen(index: 0 | 1 | 2) {
		dispatch(setSaveIndex(index));
	}

	function handleReset() {
		dispatch(reset());
	}

	const saveWasChosen = useSelector((state: AppState) => {
		return !!state.chosenSaveFile;
	});

	return (
		<IndexPage
			onSaveFileData={handleSaveFileData}
			onSaveIndexChosen={handleSaveIndexChosen}
			onReset={handleReset}
			saveWasChosen={saveWasChosen}
		/>
	);
}

export { ConnectedIndexPage };
