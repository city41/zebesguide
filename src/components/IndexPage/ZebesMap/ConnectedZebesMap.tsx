import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from '../../../store';
import { ZebesMap, PublicZebesMapProps } from './ZebesMap';
import { setGameSave } from './mapSlice';
import { GameSave } from '../../../lib/parser';

type ConnectedZebesMapProps = {
	gameSave: GameSave;
};

function ConnectedZebesMap({
	gameSave,
	...rest
}: PublicZebesMapProps & ConnectedZebesMapProps) {
	useEffect(() => {
		dispatch(setGameSave(gameSave));
	}, []);

	const { matrix } = useSelector((state: AppState) => {
		return state.map;
	});

	if (!matrix) {
		return null;
	}

	console.log('matrix', matrix);

	return <ZebesMap {...rest} matrix={matrix} />;
}

export { ConnectedZebesMap };
