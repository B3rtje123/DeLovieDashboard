/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      pop: ['Poppins', 'sans-serif'],
    },

    extend: {
      keyframes: {
        background:{
          '0%, 100%':{
            'background-position': '0% 0%'
          },
          '50%':{
            'background-position': '100% 100%'
          }
        }
      },
      animation: {
        background: 'background 10s ease-in-out infinite',
      },
      colors: {
        lightblue: '#ECF7F7',
        darkblue: '#05839B',
        lightgreen: '#F2F8E9',
        darkerlightgreen: '#E5F1D5',
        green: '#AFDB74',
        bgGreen: '#7EC6A7',
        textBlack: '#454545',
        cardGreen: '#BEDB96',
      },
    },
    plugins: [require('tailwind-scrollbar'),],
  }
}

