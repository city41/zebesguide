import clsx from 'clsx';
import React, { CSSProperties, ReactNode } from 'react';

import styles from './LoadOutSection.module.css';

type LoadOutSectionProps = {
	className?: string;
	style?: CSSProperties;
	title: string;
	children: ReactNode;
};

function LoadOutSection({
	className,
	style,
	title,
	children,
}: LoadOutSectionProps) {
	return (
		<div
			className={clsx(
				className,
				styles.root,
				'relative rounded-2xl border-8 border-loadout-section-pink'
			)}
			style={style}
		>
			<div
				className={clsx(
					styles.inner,
					'border-4 border-loadout-section-pink-dark rounded-xl p-3 -m-1 bg-black overflow-hidden'
				)}
			>
				<h2 className="absolute -top-7 left-0 w-full text-center">
					<span className="inline-block bg-black px-2 font-bold text-white text-3xl">
						{title}
					</span>
				</h2>
				{children}
			</div>
		</div>
	);
}

export { LoadOutSection };
