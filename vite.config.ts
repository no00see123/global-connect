import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 重要提示：部署到 GitHub Pages 时必须设置 base
  // 如果你的仓库地址是 https://github.com/username/my-app
  // 请将下面的 '/your-repo-name/' 修改为 '/my-app/'
  // 如果你绑定了自定义域名 (如 www.example.com)，则不需要修改，保持注释或设为 '/' 即可
  
  base: '/global-connect/', 
  
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000
  }
});