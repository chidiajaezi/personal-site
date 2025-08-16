/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './app/**/*.{js,jsx,ts,tsx,md,mdx}', // Scan all files in /app/ including MDX
      './components/**/*.{js,jsx,ts,tsx}',  // Scan components directory
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'), // Enable prose styling for Markdown
    ],
  }
