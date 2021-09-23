import clsx from 'clsx';
import React from 'react';

type ResetButtonProps = Omit<
	JSX.IntrinsicElements['button'],
	'ref' | 'children'
>;

function ResetButton({ className, ...rest }: ResetButtonProps) {
	return (
		<button
			className={clsx(className, 'rounded-lg border-4 border-gray-300')}
			{...rest}
		>
			<div className="rounded-md bg-gray-800 text-gray-300 h-16 text-sm p-1 flex flex-col justify-end">
				<div>RESET</div>
			</div>
		</button>
	);
}

export { ResetButton };
