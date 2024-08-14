/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        'extra': '2', // Puedes ajustar el nivel de brillo aquí
      },
      animation: {
        'move-up-down': 'moveUpDown 2s ease-in-out infinite',
        'move-up-down-shake': 'moveUpDownShake 1s ease-in-out infinite',
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        moveUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveUpDownShake: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(-5px)' },
          '50%': { transform: 'translateY(0) translateX(5px)' },
          '75%': { transform: 'translateY(-10px) translateX(-5px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },

    },
  },
  plugins: [],
}
