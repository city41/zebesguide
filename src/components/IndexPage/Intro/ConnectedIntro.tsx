import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { Intro, PublicIntroProps } from './Intro';

function ConnectedIntro(props: PublicIntroProps) {
	const saveFiles = useSelector((state: AppState) => {
		return state.saveFiles;
	});

	return <Intro {...props} saveFiles={saveFiles} />;
}

export { ConnectedIntro };
