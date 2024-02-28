import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { Intro, PublicIntroProps } from './Intro';

function ConnectedIntro(props: PublicIntroProps) {
	const { saveFiles } = useSelector((state: AppState) => {
		return state;
	});

	if (!saveFiles?.length) {
		return null;
	}

	return <Intro {...props} saveFiles={saveFiles} />;
}

export { ConnectedIntro };
