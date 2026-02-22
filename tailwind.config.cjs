/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fdf7ec",
        "paper-alt": "#fff5de",
        accentRed: "#ff4b4b",
        accentYellow: "#ffd85c",
        accentBlue: "#4a90e2",
        accentTeal: "#4ec5b5",
        accentPink: "#ff7aa2"
      },
      boxShadow: {
        soft: "0 16px 36px rgba(0, 0, 0, 0.08)"
      },
      borderRadius: {
        paper: "18px"
      },
      fontFamily: {
        display: ['"Anton"', '"Impact"', "system-ui", "sans-serif"],
        body: ['system-ui', '-apple-system', '"Segoe UI"', "sans-serif"]
      }
    }
  },
  plugins: []
};
