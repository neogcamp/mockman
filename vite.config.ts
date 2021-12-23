import reactRefresh from '@vitejs/plugin-react-refresh'
const {resolve} = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      name: 'mockman',
      fileName: (format) => `mockman.${format}.ts`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
