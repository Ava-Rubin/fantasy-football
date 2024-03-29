/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: ['blur'],
      colors: {
        'background':"#000000",
        'red-player':"#FF5656",
        'yellow-player':"#FFB74B",
        'green-indic':'#79E1B2',
        'red-indic':'#FF5656',
        'red-score':'#F8A2A2',
        'yellow-score':'#FCD294',
        'card-bg':'#F2F2F2',
        


        'light-bg':'#F5F5F5',
        'light-card':'#FFFFFF',
        'light-pink':'#FBC1DB',
        'light-purp':'#E4BEF2',
        'light-green':'#C8E3D7',
        'light-blue':'#D3E1EF',
        'light-red-1':'#FF7C7C',
        'light-red-2':'#FFCCCC',
        'light-yellow':'#FFD794',
        'light-text':'#111111',
        'dark-bg':'#2B2737',
        'dark-card':'#100C18',
        'dark-pink':'#FF62A8',
        'dark-purp':'#D176F2',
        'dark-green':'#68E3A1',
        'dark-blue':'#5CA8F3',
        'dark-red':'#FF5656',
        'dark-yellow':'#FFBC4B',
        'dark-text':'#FFFFFF',
      },
    fontFamily: {
      'arimo':['Arimo','sans-serif'],
      'josefin-sans':['Josefin Sans','sans-serif'],
      'alata':['Alata','serif'],
      'urbanist':['Urbanist','sans-serif']
    }
    },
  },
  plugins: [],
};
