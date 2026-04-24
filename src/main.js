import { createApp } from 'vue'
// Self-hosted Inter font subsets — weights 400/500/600/700 (woff2, ~10 KiB each)
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS globally
AOS.init({
  duration: 800,
  easing: 'slide',
  once: false,
  mirror: false
});

createApp(App).mount('#app')
