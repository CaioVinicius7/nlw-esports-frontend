/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"]
		},
		screens: {
			xs: "350px",
			sm: "440px",
			md: "640px",
			lg: "768px",
			xl: "1024px",
			"2xl": "1280px",
			"3xl": "1536px"
		},
		extend: {
			backgroundImage: {
				galaxy: "url('/background-galaxy.png')",
				"nlw-gradient":
					"linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 40.94%, #E1D55D 33.57%)",
				"game-gradient":
					" linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
			}
		}
	},
	plugins: []
};
