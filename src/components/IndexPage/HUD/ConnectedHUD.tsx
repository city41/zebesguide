import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { HUD } from './HUD';

function ConnectedHUD() {
	const chosenSaveFile = useSelector((state: AppState) => {
		return state.chosenSaveFile;
	});

	if (!chosenSaveFile) {
		return null;
	}

	return <HUD gameSave={chosenSaveFile} />;
}

export { ConnectedHUD };
