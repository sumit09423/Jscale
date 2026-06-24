/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        career: {
          blue: "#031326",
          sky: "#1e90ff",
          ink: "#031326",
          muted: "#63666d",
          soft: "#f4f9ff",
          line: "#d6dce6"
        },
        jscale: {
          blue: "#1e90ff",
          navy: "#031326",
          black: "#000000"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(3, 19, 38, 0.12)",
        button: "0 14px 30px rgba(30, 144, 255, 0.28)"
      }
    }
  },
  plugins: []
};
