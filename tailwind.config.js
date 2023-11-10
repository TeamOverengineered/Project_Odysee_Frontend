/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "pastel",
      "wireframe",
      "winter",
      "lofi",
      "corporate",
      "cyberpunk",
      "retro",
      "synthwave",
      "forest"
    ]
  }
}

