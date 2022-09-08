module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#00022b',
        'cream': '#f6faf8',
        'green': '#66a888',
        'red': '#f25d54',
        'accent4': '#fddd30',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        xxl: '32px',
      },
      fontFamily: {
        'sans': ['SF Pro', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
