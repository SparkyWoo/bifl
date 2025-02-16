import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'rgb(var(--foreground-rgb))',
            a: {
              color: 'rgb(var(--primary))',
              '&:hover': {
                color: 'rgb(var(--primary-dark))',
              },
            },
            h1: {
              fontFamily: 'var(--font-instrument)',
            },
            h2: {
              fontFamily: 'var(--font-instrument)',
            },
            h3: {
              fontFamily: 'var(--font-instrument)',
            },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config;
