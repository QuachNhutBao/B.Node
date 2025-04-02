/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-yellow': '0 0 15px rgba(253, 224, 71, 0.5)',
        'inner-lg': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#D1D5DB',
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#93C5FD',
              },
            },
            h1: {
              color: '#F9FAFB',
            },
            h2: {
              color: '#F3F4F6',
            },
            h3: {
              color: '#E5E7EB',
            },
            h4: {
              color: '#D1D5DB',
            },
            strong: {
              color: '#E5E7EB',
            },
            code: {
              color: '#E5E7EB',
              background: '#374151',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: '#D1D5DB',
              borderLeftColor: '#4B5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}