import React, { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';
import { parse, GameSave } from '../../../lib/parser';

import styles from './ChooseSave.module.css';

import samusSideHelmetSvg from './samusSideHelmet.svg';
import _ from 'lodash';

type ChooseSaveProps = {
	className?: string;
	saveFile: Uint8Array;
	onSave: (save: GameSave) => void;
};

function EnergyTank({ style, full }: { style?: CSSProperties; full: boolean }) {
	return (
		<div
			style={style}
			className={clsx('w-4 h-4', {
				[styles.fullTank]: full,
				[styles.emptyTank]: !full,
			})}
		/>
	);
}

function Energy({ energy }: { energy: { current: number; max: number } }) {
	const totalTankCount = (energy.max - 99) / 100;
	// TODO: is ceil right here?
	const fullTankCount = Math.ceil((energy.current - 99) / 100);

	const currentBaseEnergy = energy.current % 100;

	const tanks = [];
	for (let i = 0; i < totalTankCount; ++i) {
		const gridRow = i < 7 ? '2' : '1';
		const gridColumn = ((i % 7) + 2).toString();

		tanks.push(
			<EnergyTank
				key={i}
				full={i < fullTankCount}
				style={{
					gridColumn,
					gridRow,
				}}
			/>
		);
	}

	return (
		<div
			className="grid grid-rows-2 gap-x-1 place-items-center"
			style={{ gridTemplateColumns: 'max-content repeat(7, 1fr)' }}
		>
			<div style={{ gridColumn: '1', gridRow: '1' }} className="text-sm mr-2">
				ENERGY
			</div>
			<div style={{ gridColumn: '1', gridRow: '2' }} className="mr-2">
				{currentBaseEnergy}
			</div>
			{tanks}
		</div>
	);
}

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
									<Energy energy={gameSave.energy} />
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
