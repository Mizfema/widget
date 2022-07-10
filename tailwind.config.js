module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand:{
          500:'#8257e6',
          300:'#996DFF'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
