/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07090f',
        surface: '#0c1020',
        'surface-2': '#111827',
        border: '#1e2d47',
        'border-hover': '#2d4068',
        accent: '#7c3aed',
        'accent-light': '#a78bfa',
        'accent-bright': '#c4b5fd',
        'accent-dim': '#4c1d95',
        ink: '#e8edf5',
        muted: '#8892a4',
        'muted-2': '#525f72',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 10% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
