/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7E5',
          100: '#FFEECC',
          200: '#FFDD99',
          300: '#FFCC66',
          400: '#FFBB33',
          500: '#FFAA00',
          600: '#CC8800',
          700: '#996600',
          800: '#664400',
          900: '#332200',
          950: '#1A1100',
        },
        font: {
          primary: "#1C1A17",
          secondary: "#A39C8F"
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

