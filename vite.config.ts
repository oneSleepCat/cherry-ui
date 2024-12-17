import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/variables.scss" as *; @use "@/styles/mixins.scss" as *; @use "@/styles/functions.scss" as *;`, // 导出全局变量和 mixin
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 举例别名
    }
  }
});
