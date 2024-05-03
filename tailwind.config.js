/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{html,js,jsx,tsx}",
      "./components/**/*.{html,js}",
   ],
   theme: {
      extend: {
         colors: {
            main: {
               lightgrey: "rgb(234 242 252)",
               fontlightgrey: "rgb(108 108 108)",
               buttonlightgrey: "rgb(244 244 244)",
               darkgrey: "rgb(71 71 71)",
               blue: "rgb(48 127 226)",
               orange: "#ef6000",
            },
         },
      },
      fontFamily: {
         roboto: ["Roboto"],
      },
   },
   plugins: [],
};
