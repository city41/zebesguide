import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { ZebesMap, PublicZebesMapProps } from './ZebesMap';

function ConnectedZebesMap(props: PublicZebesMapProps) {
	const { matrix } = useSelector((state: AppState) => {
		return state;
	});

	if (!matrix) {
		return null;
	}

	return <ZebesMap {...props} matrix={matrix} />;
}

export { ConnectedZebesMap };
