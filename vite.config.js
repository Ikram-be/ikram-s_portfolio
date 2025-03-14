import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Add 'framer-motion' to the external modules
      external: ['@fortawesome/react-fontawesome'], // Add '@fortawesome/react-fontawesome' to the external modules
    },
  },
})
