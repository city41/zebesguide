import React, { useState } from 'react';
import clsx from 'clsx';
import { DropZone } from '../../DropZone';
import { ChooseSave } from './ChooseSave';

import styles from './Intro.module.css';

import metroidContainmentPng from './metroidContainment.png';
import zgLogoSvg from './zgLogo.svg';
import { GameSave } from '../../../lib/parser';
import { patchInBeenEverywhere } from '../../../lib/debug/patchInBeenEverywhere';

type IntroProps = {
	className?: string;
	onSave: (gameSave: GameSave) => void;
};

function Intro({ className, onSave }: IntroProps) {
	const [saveFileData, setSaveFileData] = useState<Uint8Array | null>(null);
	const [patchInEverywhere, setPatchInEverywhere] = useState(false);

	const body = saveFileData ? (
		<ChooseSave
			saveFile={
				patchInEverywhere ? patchInBeenEverywhere(saveFileData) : saveFileData
			}
			onSave={onSave}
		/>
	) : (
		<DropZone className="h-40 grid place-items-center" onData={setSaveFileData}>
			{(clickToChoose, clickToChooseDemo) => (
				<>
					<div className="text-2xl">
						drag a Super Metroid save file here to begin
					</div>
					<div className="rounded-lg border border-gray-500 bg-gray-600 hover:bg-gray-500 p-1">
						{clickToChoose}
					</div>
					<div className="rounded-lg border border-gray-500 bg-green-600 hover:bg-green-500 p-2">
						{clickToChooseDemo}
					</div>
					<div>
						<label>
							<input
								className="mr-2"
								type="checkbox"
								checked={patchInEverywhere}
								onChange={() => {
									setPatchInEverywhere((pie) => !pie);
								}}
							/>
							DEBUG: make Samus have gone everywhere
						</label>
					</div>
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
			<div className="h-full flex flex-col items-center justify-center">
				<img src={zgLogoSvg} width={447} height={143} />
				<p className="text-gray-300 text-sm mt-8">
					Shows your progress in Super Metroid, and lets you ask for hints
				</p>
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
