import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 'uni-crazy-router': path.resolve(__dirname, 'src/uni-crazy-router')
    }
  },
  plugins: [
    uni(),
  ],
})
