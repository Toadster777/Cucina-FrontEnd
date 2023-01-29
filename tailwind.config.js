/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        oliveGreen: '#ADA030',
        navGrey: '#A2A0A029',
      },
      fontFamily: {
				gVibes: ['GreatVibes', 'sans-serif'],
			},
      screens: {
        'xs': {
					min: '420px',
				},
				'rxs': {
					max: '420px',
				},
        'rmd': {
					max: '768px',
				},
      },
      textColor: {
				oliveGreen: '#ADA030',
      }
    }
  },
  plugins: [],
}
