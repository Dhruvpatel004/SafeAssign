import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      // Define your environment variables here
      API_BASE_URL: JSON.stringify(process.env.API_BASE_URL || 'http://localhost:5001'),
      FLASK_BASE_URL:JSON.stringify(process.env.API_BASE_URL || 'http://localhost:8080'),

    }),
  ],
});
