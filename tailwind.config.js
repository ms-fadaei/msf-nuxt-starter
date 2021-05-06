// Learn more at https://tailwindcss.com/docs/configuration
export default ({ rootDir, srcDir }) => ({
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  purge: {
    content: [
      `${srcDir}/components/**/*.{vue,js}`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/plugins/**/*.{js,ts}`,
      `${rootDir}/nuxt.config.{js,ts}`
    ],
    safelist: []
  }
})
