import React from 'react';
import { useFirstRender } from '../hooks/useFirstRender';
import { IfNotTooSmall } from '../components/IfNotTooSmall';
import { TooSmall } from '../components/IfNotTooSmall/TooSmall';
import { IndexPage } from '../components/IndexPage';
import { NoScript } from '../components/NoScript';
import { Provider } from 'react-redux';
import { store } from '../store';

function NextIndexPage() {
	const firstRender = useFirstRender();

	const noScript = <NoScript />;
	const ifNotTooSmall = (
		<IfNotTooSmall tooSmallDisplay={<TooSmall />}>
			{() => <IndexPage />}
		</IfNotTooSmall>
	);

	return firstRender ? (
		noScript
	) : (
		<Provider store={store}>
			{noScript}
			{ifNotTooSmall}
		</Provider>
	);
}

export default NextIndexPage;
