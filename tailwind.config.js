/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [],
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
	  extend: {},
	},
	plugins: [],
	plugins: [require('daisyui')],
   }