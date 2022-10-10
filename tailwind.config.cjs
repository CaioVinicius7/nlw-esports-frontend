/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			backgroundImage: {
				galaxy: "url('/background-galaxy.png')",
				"nlw-gradient":
					"linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 40.94%, #E1D55D 33.57%)"
			}
		}
	},
	plugins: []
};
