import { createApp } from 'vue'
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
