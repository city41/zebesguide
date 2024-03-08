import React, { ReactChildren } from 'react';
import type { Quantity, GameSave } from '../../../lib/parser';

type ItemsProps = {
	gameSave: GameSave;
	onChange: (newGameSave: GameSave) => void;
};

function Quantity({
	quantity,
	children,
	onChange,
}: {
	quantity: Quantity;
	children: ReactChildren | string;
	onChange: (newQuantity: Quantity) => void;
}) {
	function handleOnChange(key: keyof Quantity, newValue: number) {
		onChange({
			...quantity,
			[key]: newValue,
		});
	}

	return (
		<div className="grid grid-cols-4 gap-x-4">
			<div className="col-span-1">{children}</div>
			<div className="col-span-3 flex flex-col gap-y-4">
				<div className="grid grid-cols-2">
					<div>current</div>
					<div>
						<input
							type="number"
							value={quantity.current}
							onChange={(e) => {
								handleOnChange('current', Number(e.target.value));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<div>max</div>
					<input
						type="number"
						value={quantity.max}
						onChange={(e) => {
							handleOnChange('max', Number(e.target.value));
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function Samus({ gameSave, onChange }: ItemsProps) {
	function handleQuantityChange(key: keyof GameSave, newQuantity: Quantity) {
		onChange({
			...gameSave,
			[key]: newQuantity,
		});
	}

	return (
		<div className="grid grid-cols-2">
			<div>
				<Quantity
					quantity={gameSave.missiles}
					onChange={(nq) => handleQuantityChange('missiles', nq)}
				>
					Missiles
				</Quantity>
				<Quantity
					quantity={gameSave.superMissiles}
					onChange={(nq) => handleQuantityChange('superMissiles', nq)}
				>
					Super Missiles
				</Quantity>
				<Quantity
					quantity={gameSave.powerBombs}
					onChange={(nq) => handleQuantityChange('powerBombs', nq)}
				>
					Power Bombs
				</Quantity>
			</div>
		</div>
	);
}

export { Samus };
