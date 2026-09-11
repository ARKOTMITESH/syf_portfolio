/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: '#FAF8F5',
          card: '#FFFFFF',
          dark: '#121315',
          darker: '#0B0C0E',
          surface: '#18191C',
          muted: '#24262B',
          beige: '#EFEBE4',
          sand: '#E5DED4',
          taupe: '#7D7871',
          gold: '#C5A880',
          goldLight: '#DFC9AC',
          goldDark: '#9E8057',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.04em'
      }
    },
  },
  plugins: [],
}
