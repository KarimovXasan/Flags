/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1140': '1140px'
      },
      colors:{
        'white' : '#FFFFFF',
        'black' : '#1E1E1E',
        'blue' : '#0D1B39',
        'gold' : '#E58411',
        'gray' : '#494A4D', 
        'bg-color' : '#3B4348'
      },
      backgroundImage:{
        'img1' : "url('/src/assets/img/body_img_1.png')",
        'img2' : "url('/src/assets/img/body_img_2.png')",
        'img3' : "url('/src/assets/img/body_img_3.png')",
      }
    },        
  },
  plugins: [],
}