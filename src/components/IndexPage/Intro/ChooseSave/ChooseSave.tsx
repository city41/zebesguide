import React from 'react';
import clsx from 'clsx';
import { EnergyTanks } from '../../Energy/EnergyTanks';
import { EnergyLabel } from '../../Energy/EnergyLabel';

import styles from './ChooseSave.module.css';

import samusSideHelmetSvg from './samusSideHelmet.svg';
import _ from 'lodash';
import { GameSave } from '../../../../lib/parser';

type ChooseSaveProps = {
	className?: string;
	saveFiles: [GameSave, GameSave, GameSave];
	isDemo: boolean;
	onSaveIndexChosen: (props: {
		index: 0 | 1 | 2;
		mode: 'edit' | 'view';
	}) => void;
};

function ChoiceButton(props: JSX.IntrinsicElements['div']) {
	return (
		<div
			className="cursor-pointer border border-white hover:border-gray-700 px-4 py-0.5 text-white hover:bg-green-300 hover:text-green-700 flex-1"
			{...props}
		/>
	);
}

function ChooseSave({
	className,
	saveFiles,
	isDemo,
	onSaveIndexChosen,
}: ChooseSaveProps) {
	return (
		<div className={clsx(className, 'flex flex-col w-full gap-y-8')}>
			{saveFiles.map((gameSave, i) => {
				let minutes = gameSave.time.minutes.toString();

				if (gameSave.time.minutes < 10) {
					minutes = '0' + minutes;
				}

				let demoLabel = null;

				if (isDemo) {
					if (i === 0) {
						demoLabel = 'Far into the game';
					} else if (i === 1) {
						demoLabel = 'Just starting out';
					}
				}

				return (
					<div
						key={i}
						className={clsx(
							styles.saveRow,
							'flex flex-row items-center font-bold text-xl gap-x-8 p-2 group -mx-8 px-8',
							{
								'opacity-40': !gameSave.active,
								'hover:bg-gray-700': gameSave.active,
							}
						)}
					>
						<img
							className={clsx({
								[styles.helmet]: gameSave.active,
							})}
							src={samusSideHelmetSvg.src}
							alt="Samus's helmet from the side"
						/>
						{gameSave.active ? (
							<div className="relative flex-1 flex flex-col">
								{demoLabel && (
									<div className="absolute -left-40 -top-2 -rotate-12 bg-orange-600 px-1 py-0.5 text-sm">
										{demoLabel}
									</div>
								)}
								<div className="flex-1 flex flex-row justify-between items-center">
									<EnergyLabel energy={gameSave.energy} />
									<EnergyTanks energy={gameSave.energy} className="gap-1" />
									<div className="flex flex-col">
										<div className="text-sm">TIME</div>
										<div>
											{gameSave.time.hours}:{minutes}
										</div>
									</div>
								</div>
								<div className="mt-2 invisible group-hover:visible flex flex-row items-center justify-stretch gap-x-4">
									<ChoiceButton
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();

											onSaveIndexChosen({
												index: i as 0 | 1 | 2,
												mode: 'view',
											});
										}}
									>
										view
									</ChoiceButton>
									<ChoiceButton
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();

											onSaveIndexChosen({
												index: i as 0 | 1 | 2,
												mode: 'edit',
											});
										}}
									>
										edit
									</ChoiceButton>
								</div>
							</div>
						) : (
							<div>NO DATA</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export { ChooseSave };
