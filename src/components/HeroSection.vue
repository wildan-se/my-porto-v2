<script setup>
import {
  Github,
  Linkedin,
  ArrowDown,
  FileText,
  Instagram,
  Triangle,
  Hexagon,
} from "lucide-vue-next";
import { useDark } from "@vueuse/core";
import { ref, onMounted, onUnmounted } from "vue";

const isDark = useDark();

// Refs for direct DOM manipulation (Performance Optimization)
// Bypassing Vue's reactivity system for 60fps animations prevents overhead
const heroContainerTarget = ref(null);
const portraitTarget = ref(null);
const layer1Target = ref(null);
const layer2Target = ref(null);
const layer3Target = ref(null);
const blob1Target = ref(null);
const blob2Target = ref(null);

// State tracking variables (plain JS objects are faster than reactive refs for animation loops)
const mouse = { x: 0, y: 0 };
const smoothMouse = { x: 0, y: 0 };
const scrollState = { current: 0, smooth: 0 };

let mouseRaf = null;

// LERP (Linear Interpolation) Formula with higher precision
// Formula: start + (end - start) * interpolation_factor
const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

// Mouse move handler - utilizing window dimensions for normalization
const onMouseMove = (e) => {
  // Normalize coordinates to -1 to 1 range
  // x: -1 (left) to 1 (right)
  // y: -1 (top) to 1 (bottom)
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
};

const onScroll = () => {
  scrollState.current = window.scrollY;
};

// Main Animation Loop
const animate = () => {
  // 1. Smooth out values using LERP
  // 0.08 factor = slightly heavier feel, less jitter
  smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.08);
  smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.08);
  
  // 0.1 factor for scroll = responsive but smooth
  scrollState.smooth = lerp(scrollState.smooth, scrollState.current, 0.1);

  // 2. Calculate values for transforms (Math pre-calc)
  const scrollY = scrollState.smooth;
  const mouseX = smoothMouse.x;
  const mouseY = smoothMouse.y;

  // --- Hero Container Fade & Parallax ---
  if (heroContainerTarget.value) {
    const progress = Math.min(scrollY / window.innerHeight, 1);
    const opacity = 1 - progress * 1.5;
    const scale = 1 - progress * 0.1;
    const yOffset = scrollY * 0.5;
    
    // Only apply if visible to save resources
    if (opacity > 0) {
      heroContainerTarget.value.style.opacity = opacity.toFixed(3);
      heroContainerTarget.value.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
    }
  }

  // --- 3D Portrait Tilt ---
  if (portraitTarget.value) {
    const rotateX = mouseY * -10;
    const rotateY = mouseX * 10;
    portraitTarget.value.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  }

  // --- Layer Parallax (Geometric Shapes) ---
  // Using translate3d for hardware acceleration
  if (layer1Target.value) {
    // Back layer: moves slow (depth 20px)
    const x = mouseX * -20;
    const y = mouseY * -20 + scrollY * 0.1;
    layer1Target.value.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 20px)`;
  }

  if (layer2Target.value) {
    // Middle layer: moves medium (depth 40px)
    const x = mouseX * -40;
    const y = mouseY * -40 + scrollY * 0.2;
    layer2Target.value.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 40px)`;
  }

  if (layer3Target.value) {
    // Front layer (Image): moves fast but stable (depth 60px)
    const x = mouseX * -60;
    const y = mouseY * -60 + scrollY * 0.05;
    layer3Target.value.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 60px)`;
  }

  // --- Background Blobs ---
  if (blob1Target.value) {
    const x = mouseX * -40;
    const y = mouseY * -30 + scrollY * 0.08;
    blob1Target.value.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  }

  if (blob2Target.value) {
    const x = mouseX * 25;
    const y = mouseY * 20 + scrollY * 0.12;
    blob2Target.value.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  }

  mouseRaf = requestAnimationFrame(animate);
};

onMounted(() => {
  scrollState.current = window.scrollY;
  scrollState.smooth = window.scrollY;
  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  mouseRaf = requestAnimationFrame(animate);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("scroll", onScroll);
  cancelAnimationFrame(mouseRaf);
});

const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden p-6 pt-24 md:pt-0">
    
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
      <div ref="blob1Target" class="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] animate-blob will-change-transform"></div>
      <div ref="blob2Target" class="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000 will-change-transform"></div>
    </div>

    <div ref="heroContainerTarget" class="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full will-change-transform origin-center">
      
      <!-- 3D Geometric Portrait (Left Side) -->
      <div class="relative flex justify-center md:justify-start order-1 md:order-1 h-[400px] perspective-1000 group cursor-pointer">
        
        <!-- Main Portrait Wrapper -->
        <div ref="portraitTarget" class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transform-style-3d transition-transform duration-75 ease-out will-change-transform">
          
          <!-- Back Layer: Large Hexagon Outline -->
          <div ref="layer1Target" class="absolute inset-0 border-2 border-indigo-500/30 rounded-3xl will-change-transform">
             <div class="w-full h-full transform rotate-12 scale-110"></div>
          </div>
          
           <!-- Middle Layer: Solid Shape -->
           <div ref="layer2Target" class="absolute inset-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl opacity-20 will-change-transform">
              <div class="w-full h-full transform -rotate-6"></div>
           </div>

          <!-- Front Layer: Image Mask -->
          <div ref="layer3Target" class="absolute inset-0 z-20 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-800 transform-style-3d bg-slate-200 will-change-transform">
             <img src="/src/assets/myfoto.webp" alt="Profile" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
             <!-- Overlay Gradient -->
             <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
          </div>

          <!-- Floating Elements (Attached to layers for simple parallax) -->
          <div class="absolute -top-8 -right-8 z-30 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-float">
             <Hexagon class="w-8 h-8 text-indigo-500 fill-indigo-500/20" />
          </div>
          <div class="absolute -bottom-4 -left-8 z-30 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-float animation-delay-2000">
             <Triangle class="w-6 h-6 text-purple-500 fill-purple-500/20 rotate-180" />
          </div>

        </div>

      </div>


      <!-- Text Side (Right) -->
      <div class="text-center md:text-left order-2 md:order-2 z-10">
        
        <div class="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-200/50 dark:border-indigo-800/50 backdrop-blur-sm">
           <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-300 tracking-wide uppercase">
            Mau nya Fullstack Developer
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-800 dark:text-white leading-tight">
          Muhammad 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Wildan Septiano</span>
        </h1>

        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
          "Web programming mah gampang, kecuali kalau browser bilang:" ‘Error 404, otak not found!’
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/public/cv_muhammad_wildan_septiano.pdf"
            target="_blank"
            class="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto dark:bg-indigo-600 dark:hover:bg-indigo-500 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
          >
            <FileText class="w-5 h-5" />
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            class="px-8 py-3.5 glass-card text-slate-700 rounded-full font-medium hover:bg-white/80 transition-colors w-full sm:w-auto dark:text-slate-300 dark:hover:bg-slate-800/80"
          >
            Contact Me
          </a>
        </div>

        <div class="mt-12 flex items-center justify-center md:justify-start space-x-6">
           <a href="https://github.com/wildan-se" target="_blank" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
            <Github class="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/muhammadwildanseptiano/" target="_blank" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
            <Linkedin class="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/wlse._/" target="_blank" class="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
            <Instagram class="w-6 h-6" />
          </a>
        </div>
      </div>

    </div>
    
     <!-- Scroll Down Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" @click="scrollToAbout">
      <ArrowDown class="w-6 h-6 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300" />
    </div>

  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.animate-blob {
  animation: blob 10s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
</style>
