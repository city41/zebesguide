import React from 'react';
import clsx from 'clsx';
import { EnergyTanks } from '../../Energy/EnergyTanks';
import { EnergyLabel } from '../../Energy/EnergyLabel';

import styles from './ChooseSave.module.css';

import samusSideHelmetSvg from './samusSideHelmet.svg';
import _ from 'lodash';
import { GameSave } from '../../../../lib/parser';

type PublicChooseSaveProps = {
	className?: string;
	onSaveIndexChosen: (index: 0 | 1 | 2) => void;
};

type InternalChooseSaveProps = {
	saveFiles: [GameSave, GameSave, GameSave];
};

function ChooseSave({
	className,
	saveFiles,
	onSaveIndexChosen,
}: PublicChooseSaveProps & InternalChooseSaveProps) {
	return (
		<div className={clsx(className, 'flex flex-col w-full gap-y-8')}>
			{saveFiles.map((gameSave, i) => {
				let minutes = gameSave.time.minutes.toString();

				if (gameSave.time.minutes < 10) {
					minutes = '0' + minutes;
				}

				return (
					<div
						key={i}
						className={clsx(
							styles.saveRow,
							'flex flex-row items-center font-bold text-xl gap-x-8 p-2 cursor-pointer',
							{
								'opacity-40': !gameSave.active,
								'hover:bg-gray-700': gameSave.active,
							}
						)}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();

							if (gameSave.active) {
								onSaveIndexChosen(i as 0 | 1 | 2);
							}
						}}
					>
						<img
							className={clsx({
								[styles.helmet]: gameSave.active,
							})}
							src={samusSideHelmetSvg.src}
							alt="Samus's helmet from the side"
						/>
						<div className="flex-1 flex flex-row justify-between items-center">
							{gameSave.active ? (
								<>
									<EnergyLabel energy={gameSave.energy} />
									<EnergyTanks energy={gameSave.energy} className="gap-1" />
									<div className="flex flex-col">
										<div className="text-sm">TIME</div>
										<div>
											{gameSave.time.hours}:{minutes}
										</div>
									</div>
								</>
							) : (
								<div>NO DATA</div>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export { ChooseSave };
