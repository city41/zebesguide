import clsx from 'clsx';
import React from 'react';
import { DropZone } from '../../DropZone';

import styles from './Intro.module.css';

type IntroProps = {
	className?: string;
	onData: (data: Uint8Array) => void;
};

function Intro({ className, onData }: IntroProps) {
	return (
		<div
			className={clsx(
				className,
				styles.root,
				'relative w-full h-screen grid place-items-center bg-cover bg-black'
			)}
		>
			<DropZone
				className="py-2 px-4 max-w-md text-center bg-black border border-white z-10"
				style={{ marginTop: '25%' }}
				onData={onData}
			>
				{(clickToChoose) => (
					<>
						<h1 className="font-bold text-xl text-white text-center my-2">
							Zebes Guide
						</h1>
						<div>drag a Super Metroid save file here to begin</div>
						{clickToChoose}
						<p className="text-gray-600 text-xs italic mt-8">
							No spoilers! You will see the same info you see when pausing the
							game
						</p>
					</>
				)}
			</DropZone>
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-75" />
		</div>
	);
}

export { Intro };
