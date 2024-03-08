import React from 'react';
import zgLogoSvg from '../IndexPage/Intro/zgLogo.svg';
import { Footer } from '../Footer';

function AboutPage() {
	return (
		<div className="bg-black text-white mx-auto max-w-xl pt-24 flex flex-col gap-y-6 h-full">
			<img className="self-center mb-16" src={zgLogoSvg.src} width={223} />
			<p>
				Zebes Guide is a site for Super Metroid on the Super Nintendo. After
				loading a save file, it will show you your current progress, offer hints
				on where to go next, and allows editing your save file.
			</p>
			<p>It&apos;s still very much in progress.</p>
			<p>
				Why? I just thought a site like this would be pretty neat and fun to
				build. I&apos;d love to see more sites like this for other games, but
				wow this one has been a ton of work already :)
			</p>
			<a
				className="text-blue-500 underline"
				href="https://mattgreer.dev/blog/discerning-the-super-metroid-map-with-bizhawk-and-lua/"
			>
				A blog post on how I figured out the map
			</a>
			<div className="flex-1" />
			<Footer className="pb-8" />
		</div>
	);
}

export { AboutPage };
