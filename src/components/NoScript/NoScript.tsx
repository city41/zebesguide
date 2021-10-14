import React from 'react';
import samusDeathPng from '../../samusDeath.png';

function NoScript() {
	return (
		<noscript>
			<div className="w-full max-w-lg p-8 pt-24 mx-auto">
				<h1 className="text-2xl font-bold text-center">JavaScript needed</h1>
				<img
					src={samusDeathPng.src}
					alt="Samus death pose"
					className="mx-auto my-8"
					width={samusDeathPng.width * 4}
					height={samusDeathPng.height * 4}
				/>
				<div className="py-4 space-y-4">
					<p>
						Zebes Guide is an interactive website and requires JavaScript to
						work.
					</p>
				</div>
			</div>
		</noscript>
	);
}

export { NoScript };
