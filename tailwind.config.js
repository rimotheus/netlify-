// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          "dark-green": "#0A6160",
          "light-green": "#E6EDED",
          "sage-green": "#0A6160",
          "light-gray": "#F0F0F0",
          "darker-green": "#074641",
          "index-blue":"#379AE6",
          "popup-blue":"C3E4FE",
          "baby-blue":"#B9E5FF",
          "blue":"379AE6",
          "word-color":"#575D6D",
          "grey" : "#F2F8FE",
          "dark-grey": "#D9D9D9",
          "scenario":"A5D5FA",
          
        
        },
        backgroundImage: theme => ({
          'custom-radial': 'radial-gradient(circle, rgba(33, 114, 178, 1) 0%, rgba(23, 124, 204, 1) 50%, rgba(177, 221, 255, 1) 100%)',
        }),
      },
    },
    plugins: [],
  };
  