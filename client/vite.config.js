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
  // server: {
    // port: process.env.PORT || 8001,
    // proxy: {
    //     '/api': {
    //       // target: `http://localhost:8001`,
    //       target: "https://reactaoe4app.onrender.com",
    //       changeOrigin: true,
    //       // rewrite: (path) => path.replace(/^\/api/, ''),
    //       secure: false,
    //     }
    // },
  //   // host: '0.0.0.0',
  //   // port: 8001
  // },
})