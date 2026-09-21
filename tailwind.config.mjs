/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        romance: {
          darkest: '#080306',
          dark: '#12070e',
          night: '#1c0b16',
          card: '#230e1c',
          wine: '#4a1122',
          burgundy: '#781d39',
          rose: '#d4697d',
          gold: '#e0a96d',
          accent: '#f3c68f',
          blush: '#fcd5ce',
          cream: '#fff5eb',
          pearl: '#faf7f2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'glow-rose': '0 0 25px rgba(212, 105, 125, 0.25)',
        'glow-gold': '0 0 25px rgba(224, 169, 109, 0.25)',
        'polaroid': '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 4px 10px -2px rgba(0, 0, 0, 0.4)',
        'polaroid-hover': '0 25px 45px -12px rgba(212, 105, 125, 0.35), 0 10px 20px -5px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
