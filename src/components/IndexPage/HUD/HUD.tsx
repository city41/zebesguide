import React from 'react';
import clsx from 'clsx';
import { EnergyTanks } from '../Energy/EnergyTanks';
import { GameSave } from '../../../lib/parser';
import { EnergyLabel } from '../Energy/EnergyLabel';
import { Missile } from './Missile';
import { HUDMap } from './HUDMap';

type HUDProps = {
	className?: string;
	gameSave: GameSave;
};

function HUD({ className, gameSave }: HUDProps) {
	return (
		<div
			className={clsx(
				className,
				'grid grid-cols-10 place-items-center h-28 p-2'
			)}
		>
			<div className="col-span-2 flex flex-col justify-start">
				<EnergyTanks
					energy={gameSave.energy}
					size={24}
					className="gap-y-1 -mx-1"
				/>
				<EnergyLabel
					className="flex justify-between font-bold"
					energy={gameSave.energy}
				/>
			</div>
			<Missile className="col-span-2" missiles={gameSave.missiles} />
			<div />
			<div />
			<div />
			<div />
			<HUDMap className="col-span-2 overflow-hidden" />
		</div>
	);
}

export { HUD };
