import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { ZebesMap, PublicZebesMapProps } from './ZebesMap';

function ConnectedZebesMap(props: PublicZebesMapProps) {
	const chosenSaveFile = useSelector((state: AppState) => {
		return state.chosenSaveFile;
	});

	if (!chosenSaveFile) {
		return null;
	}

	return <ZebesMap {...props} matrix={chosenSaveFile.mapCells} />;
}

export { ConnectedZebesMap };
