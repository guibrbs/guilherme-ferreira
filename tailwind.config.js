module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#FBD38D',
          500: '#F6AD55',
        },
        elementary: {
          300: '#3CB7B4',
          500: '#30918F',
        },
        light: {
          100: '#FFF6EA',
          300: '#F4EDE4',
          500: '#F0E7DB',
          700: '#bdb5ac',
        },
        dark: {
          100: '#2E2E31',
          300: '#202023',
          500: '#1D1D20',
        },
        textLight: {
          300: '#f6f6f6',
          500: '#EEEEEE',
          600: '#C2C2C2'
        }
      },
      maxWidth: {
        customWidth: '44rem',
        imgWidth: '329px',
        txtWidth: '413px'
      },
      fontSize: {
        customSize: '1.75rem',
      }
    },
  },
  plugins: [],
}
