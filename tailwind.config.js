module.exports = {
  enabled: process.env.NODE_ENV === 'publish',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
