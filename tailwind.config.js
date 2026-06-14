export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        navy: {
          950: '#060B18',
          900: '#080D1A',
          800: '#0D1629',
          700: '#111D35',
          600: '#1A2B4A',
          500: '#1E3358',
        }
      }
    }
  },
  plugins: []
}
