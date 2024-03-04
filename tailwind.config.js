/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        desaturated_darkcyan: "hsl(180, 29%, 50%)",
        light_grayish_cyan_background: "hsl(180, 52%, 96%)",
        light_grayish_cyan_filter: "hsl(180, 31%, 95%)",
        dark_grayish_cyan: "hsl(180, 8%, 52%)",
        verydark_grayish_cyan: "hsl(180, 14%, 20%)"
      },
      fontFamily: {
        league_spartan: ["League Spartan", "sans-serif"]
      },
      backgroundImage: {
        mobile_background: "/bg-header-mobile.svg",
        desktop_background: "/bg-header-desktop.svg",
        icon_remove: "/icon-remove.svg"
      }
    },
  },
  plugins: [],
}

