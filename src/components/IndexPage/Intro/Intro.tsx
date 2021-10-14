import React, { useState } from 'react';
import clsx from 'clsx';
import { DropZone } from '../../DropZone';
import { ChooseSave } from './ChooseSave';

import styles from './Intro.module.css';

import metroidContainmentPng from './metroidContainment.png';
import zgLogoSvg from './zgLogo.svg';

type IntroProps = {
	className?: string;
	onSave: (saveData: Uint8Array) => void;
};

function Intro({ className, onSave }: IntroProps) {
	const [saveFileData, setSaveFileData] = useState<Uint8Array | null>(null);

	const body = saveFileData ? (
		<ChooseSave saveFile={saveFileData} onSave={onSave} />
	) : (
		<DropZone onData={setSaveFileData}>
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
				'relative mx-auto max-w-7xl h-screen p-8 border-l border-r border-gray-500 grid grid-cols-2 grid-rows-2 gap-x-8 place-items-center overflow-hidden'
			)}
		>
			<div>
				<img src={zgLogoSvg} />
			</div>
			<div className="row-span-2 w-full -my-8">
				<img className="w-full h-full" src={metroidContainmentPng.src} />
			</div>
			<div className="p-8 w-full text-center bg-black border border-gray-500 rounded-2xl z-10 shadow-xl">
				{body}
			</div>
		</div>
	);
}

export { Intro };
