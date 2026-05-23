import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1ab8b8',
        'background': '#000000',
        'text': '#f2f2f2',
        'muted': '#828280',
      }
    },
  },
})