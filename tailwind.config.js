/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				Text: '#E9E9E9',
				Background: '#6C6C6C',
				Primary: '#A7F4FF',
				Secondary: '#000000',
				Accent: '#9EF3FF',
				BackContainer: '#595959',

				// Dark Mode
				DarkAccent: '#32E28A',
				DarkSecondary: '##0C0D0D',
				DarkPrimary: '#57B7B7',
				DarkBG: '#3B3B3B',
				DarkTXT: '#ECE9E9'
			}
		},
	},
	plugins: [],
};
