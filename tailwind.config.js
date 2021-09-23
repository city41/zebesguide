module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'hud-yellow': {
					DEFAULT: '#f8b000',
					dark: '#b05000',
				},
				'hud-purple': {
					DEFAULT: '#400088',
				},
				'loadout-section-pink': {
					DEFAULT: '#d098d8',
					dark: '#606060',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
