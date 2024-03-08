import React from 'react';
import clsx from 'clsx';

type FooterProps = {
	className?: string;
};

function Footer({ className }: FooterProps) {
	return (
		<footer className={clsx(className, 'grid place-items-center')}>
			<ul className="flex flex-row gap-x-4 text-xs">
				<li>
					<a className="text-blue-100" href="/about">
						about
					</a>
				</li>
				<li>
					<a
						className="text-blue-100"
						href="https://github.com/city41/zebesguide"
					>
						GitHub
					</a>
				</li>
				<li className="ml-8">
					made by{' '}
					<a className="text-blue-100" href="https://mattgreer.dev">
						Matt Greer
					</a>
				</li>
			</ul>
		</footer>
	);
}

export { Footer };
