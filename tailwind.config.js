module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { min: '375px', max: '1439px' },
      desktop: { min: '1440px' },
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
    },
    plugins: [],
  },
};
