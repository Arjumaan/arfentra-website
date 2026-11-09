/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          light: '#FAF7EF',
          DEFAULT: '#F5EED8',
          muted: '#B8A77E',
          gold: '#fabc41',
        },
        wine: {
          crimson: '#720E1E',
          deep: '#540815',
          vibrant: '#A8244D',
          container: '#8c1d40',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
