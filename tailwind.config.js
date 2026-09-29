/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.2',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}