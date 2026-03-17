/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        "source-serif": ["var(--font-source-serif)", "Georgia", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "#8B6914",
        "accent-deep": "#6B4F0E",
        "accent-warm": "#C4940A",
        "green-deep": "#2C3E2D",
        "bg-warm": "#F3EDE4",
        highlight: "#FFF8E7",
        "text-primary": "#1A1A18",
        "text-secondary": "#4A4A42",
        "text-muted": "#7A7A70",
        border: "#DDD8CE",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-glow-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139,105,20,0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(139,105,20,0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "pulse-glow-gold": "pulse-glow-gold 2s ease-in-out infinite",
        "slide-down": "slide-down 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
