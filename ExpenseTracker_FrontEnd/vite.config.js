// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/expenseTracker/', // <-- this must be here
  plugins: [react()],
});
