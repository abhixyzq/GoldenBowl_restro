/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#815600",
        "primary-container": "#e8a430",
        "on-primary": "#ffffff",
        "on-primary-container": "#5e3d00",
        "primary-fixed": "#ffddb1",
        "primary-fixed-dim": "#ffba4a",
        "secondary": "#aa3529",
        "secondary-container": "#ff7261",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#700605",
        "tertiary": "#4a672c",
        "tertiary-container": "#9abb77",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#304b13",
        "background": "#fff8f6",
        "on-background": "#271811",
        "surface": "#fff8f6",
        "on-surface": "#271811",
        "on-surface-variant": "#514535",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fff1ec",
        "surface-container": "#ffe9e1",
        "surface-container-high": "#ffe2d7",
        "surface-container-highest": "#fadcd1",
        "surface-variant": "#fadcd1",
        "surface-dim": "#f2d4c8",
        "outline": "#837563",
        "outline-variant": "#d5c4af",
        "inverse-surface": "#3e2c25",
        "inverse-on-surface": "#ffede7",
        "inverse-primary": "#ffba4a",
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "20px",
        "base": "8px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "sm": "12px",
        "md": "24px",
        "xs": "4px",
        "lg": "40px",
        "xl": "64px"
      },
      fontFamily: {
        "headline": ["'Plus Jakarta Sans'", "sans-serif"],
        "body": ["'Work Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
