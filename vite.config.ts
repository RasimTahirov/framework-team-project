import { defineConfig } from "vite";
import dotenv from 'dotenv'
import react from "@vitejs/plugin-react-swc";
import path from 'path'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    host: true
  },
  define: {
    'process.env.API_URL': JSON.stringify(process.env.API_URL)
  }
});
