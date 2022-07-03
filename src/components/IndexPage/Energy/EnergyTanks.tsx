import React, { CSSProperties } from 'react';
import clsx from 'clsx';

import styles from './EnergyTanks.module.css';

type EnergyProps = {
	className?: string;
	size?: number;
	energy: {
		current: number;
		max: number;
	};
};

function EnergyTank({
	style,
	full,
	size,
}: {
	style?: CSSProperties;
	full: boolean;
	size: number;
}) {
	return (
		<div
			style={{ ...style, width: size, height: size }}
			className={clsx({
				[styles.fullTank]: full,
				[styles.emptyTank]: !full,
			})}
		/>
	);
}

function EnergyTanks({ className, energy, size = 16 }: EnergyProps) {
	const totalTankCount = (energy.max - 99) / 100;
	// TODO: is ceil right here?
	const fullTankCount = Math.ceil((energy.current - 99) / 100);

	const tanks = [];
	for (let i = 0; i < totalTankCount; ++i) {
		const gridRow = i < 7 ? '2' : '1';
		const gridColumn = ((i % 7) + 2).toString();

		tanks.push(
			<EnergyTank
				key={i}
				full={i < fullTankCount}
				size={size}
				style={{
					gridColumn,
					gridRow,
				}}
			/>
		);
	}

	return (
		<div
			className={clsx(className, 'grid grid-rows-2 gap-x-1')}
			style={{ gridTemplateColumns: 'min-content repeat(7, 1fr)' }}
		>
			{tanks}
		</div>
	);
}

export { EnergyTanks };
