/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-img': "url('./assets/login3.jpg')",
        'register-img': "url('./assets/register.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

