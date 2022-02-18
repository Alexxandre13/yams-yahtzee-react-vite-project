import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      host: 'yams.regex.fr',
      port: 443,
      protocol: 'wss'
    }
  },
  plugins: [reactRefresh()]
})
