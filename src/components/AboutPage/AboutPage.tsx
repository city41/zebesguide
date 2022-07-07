import React from 'react';

function AboutPage() {
	return (
		<div className="bg-black text-white mx-auto max-w-4xl m-8">
			<p>
				A site that loads your Super Metroid save file, shows you your current
				progress, and eventually will offer hints on where to go next. This site
				is a work in progress (and has a long ways to go)
			</p>
			<ul className="flex flex-col gap-y-8 my-8">
				<li>
					<a
						className="text-blue-500 cursor-pointer"
						href="https://github.com/city41/zebesguide"
						rel="noreferrer noopener"
					>
						github repo
					</a>
				</li>
				<li>
					<a
						className="text-blue-500 cursor-pointer"
						href="https://mattgreer.dev/blog/discerning-the-super-metroid-map-with-bizhawk-and-lua/"
						rel="noreferrer noopener"
					>
						blog post on how I dumped the map
					</a>
				</li>
				<li>
					<a className="text-blue-500 cursor-pointer" href="/">
						back to Zebes
					</a>
				</li>
			</ul>
		</div>
	);
}

export { AboutPage };
