/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          glow: 'rgba(220, 38, 38, 0.4)',
        },
        charcoal: {
          950: '#060709',
          900: '#09090B',
          850: '#0F1117',
          800: '#111827',
          700: '#18181B',
          600: '#27272A',
          500: '#3F3F46',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -5px rgba(220, 38, 38, 0.5)',
        'glow-crimson-sm': '0 0 15px -3px rgba(220, 38, 38, 0.4)',
        'glow-crimson-lg': '0 0 40px -10px rgba(220, 38, 38, 0.6)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-blink': 'blink 1s step-start infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
