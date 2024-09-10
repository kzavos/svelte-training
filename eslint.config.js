import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	svelte.configs['flat/recommended'], // Use Svelte recommended settings
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		extends: [
			'prettier', // Ensure Prettier is at the end to override ESLint rules
			'plugin:prettier/recommended' // Use Prettier as the last override
		]
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];