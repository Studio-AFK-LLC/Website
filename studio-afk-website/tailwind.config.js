/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode theme colors
        'primary': {
          DEFAULT: '#0f172a',      // Very dark blue
        },
        'secondary': {
          DEFAULT: '#1e293b',      // Dark blue
        },
        'accent': {
          DEFAULT: '#6366f1',      // Indigo
          light: '#818cf8',        // Light indigo
        },
        'text': {
          DEFAULT: '#f8fafc',      // Almost white
          secondary: '#94a3b8',    // Gray
        },
        'highlight': {
          DEFAULT: '#06b6d4',      // Cyan
          alt: '#22d3ee',          // Light cyan
        },
        'success': '#10b981',      // Emerald
        'warning': '#f59e0b',      // Amber
        'error': '#ef4444',        // Red
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
