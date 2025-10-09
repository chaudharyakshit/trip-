/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Approximated from the provided logo (orange + blue)
          primary: '#E7941D',   // Orange
          secondary: '#2B7BB9', // Blue
          dark: '#1F2937',
        }
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0,0,0,0.25)',
        'glow': '0 0 0 3px rgba(231,148,29,0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.98)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 10s ease-in-out infinite',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
