import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 使用相对路径，确保在任何仓库名下都能正常访问
  base: './', 
  
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000
  }
});
