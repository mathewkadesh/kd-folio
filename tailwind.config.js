/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:         '#0A0A0B',
        surface:     '#141416',
        surface2:    '#1C1C20',
        border:      'rgba(255,255,255,0.08)',
        cinema:      '#E50914',
        cinemaHover: '#F6121D',
        ember:       '#FF4D4D',
        text:        '#F5F5F7',
        muted:       '#A1A1AA',
        faint:       '#6B6B73',
      },
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        sans:    ['"Satoshi"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'glow-cinema': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(229,9,20,0.18) 0%, transparent 70%)',
        'glow-section': 'radial-gradient(ellipse 40% 30% at 50% 0%, rgba(229,9,20,0.12) 0%, transparent 70%)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'float':   'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
