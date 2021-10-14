import React, { useState } from 'react';
import clsx from 'clsx';
import { DropZone } from '../../DropZone';
import { ChooseSave } from './ChooseSave';

import styles from './Intro.module.css';

import metroidContainmentPng from './metroidContainment.png';

type IntroProps = {
	className?: string;
	onSave: (saveData: Uint8Array) => void;
};

function Intro({ className, onSave }: IntroProps) {
	const [saveFileData, setSaveFileData] = useState<Uint8Array | null>(null);

	const body = saveFileData ? (
		<ChooseSave saveFile={saveFileData} onSave={onSave} />
	) : (
		<DropZone
			className="p-8 max-w-md text-center bg-black border border-dashed border-white z-10"
			onData={setSaveFileData}
		>
			{(clickToChoose) => (
				<>
					<div className="text-2xl">
						drag a Super Metroid save file here to begin
					</div>
					{clickToChoose}
					<p className="text-gray-600 text-xs italic mt-8">
						No spoilers! You will see the same info you see when pausing the
						game
					</p>
				</>
			)}
		</DropZone>
	);

	return (
		<div
			className={clsx(
				className,
				styles.root,
				'relative mx-auto max-w-6xl h-screen grid grid-cols-2 grid-rows-2 gap-x-8 place-items-center'
			)}
		>
			<div>
				<h1>Zebes Guide</h1>
			</div>
			<div className="row-span-2 w-full h-full">
				<img className="w-full h-full" src={metroidContainmentPng.src} />
			</div>
			{body}
		</div>
	);
}

export { Intro };
