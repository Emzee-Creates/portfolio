/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#2563EB",   // primary accent
          dark: "#0F172A",   // sidebar background
          light: "#F8FAFC",  // page background
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.brand.blue"),
              "&:hover": { color: theme("colors.blue.700") },
            },
            h1: { color: theme("colors.brand.dark"), fontWeight: "700" },
            h2: { color: theme("colors.brand.dark"), fontWeight: "600" },
            h3: { color: theme("colors.brand.dark"), fontWeight: "600" },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontWeight: "500",
            },
            blockquote: {
              borderLeftColor: theme("colors.brand.blue"),
              color: theme("colors.gray.600"),
              fontStyle: "italic",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
