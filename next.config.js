const withPlugins = require('next-compose-plugins');
// const withOptimizedImages = require('next-optimized-images');
const withOptimizedClassnames = require('next-optimized-classnames');

module.exports = withPlugins(
	[
		withOptimizedClassnames,
		// [
		// 	withOptimizedImages,
		// 	{
		// 		inlineImageLimit: -1,
		// 	},
		// ],
	],
	{
		redirects() {
			return [
				{
					source: '/make',
					destination: '/editor',
					permanent: true,
				},
				{
					source: '/make/:id',
					destination: '/editor/:id',
					permanent: true,
				},
				{
					source: '/make/:id/:slug',
					destination: '/editor/:id/:slug',
					permanent: true,
				},
				{
					source: '/make/',
					destination: '/editor',
					permanent: true,
				},
				{
					source: '/make/:id/',
					destination: '/editor/:id',
					permanent: true,
				},
				{
					source: '/make/:id/:slug/',
					destination: '/editor/:id/:slug',
					permanent: true,
				},
			];
		},
		pageExtensions: ['tsx'],
		trailingSlash: true,
		publicRuntimeConfig: {
			PROJECT_ROOT: __dirname,
			ROOT_DOMAIN: 'zebesguide.com',
		},
		// images: {
		// 	disableStaticImages: true,
		// },
	}
);
