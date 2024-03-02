import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { EditSave } from './EditSave';

function ConnectedEditSave() {
	const { chosenSaveFile } = useSelector((state: AppState) => {
		return state;
	});

	if (!chosenSaveFile) {
		return null;
	}

	return <EditSave gameSave={chosenSaveFile} />;
}

export { ConnectedEditSave };
