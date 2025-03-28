import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true, 
    port: 5173,
    hmr: {
      protocol: "wss", // Use WebSockets securely in production
    },
    proxy: {
      "/expenseTracker": {
        target: "https://expenseTracker.up.railway.app",
        changeOrigin: true,
        secure: true, // Ensure HTTPS
        rewrite: (path) => path.replace(/^\/expenseTracker/, ""),
      },
    },
  },
  plugins: [react()],
})
