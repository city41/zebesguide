import React, { useMemo } from 'react';
import clsx from 'clsx';
import { parse, GameSave } from '../../../lib/parser';
import { getSave } from '../../../lib/getFirstSave';

import styles from './ChooseSave.module.css';

import samusSideHelmetSvg from './samusSideHelmet.svg';

type ChooseSaveProps = {
	className?: string;
	saveFile: Uint8Array;
	onSave: (save: GameSave) => void;
};

function ChooseSave({ className, saveFile, onSave }: ChooseSaveProps) {
	const gameSaves = useMemo(() => {
		const saves = [];
		for (let i = 0; i < 3; ++i) {
			saves.push(parse(getSave(saveFile, i)));
		}

		return saves;
	}, [saveFile]);

	return (
		<div className={clsx(className, 'flex flex-col w-full gap-y-8')}>
			{gameSaves.map((gameSave, i) => {
				return (
					<div
						key={i}
						className={clsx(
							styles.saveRow,
							'flex flex-row items-center font-bold text-xl gap-x-8 p-2 hover:bg-gray-700 cursor-pointer'
						)}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();

							onSave(gameSave);
						}}
					>
						<div>SAMUS {String.fromCharCode('A'.charCodeAt(0) + i)}</div>
						<img
							className={styles.helmet}
							src={samusSideHelmetSvg}
							alt="Samus's helmet from the side"
						/>
						<div className="flex-1 flex flex-row justify-between">
							{gameSave.active ? (
								<>
									<div className="flex flex-col">
										<div className="text-sm">ENERGY</div>
										<div>99</div>
									</div>
									<div className="flex flex-col">
										<div className="text-sm">TIME</div>
										<div>1:23</div>
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
