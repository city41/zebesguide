import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { PublicSamusLoadOutProps, SamusLoadOut } from './SamusLoadOut';

function ConnectedSamusLoadOut(props: PublicSamusLoadOutProps) {
	const { chosenSaveFile } = useSelector((state: AppState) => {
		return state;
	});

	if (!chosenSaveFile) {
		return null;
	}

	return <SamusLoadOut {...props} gameSave={chosenSaveFile} />;
}

export { ConnectedSamusLoadOut };
