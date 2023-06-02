/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        danger: '#E25858',
        darkblue: '#1E6F9F',
        blue: '#4EA8DE',
        darkpurple: '#5E60CE',
        purple: '#8284FA',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
}
