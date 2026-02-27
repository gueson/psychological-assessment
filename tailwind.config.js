/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'WenQuanYi Micro Hei', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Songti SC', 'STSong', 'SimSun', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4361EE',
          light: '#4895EF',
          dark: '#3A0CA3',
        },
        secondary: {
          DEFAULT: '#F72585',
          light: '#F8333C',
          dark: '#B5179E',
        },
        accent: {
          DEFAULT: '#4CC9F0',
          light: '#48CAE4',
          dark: '#023E8A',
        },
        theme: {
          bg: '#F9FAFF',
          text: '#1A1A2E',
          muted: '#4A5568',
          surface: 'rgba(255,255,255,0.95)',
        }
      }
    },
  },
  plugins: [],
}
