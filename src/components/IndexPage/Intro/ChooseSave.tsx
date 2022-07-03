import React, { useMemo } from 'react';
import clsx from 'clsx';
import { parse, GameSave } from '../../../lib/parser';
import { EnergyTanks } from '../Energy/EnergyTanks';
import { EnergyLabel } from '../Energy/EnergyLabel';

import styles from './ChooseSave.module.css';

import samusSideHelmetSvg from './samusSideHelmet.svg';
import _ from 'lodash';

type ChooseSaveProps = {
	className?: string;
	saveFile: Uint8Array;
	onSave: (save: GameSave) => void;
};

function ChooseSave({ className, saveFile, onSave }: ChooseSaveProps) {
	const gameSaves = useMemo(() => {
		const saves = parse(saveFile);

		return saves;
	}, [saveFile]);

	return (
		<div className={clsx(className, 'flex flex-col w-full gap-y-8')}>
			{gameSaves.map((gameSave, i) => {
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
								onSave(gameSave);
							}
						}}
					>
						<img
							className={clsx({
								[styles.helmet]: gameSave.active,
							})}
							src={samusSideHelmetSvg}
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
