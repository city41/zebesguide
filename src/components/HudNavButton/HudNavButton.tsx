import clsx from 'clsx';
import React from 'react';

type HudNavButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>;

function HudNavButton({ className, children, ...rest }: HudNavButtonProps) {
	return (
		<button {...rest} className={clsx(className, 'border-2 border-hud-purple')}>
			<div className="bg-hud-yellow text-black py-0.5 px-1 font-bold text-3xl border-b-2 border-r-2 border-hud-yellow-dark">
				{children}
			</div>
		</button>
	);
}

export { HudNavButton };
