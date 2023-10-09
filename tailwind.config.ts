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
        'heroBg': "url('/images/home/hero/heroBg.png')"
      },
      fontFamily: {
        secondary: ['var(--font-ClashDisplay)'],
        primary: ['var(--font-montserrat)'],
        tertiary: ['var(--font-inter)']
      },
      colors: {
        primaryBg: '#150E28',
        bigIdeaBg: '#140D27',
        highlighttxt: '#D434FE',
        highlighttxt2: '#FF26B9',
        borderline: 'rgba(225, 225, 225, 0.18)',
        borderline2: '#D434FE',
        qdark: '#A866FD',
        qlight: '#D434FE',
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
      },
      fontSize: {
        heroHeader: 'clamp(2rem, 10vw, 3rem)',
        heroHeaderLg: 'clamp(4rem, 7vw, 6rem)',
        sectionHeader: 'clamp(1.25rem, 4vw, 2rem)'
      },
    },
  },
  plugins: [],
}
export default config
