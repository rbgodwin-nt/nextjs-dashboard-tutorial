import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        halloween: {
          orange: {
            50: '#FFF4E6',
            100: '#FFE8CC',
            200: '#FFD699',
            300: '#FFC266',
            400: '#FFAD33',
            500: '#FF9500',
            600: '#F77F00',
            700: '#CC6600',
            800: '#994D00',
            900: '#663300',
          },
          purple: {
            50: '#F3E5F5',
            100: '#E1BEE7',
            200: '#CE93D8',
            300: '#BA68C8',
            400: '#AB47BC',
            500: '#9C27B0',
            600: '#8E24AA',
            700: '#7B1FA2',
            800: '#6A1B9A',
            900: '#4A148C',
          },
          black: {
            50: '#F5F5F5',
            100: '#E0E0E0',
            200: '#BDBDBD',
            300: '#9E9E9E',
            400: '#757575',
            500: '#424242',
            600: '#2D2D2D',
            700: '#1F1F1F',
            800: '#1A1A1A',
            900: '#0D0D0D',
          },
          green: {
            50: '#E0F2F1',
            100: '#B2DFDB',
            200: '#80CBC4',
            300: '#4DB6AC',
            400: '#26A69A',
            500: '#009688',
            600: '#00897B',
            700: '#00796B',
            800: '#00695C',
            900: '#004D40',
          },
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
