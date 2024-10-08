/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
	  extend: {},
	},
	plugins: [],
	plugins: [require('daisyui'),    ],
	daisyui: {
			themes: ["dark"],
		  },
   }