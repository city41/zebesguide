import React from 'react';
import { IfNotTooSmall } from '../components/IfNotTooSmall';
import { TooSmall } from '../components/IfNotTooSmall/TooSmall';
import { IndexPage } from '../components/IndexPage';
import { useFirstRender } from '../hooks/useFirstRender';

function NextIndexPage() {
	const firstRender = useFirstRender();

	if (!firstRender) {
		return (
			<IfNotTooSmall tooSmallDisplay={<TooSmall />}>
				{() => <IndexPage />}
			</IfNotTooSmall>
		);
	} else {
		return null;
	}
}

export default NextIndexPage;
