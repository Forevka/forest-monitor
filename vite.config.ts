import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'

import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), importElementPlus({})],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') 
    }
  },
  base: './', 
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
        port: 443,
    },
  }
})
