/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        navbar: {
          bg: 'var(--navbar-bg)',
          text: 'var(--navbar-text)',
          'text-hover': 'var(--navbar-text-hover)',
          border: 'var(--navbar-border)',
        },
        hero: {
          dark: 'var(--hero-dark-bg)',
          light: 'var(--hero-light-bg)',
          accent: 'var(--hero-accent)',
        },
      },
      fontSize: {
        'navbar-logo': ['var(--navbar-logo-size-mobile)', { lineHeight: '1.2' }],
        'navbar-link': ['var(--navbar-link-size-mobile)', { lineHeight: '1.5' }],
        'navbar-button': ['var(--navbar-button-size-mobile)', { lineHeight: '1.5' }],
        'navbar-sublabel': ['var(--navbar-sublabel-size)', { lineHeight: '1.5' }],
        'mobile-menu-link': ['var(--mobile-menu-link-size)', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
