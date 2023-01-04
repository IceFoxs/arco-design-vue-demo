import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
     less: {
       modifyVars: {
        //  'arcoblue-6': '#f85959',
       },
       javascriptEnabled: true,
     }
    }
  },
  plugins: [vue()],
  
})
