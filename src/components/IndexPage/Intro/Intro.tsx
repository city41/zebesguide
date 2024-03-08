import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { DropZone } from '../../DropZone';
import { ChooseSave } from './ChooseSave';

import styles from './Intro.module.css';

import zgLogoSvg from './zgLogo.svg';
import { GameSave } from '../../../lib/parser';
import { patchInBeenEverywhere } from '../../../lib/debug/patchInBeenEverywhere';

type PublicIntroProps = {
	className?: string;
	onSaveFileData: ({
		data,
		isDemo,
	}: {
		data: Uint8Array;
		isDemo: boolean;
	}) => void;
	onSaveIndexChosen: (props: {
		index: 0 | 1 | 2;
		mode: 'view' | 'edit';
	}) => void;
};

type InternalIntroProps = {
	saveFiles: [GameSave, GameSave, GameSave] | null;
	isDemo: boolean;
};

function Intro({
	className,
	saveFiles,
	isDemo,
	onSaveFileData,
	onSaveIndexChosen,
}: PublicIntroProps & InternalIntroProps) {
	const [patchInEverywhere, setPatchInEverywhere] = useState(false);

	const handleDropZoneData = useCallback(
		({ data, isDemo }) => {
			if (patchInEverywhere) {
				onSaveFileData({ data: patchInBeenEverywhere(data), isDemo });
			} else {
				onSaveFileData({ data, isDemo });
			}
		},
		[patchInEverywhere]
	);

	const body =
		saveFiles?.length === 3 ? (
			<ChooseSave
				saveFiles={saveFiles}
				isDemo={isDemo}
				onSaveIndexChosen={onSaveIndexChosen}
			/>
		) : (
			<DropZone
				className="h-40 flex flex-col gap-y-1 items-center justify-center"
				onData={handleDropZoneData}
			>
				{(clickToChoose, clickToChooseDemo) => (
					<>
						<div className="text-2xl">drag a Super Metroid save file here</div>
						<div className="flex flex-row">
							<div>or, </div>
							<div className="text-blue-500 cursor pointer hover:text-blue-300 hover:underline">
								{clickToChoose}
							</div>
						</div>
						<div className="flex flex-row mt-8 border-t border-gray-600 pt-4">
							<div>No save file handy?</div>
							<div className="text-blue-500 cursor pointer hover:text-blue-300 hover:underline">
								{clickToChooseDemo}
							</div>
						</div>
						{process.env.NODE_ENV !== 'production' && (
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
						)}
					</>
				)}
			</DropZone>
		);

	return (
		<div
			className={clsx(
				className,
				styles.root,
				'relative p-8 bg-black flex flex-col items-center'
			)}
			style={{ paddingTop: 400 }}
		>
			<p className="bg-red-700 text-white mb-8 w-1/3 px-4 py-1">
				This site is not fully operational yet, it is still being worked on.
				Feel free to give it a try,{' '}
				<a
					className="underline"
					href="https://github.com/city41/zebesguide/discussions"
				>
					feedback welcome
				</a>
			</p>
			<img src={zgLogoSvg.src} width={447} height={143} />
			<p className="text-gray-300 text-sm mt-8 mb-16">
				Shows your progress in Super Metroid, and lets you ask for hints
			</p>
			<div className="p-8 w-1/2 text-center bg-black border-4 border-white rounded-2xl z-10 shadow-xl">
				{body}
			</div>
		</div>
	);
}

export type { PublicIntroProps };
export { Intro };
