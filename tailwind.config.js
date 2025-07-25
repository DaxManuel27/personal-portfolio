/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "transparent",
        primary: "rgba(0, 0, 0, 0.3)", // Darker glassmorphism card
        accent: "#00E5FF", // A vibrant, futuristic light blue (cyan)
        text: "#f0f6fc", // Off-white, from GitHub's dark theme
        "text-secondary": "rgba(240, 246, 252, 0.7)", // Semi-transparent off-white
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
}; 