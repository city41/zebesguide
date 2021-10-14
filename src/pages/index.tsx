import React from 'react';

import { useFirstRender } from '../hooks/useFirstRender';
import { IfNotTooSmall } from '../components/IfNotTooSmall';
import { TooSmall } from '../components/IfNotTooSmall/TooSmall';
import { IndexPage } from '../components/IndexPage';
import { NoScript } from '../components/NoScript';

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
		<>
			{noScript}
			{ifNotTooSmall}
		</>
	);
}

export default NextIndexPage;
