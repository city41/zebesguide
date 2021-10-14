const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins(
	[
		[
			withOptimizedImages,
			{
				handleImages: ['svg'],
				inlineImageLimit: -1,
			},
		],
	],
	{
		pageExtensions: ['tsx'],
		trailingSlash: true,
		publicRuntimeConfig: {
			PROJECT_ROOT: __dirname,
			ROOT_DOMAIN: 'zebesguide.com',
		},
	}
);
