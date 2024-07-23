/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your template files
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#3F72AF",
        Gray: "#BFBFBF",
      }
    },
  },
  plugins: [],
}
