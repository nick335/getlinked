import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        secondary: ['var(--font-ClashDisplay)'],
        primary: ['var(--font-montserrat)'],
        tertiary: ['var(--font-inter)']
      },
      colors: {
        primaryBg: '#150E2B',
        highlighttxt: '#D434FE',
        borderline: 'rgba(225, 225, 225, 0.18)'
      },
      keyframes: {
        slideout: {
          '0%': { right: '0%'},
          '100%': {right: '-100%'}
        },
        slidein: {
          '0%': { right: '-100%' },
          '100%': { right: '0%' }
        },
      },
      animation: {
        'slideIn': 'slidein 0.3s ease-in-out  both',
        'slideOut': 'slideout 0.5s ease-in-out both'
      }
    },
  },
  plugins: [],
}
export default config
