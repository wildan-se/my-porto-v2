import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vue runtime — always needed, small and cacheable separately
          if (id.includes('node_modules/vue/') || id.includes('node_modules/@vue/')) {
            return 'vue';
          }
          // lucide icons — large icon set, used only in interactive sections
          if (id.includes('node_modules/lucide-vue-next')) {
            return 'lucide';
          }
          // @vueuse utilities
          if (id.includes('node_modules/@vueuse')) {
            return 'vueuse';
          }
        },
      },
    },
    assetsInlineLimit: 4096,
  },
})
