import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    global: 'true',
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: ["src/setupTest.ts"],
  },
})
