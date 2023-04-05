/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './**/*.razor'
    ],
  },
  theme: {
    extend: {
      height: {
        '128' : '32rem',
        '156' : '39rem',
        '172' : '42rem',
        '180' : '45rem',
        '240' : '60rem'
      },
      backgroundImage: {
        'splash-image': "url('/images/bg1.jpeg')",
        'iksar-bg': "url('/images/iksar-bg.jpeg')"

      },
      scale: {
        '-100':'-1',
      }
    },
  },
  plugins: [],
}

