// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  server: {
    port: process.env.PORT,
    proxy: {
      // "/": "http://localhost:8001/", // the address that u serve in the backend 
      // "/api": "http://127.0.0.1:5173/", // the address that u serve in the backend 
    },
  },
})