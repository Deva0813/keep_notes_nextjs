/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#A1CCD1',
        header_text: "#116A7B",
        body_text: "#E9B384",
        color1: {
          100: "#ecf5f6",
          200: "#d9ebed",
          300: "#c7e0e3",
          400: "#b4d6da",
          500: "#a1ccd1",
          600: "#81a3a7",
          700: "#617a7d",
          800: "#405254",
          900: "#20292a"
        },
        btn_add: {
          100: "#fbf0e6",
          200: "#f6e1ce",
          300: "#f2d1b5",
          400: "#edc29d",
          500: "#e9b384",
          600: "#ba8f6a",
          700: "#8c6b4f",
          800: "#5d4835",
          900: "#2f241a"
        },
      },
      screens: {
        'mobile': '300px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      height: {
        btn_lg: '4rem',
        btn_md: '2.25rem',
        btn_sm: '1.75rem',
      },
      width: {
        btn_lg: '4rem',
        btn_md: '2.25rem',
        btn_sm: '1.75rem',
      },
    },
    minHeight: {
      body: '93vh',
      header: '5vh',
    },
  },
  plugins: [],
}
