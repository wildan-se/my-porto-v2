<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', image: new URL('../assets/html.webp', import.meta.url).href },
  { name: 'CSS', image: new URL('../assets/css.webp', import.meta.url).href },
  { name: 'JavaScript', image: new URL('../assets/js.webp', import.meta.url).href },
  { name: 'Vue.js', image: new URL('../assets/vue.webp', import.meta.url).href },
  { name: 'Tailwind CSS', image: new URL('../assets/tailwind.webp', import.meta.url).href },
  { name: 'Node.js', image: new URL('../assets/nodejs.webp', import.meta.url).href },
  { name: 'PHP', image: new URL('../assets/php.webp', import.meta.url).href },
  { name: 'Bootstrap', image: new URL('../assets/bootstrap.webp', import.meta.url).href },
  { name: 'Express', image: new URL('../assets/express.webp', import.meta.url).href },
  { name: 'IoT', image: new URL('../assets/iot.webp', import.meta.url).href },
  { name: 'Mikrotik', image: new URL('../assets/mikrotik.webp', import.meta.url).href },
  { name: 'MongoDB', image: new URL('../assets/mongodb.webp', import.meta.url).href },
  { name: 'MySQL', image: new URL('../assets/mysql.webp', import.meta.url).href },
];

onMounted(() => {
  const cards = document.querySelectorAll(".client-card");
  const totalCards = cards.length;
  // Calculate angle: 360 degrees circle / number of items
  const angle = 360 / totalCards;

  cards.forEach((card, index) => {
    // Set variable CSS --index for dynamic rotation in CSS
    card.style.setProperty("--index", index);
    card.style.setProperty("--angle", `${angle}deg`);
  });

  // Entrance Animation: Fly in from scattered positions
  gsap.from(".client-card", {
    y: () => Math.random() * 1000 - 500, // Random vertical start
    x: () => Math.random() * 1000 - 500, // Random horizontal start
    z: () => Math.random() * 1000 - 500, // Random depth start
    rotation: () => Math.random() * 90 - 45, // Random wobble
    opacity: 0,
    duration: 2.5,
    stagger: 0.1,
    ease: "elastic.out(1, 0.75)", // Bouncy fly-in effect
    scrollTrigger: {
      trigger: ".client-gallery",
      start: "top 70%",
    },
  });
});
</script>

<template>
  <section id="skills" class="py-24 transition-colors">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Header Section -->
      <div class="text-center mb-20 relative z-20">
        <h2 class="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
          Skills & <span class="text-indigo-600 dark:text-indigo-400">Tools</span>
        </h2>

       
      </div>

      <!-- 3D Rotating Gallery Container -->
      <div class="flex client-gallery perspective-1000 relative h-[500px] items-center justify-center">
        <!-- Background decorative blob matching other sections -->
        <div class="absolute w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none"></div>

        <div class="absolute w-full h-full mt-10 gallery-container transform-style-3d flex justify-center">
          <!-- Gallery Track (Rotates) -->
          <div class="absolute flex items-center justify-center w-full h-full gallery-track transform-style-3d">
            
            <div v-for="skill in skills" :key="skill.name" class="client-card group">
              <!-- Wrapper for individual floating animation -->
              <div class="card-floater">
                <div class="relative p-6 w-38 h-28 flex items-center justify-center
                            glass-card rounded-2xl
                            shadow-lg dark:shadow-slate-900/30
                            cursor-pointer
                            hover:scale-110 hover:shadow-xl transition-all duration-300">
                  
                  <img :src="skill.image" :alt="skill.name" class="object-contain w-14 h-14 transition-all duration-500 filter grayscale group-hover:grayscale-0" />
                  
                  <!-- Floating Tooltip -->
                  <span class="text-xs font-bold text-indigo-600 dark:text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 bg-white/90 dark:bg-slate-800/90 px-3 py-1 rounded-full shadow-md backdrop-blur-sm whitespace-nowrap border border-indigo-100 dark:border-indigo-900">
                      {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 3D Space */
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}

/* Gallery Rotation */
.gallery-track {
  animation: rotate 40s linear infinite;
}
/* Only pause rotation when a card is hovered - requires distinct hover on children */
.gallery-track:has(.client-card:hover) {
  animation-play-state: paused;
}

@keyframes rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(-360deg); }
}

/* Card Positioning */
.client-card {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  /* Rotate around Y axis, then push out to radius */
  transform: rotateY(calc(var(--index) * var(--angle))) translateZ(450px);
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

/* Individual Floating Animation */
.card-floater {
  animation: float 6s ease-in-out infinite;
  /* Random delay based on index to make them look organic */
  animation-delay: calc(var(--index) * -0.5s);
}

/* Pause floating when card is hovered for stability */
.card-floater:hover {
  animation-play-state: paused;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(0deg); }
  50% { transform: translateY(-15px) rotateX(5deg); }
}
</style>
