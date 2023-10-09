/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				indigoP: "#4E31AA",
				lightIndigo: "#e0d7fc",
				orangeP: "#ff5823",
			},
			textColor: {
				orangeP: "#ff5823",
			},
			screens: {
				"xs": "320px",
				"sm": "640px",
				"md": "768px",
				"xmd": "920px",
				"lg": "1024px",
				"xl": "1280px",
				"2xl": "1536px"
			}
		},
	},
	plugins: [require("flowbite/plugin")],
};
