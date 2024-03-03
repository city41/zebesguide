import React, { ReactChildren } from 'react';
import type { Quantity, GameSave } from '../../../lib/parser';

type ItemsProps = {
	gameSave: GameSave;
};

function Quantity({
	quantity,
	children,
}: {
	quantity: Quantity;
	children: ReactChildren | string;
}) {
	return (
		<div>
			<div>{children}</div>
			<div>current: {quantity.current}</div>
			<div>max: {quantity.max}</div>
		</div>
	);
}

function Items({ gameSave }: ItemsProps) {
	return <Quantity quantity={gameSave.missiles}>Missiles</Quantity>;
}

export { Items };
