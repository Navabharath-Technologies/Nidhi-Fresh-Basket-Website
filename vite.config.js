import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { transform } from 'esbuild'

// Custom pre-plugin: transforms JSX in .js files BEFORE Vite's import-analysis
function jsxInJsPlugin() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('node_modules')) return null
      if (!id.match(/\.js$/)) return null
      const result = await transform(code, {
        loader: 'jsx',
        jsx: 'automatic',
        jsxImportSource: 'react',
      })
      return { code: result.code, map: result.map }
    },
  }
}

export default defineConfig({
  plugins: [
    jsxInJsPlugin(),
    react(),
  ],
  // Tell esbuild (used during dep optimization) to treat .js files as JSX
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 5173,
  },
})
