module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["./*{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bali': "url('../src/assets/images/bali.jpg')",
        'chicago': "url('../src/assets/images/chicago.jpg')",
        'europe': "url('../src/assets/images/europe.jpg')",
        'iceland': "url('../src/assets/images/iceland.jpg')",
        'LA': "url('../src/assets/images/LA.jpg')",
        'miami': "url('../src/assets/images/miami.jpg')",
        'new_york': "url('../src/assets/images/new_york.jpg')",
        'norway': "url('../src/assets/images/norway.jpg')",
        'sanFrancisco': "url('../src/assets/images/sanFrancisco.jpg')",
        'seattle': "url('../src/assets/images/seattle.jpg')",
        'switzerland': "url('../src/assets/images/switzerland.jpg')",
        'sydney': "url('../src/assets/images/sydney.jpg')",
        'yosemite': "url('../src/assets/images/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terceary': '#61AEC9',
      }),
      textColor: {
        'primary': "#CC2D4A",
        'secondary': "#8FA206",
        'terceary': "#61AEC9",
      }
    },
  },
  plugins: [],
}
