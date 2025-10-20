import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 简化配置，避免构建问题
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
