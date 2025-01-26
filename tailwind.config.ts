import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					0: '#D1E7F4',
					100: '#A4D0EA',
					200: '#76B8DF',
					300: '#49A1D5',
					400: '#1B89CA',
					500: '#166EA2',
					600: '#105279',
					700: '#0B3751',
					800: '#051B28'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
