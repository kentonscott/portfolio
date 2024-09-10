/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'white': '#ffffff',
			'black': '#403835',
			'neutral': '#FFF5F1',
			'red': '#FF340A',
			'pink': '#FFBCD4'
		},
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'10': '10px',
			'15': '15px',
		},
		extend: {
			keyframes: {
				appear: {
				  "0%": {
					opacity: "0",
					
				  },
				  "100%": {
					opacity: "1",
				  },
			   },
			   animation: {
				 appear: "appear 1s ease-in-out",
			   },
			}
		},
	},
	plugins: [],
}
