import React from 'react';
import samusDeathPng from '../../samusDeath.png';

function TooSmall() {
	return (
		<div className="w-full max-w-lg p-8 pt-24 mx-auto">
			<h1 className="text-2xl font-bold text-center">Too small ... for now</h1>
			<img
				src={samusDeathPng.src}
				alt="Samus death pose"
				className="w-1/4 h-auto mx-auto my-8"
				width={Math.round(window?.innerWidth / 4)}
				height={Math.round(
					((window?.innerHeight / 4) * samusDeathPng.height) /
						samusDeathPng.width
				)}
			/>
			<div className="py-4 space-y-4">
				<p>
					Zebes Guide doesn&apos;t yet work on phones or small tablets, but it
					will eventually.
				</p>
			</div>
		</div>
	);
}

export { TooSmall };
