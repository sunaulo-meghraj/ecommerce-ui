const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "blog-1":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg')",

        "blog-2":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg')",

        "blog-3":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1.jpg')",

        "blog-4":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1444858345149-8ff40887589b-1.jpg')",

        "blog-5":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg')",

        "blog-6":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1434871619871-1f315a50efba-1.jpg')",

        "blog-7":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1434472007488-8d47f604f644-1.jpg')",

        "blog-8":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1.jpg')",

        "portfolio-1":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1-768x536.jpg')",

        "portfolio-2":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1-768x536.jpg')",

        "portfolio-3":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1-768x546.jpg')",

        "portfolio-4":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1-768x546.jpg')",

        "portfolio-5":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1-768x546.jpg')",

        "portfolio-6":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1430329429612-babb42f88673-1-1-768x536.jpg')",

        "portfolio-7":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449057528837-7ca097b3520c-1-1-768x546.jpg')",

        "portfolio-8":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1-1-768x536.jpg')",

        "portfolio-9":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1-768x536.jpg')",

        "portfolio-10":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1-1-768x536.jpg')",

        "portfolio-11":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451417379553-15d8e8f49cde-768x546.jpg')",

        "portfolio-12":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451337516015-6b6e9a44a8a3-768x546.jpg')",

        "portfolio-13":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-768x546.jpg')",

        "portfolio-14":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1452723312111-3a7d0db0e024-768x546.jpg')",

        "portfolio-15":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451444635319-e5e247fbb88d-768x536.jpg')",

        "portfolio-16":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1454982523318-4b6396f39d3a-768x512.jpg')",
      }),
      minHeight: {
        100: "44rem",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        97: "25rem",
        98: "45rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
