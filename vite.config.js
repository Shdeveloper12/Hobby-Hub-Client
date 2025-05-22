import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],  
        secondary: ['open-sans', 'sans-serif'],
        
      },
    },
  },


  plugins: [react(), tailwindcss()],
})
