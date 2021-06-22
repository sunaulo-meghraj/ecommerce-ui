module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "blog-p":
          "url('https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg')",
      }),
      height: {
        100: "34rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
