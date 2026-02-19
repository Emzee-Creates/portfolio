/** @type {import('tailwindcss').Config} */
module.exports = {
  // Added .ts and .tsx support since your code uses them
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-fira-code)", "monospace"], // Essential for the "Engineer" feel
      },
      colors: {
        brand: {
          // The "SaaS" Palette
          dark: "#020617",      // Deepest Navy (Slate 950)
          card: "#0f172a",      // Card Background (Slate 900)
          accent: "#06b6d4",    // AI/Blockchain Cyan
          blue: "#3b82f6",      // Primary Action Blue
          surface: "#f8fafc",   // Light mode background
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "url('/grid.svg')", // Pro tip: adds a subtle tech grid background
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.700"),
            a: {
              color: theme("colors.brand.blue"),
              fontWeight: "600",
              "&:hover": { color: theme("colors.brand.accent") },
            },
            h1: { color: theme("colors.slate.900"), fontWeight: "800" },
            h2: { color: theme("colors.slate.900"), fontWeight: "700" },
            code: {
              backgroundColor: theme("colors.slate.100"),
              color: theme("colors.pink.500"), // Standard dev-friendly code color
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              fontSize: "0.9em",
            },
            blockquote: {
              borderLeftColor: theme("colors.brand.accent"),
              backgroundColor: theme("colors.slate.50"),
              padding: "1rem",
              borderRadius: "0 8px 8px 0",
            },
          },
        },
        // Dark mode typography settings
        invert: {
          css: {
            color: theme("colors.slate.400"),
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.slate.200") },
            code: { backgroundColor: theme("colors.slate.800") },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
