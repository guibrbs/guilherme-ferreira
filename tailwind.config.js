module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#FBD38D',
          500: '#F6AD55',
        },
        elementary: {
          300: '#8A5CEF',
          500: '#744EC9',
        },
        light: {
          300: '#F4EDE4',
          500: '#F0E7DB',
        },
        dark: {
          300: '#202023',
          500: '#1D1D20',
        },
        textLight: {
          300: '#f6f6f6',
          500: '#eeee'
        }
      }
    },
  },
  plugins: [],
}
