import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/React_Basics/my-first-app/",
  plugins: [react()],
})
