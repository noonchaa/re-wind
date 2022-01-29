module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: []
}
