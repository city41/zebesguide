import React from 'react';
import clsx from 'clsx';
import { getUsedGameSlots } from '../../../lib/parser';
import { getSave } from '../../../lib/getFirstSave';

import samusSideHelmetSvg from './samusSideHelmet.svg';

type ChooseSaveProps = {
	className?: string;
	saveFile: Uint8Array;
	onSave: (save: Uint8Array) => void;
};

function ChooseSave({ className, saveFile, onSave }: ChooseSaveProps) {
	const inUse = getUsedGameSlots(saveFile);

	return (
		<div className={clsx(className, 'flex flex-col w-full gap-y-8')}>
			{inUse.map((u, i) => {
				return (
					<div
						key={i}
						className="flex flex-row items-center font-bold text-xl gap-x-8 p-2 hover:bg-gray-700 cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();

							const gameSave = getSave(saveFile, i);
							onSave(gameSave);
						}}
					>
						<div>SAMUS {String.fromCharCode('A'.charCodeAt(0) + i)}</div>
						<img src={samusSideHelmetSvg} alt="Samus's helmet from the side" />
						<div className="flex-1 flex flex-row justify-between">
							{u ? (
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
