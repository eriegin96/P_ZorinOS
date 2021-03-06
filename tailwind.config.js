module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		cursor: {
			default: 'url(./src/assets/cursors/capitaine/default.cur), default',
			pointer: 'url(./src/assets/cursors/capitaine/pointer.cur), pointer',
			text: 'url(./src/assets/cursors/capitaine/text.cur), text',
			move: 'url(./src/assets/cursors/capitaine/move.cur), move',
			'not-allowed': 'url(./src/assets/cursors/capitaine/not-allowed.cur), not-allowed',
		},
		fontFamily: {
			mono: ['"JetBrains Mono"'],
			logo: ['"Orbitron"'],
		},
		extend: {
			backgroundImage: {
				'gradient-blue': 'var(--gradient-blue)',
				'gradient-green': 'var(--gradient-green)',
				'gradient-orange': 'var(--gradient-orange)',
				'gradient-red': 'var(--gradient-red)',
				'gradient-purple': 'var(--gradient-purple)',
			},
			boxShadow: {
				'menu-dark': '0 0 5px 5px rgba(0, 0, 0, 0.1)',
				'menu-light': '0 0 5px 5px rgba(255, 255, 255, 0.1)',
			},
			colors: {
				'light-main': 'var(--light-main)',
				'dark-main': 'var(--dark-main)',
				'blue-dark': 'var(--blue-dark)',
				'blue-light': 'var(--blue-light)',
				'green-dark': 'var(--green-dark)',
				'green-light': 'var(--green-light)',
				'orange-dark': 'var(--orange-dark)',
				'orange-light': 'var(--orange-light)',
				'red-dark': 'var(--red-dark)',
				'red-light': 'var(--red-light)',
				'purple-dark': 'var(--purple-dark)',
				'purple-light': 'var(--purple-light)',
				'transparent-w-10': 'rgba(255, 255, 255, 0.1)',
				'transparent-w-20': 'rgba(255, 255, 255, 0.2)',
				'transparent-w-30': 'rgba(255, 255, 255, 0.3)',
				'transparent-w-50': 'rgba(255, 255, 255, 0.5)',
				'transparent-w-70': 'rgba(255, 255, 255, 0.7)',
				'transparent-b-10': 'rgba(0, 0, 0, 0.1)',
				'transparent-b-20': 'rgba(0, 0, 0, 0.2)',
				'transparent-b-30': 'rgba(0, 0, 0, 0.3)',
				'transparent-b-50': 'rgba(0, 0, 0, 0.5)',
				'transparent-b-70': 'rgba(0, 0, 0, 0.7)',
			},
			dropShadow: {
				'start-menu': '0 35px 35px rgba(255, 255, 255, 0.5)',
			},
			gridTemplateColumns: {
				14: 'repeat(14, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				18: 'repeat(18, minmax(0, 1fr))',
				20: 'repeat(20, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				7: 'repeat(7, minmax(0, 1fr))',
				8: 'repeat(8, minmax(0, 1fr))',
			},
			spacing: {
				'1/5': '20%',
			},
		},
	},
	plugins: [],
};
