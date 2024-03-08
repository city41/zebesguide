import React, { ReactChildren } from 'react';
import clsx from 'clsx';

type TabBarProps = {
	className?: string;
	tabs: readonly string[];
	focused: string;
	onFocus: (tab: string) => void;
};

function Tab({
	focused,
	onClick,
	children,
}: {
	focused: boolean;
	onClick?: () => void;
	children: ReactChildren | string;
}) {
	return (
		<li
			className={clsx({ 'bg-orange-700': focused, 'cursor-pointer': !focused })}
			onClick={onClick}
		>
			{children}
		</li>
	);
}

function TabBar({ className, tabs, focused, onFocus }: TabBarProps) {
	return (
		<ul className={clsx(className, 'flex flex-row gap-x-8')}>
			{tabs.map((t) => {
				return (
					<Tab
						key={t}
						focused={t === focused}
						onClick={t === focused ? undefined : () => onFocus(t)}
					>
						{t}
					</Tab>
				);
			})}
		</ul>
	);
}

export { TabBar };
