/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'memphis-coral': '#FF6F61',
        'memphis-purple': '#6B5B95',
        'memphis-green': '#88B04B',
        'memphis-pink': '#F7CAC9',
        'memphis-yellow': '#FFD700',
        'memphis-cyan': '#00CED1',
        'memphis-orange': '#FF8C00',
        'memphis-magenta': '#FF1493',
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
