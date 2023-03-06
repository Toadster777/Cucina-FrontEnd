/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        //#b0acac - light grey
        //#808080 - dark grey
        //#ADA030 - original green
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
        'rlg': {
					max: '1024px',
				},
        'rsm': {
					max: '640px',
				},
      },
      textColor: {
				oliveGreen: '#ADA030',
      }
    }
  },
  plugins: [],
}
