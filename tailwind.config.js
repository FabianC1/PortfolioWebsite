// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoalBlack: '#121212',
        gold: '#FFD700',
        softBlack: '#0a0a0a',
        jet: '#343434',
        skyBlue: '#00BFFF',

        // Modern accent colors
        electricBlue: '#7DF9FF',
        royalPurple: '#7851A9',
        neonGreen: '#39FF14',
        coral: '#FF6F61',
        coolGray: '#8E9AAF',
        midnight: '#191970',
        blush: '#F29CA3',
        peach: '#FFDAB9',
        slate: '#708090',
        arctic: '#E0FFFF',
        neonPurple: '#BF40FF',
      }
    },
  },
  plugins: [],
}
