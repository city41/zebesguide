import React from 'react';
import clsx from 'clsx';

type EnergyLabelProps = {
	className?: string;
	energy: {
		current: number;
	};
};

function EnergyLabel({ className, energy }: EnergyLabelProps) {
	const currentBaseEnergy = energy.current % 100;

	return (
		<div className={clsx(className)}>
			<div>ENERGY</div>
			<div>{currentBaseEnergy}</div>
		</div>
	);
}

export { EnergyLabel };
