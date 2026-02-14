<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';

const cardRef = ref(null);
const containerRef = ref(null); 
const typewriterTarget = ref(null);

// smooth tilt state
const targetIdx = ref({ x: 0, y: 0 }); 
const currentIdx = ref({ x: 0, y: 0 });
let animationFrameId = null;
let bounds = null;

const fullCodeLines = [
  { line: 1, content: `<span class="text-pink-500">const</span> <span class="text-blue-400">bio</span> = {` },
  { line: 2, content: `&nbsp;&nbsp;<span class="text-sky-300">name</span>: <span class="text-green-400">'Muhammad Wildan Septiano'</span>,` },
  { line: 3, content: `&nbsp;&nbsp;<span class="text-sky-300">role</span>: <span class="text-green-400">'Student'</span>,` },
  { line: 4, content: `&nbsp;&nbsp;<span class="text-sky-300">university</span>: <span class="text-green-400">'Universitas Raharja'</span>,` },
  { line: 5, content: `&nbsp;&nbsp;<span class="text-sky-300">major</span>: <span class="text-green-400">'Computer Systems'</span>,` },
  { line: 6, content: `&nbsp;&nbsp;<span class="text-sky-300">focus</span>: [` },
  { line: 7, content: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">'Web Development'</span>,` }, 
  { line: 8, content: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">'Network Engineering'</span>` },
  { line: 9, content: `&nbsp;&nbsp;],` },
  { line: 10, content: `&nbsp;&nbsp;<span class="text-sky-300">status</span>: <span class="text-green-400">'Open to opportunities'</span>` },
  { line: 11, content: `};` },
];

onMounted(() => {
  const typewriter = new Typewriter(typewriterTarget.value, {
    loop: false,
    delay: 40,
    cursor: '▌', // Block cursor
  });

  let htmlContent = '';
  fullCodeLines.forEach((line, index) => {
    htmlContent += line.content;
    if (index < fullCodeLines.length - 1) {
      htmlContent += '<br/>';
    }
  });

  typewriter
    .typeString(htmlContent)
    .start();
    
  loop();
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

// Physics Loop
const loop = () => {
  if (!cardRef.value) return;

  // Smoothly interpolate towards target
  currentIdx.value.x = lerp(currentIdx.value.x, targetIdx.value.x, 0.1);
  currentIdx.value.y = lerp(currentIdx.value.y, targetIdx.value.y, 0.1);

  // Apply Transform directly to DOM
  const rotateY = (currentIdx.value.x * 12).toFixed(2);
  const rotateX = (currentIdx.value.y * -12).toFixed(2);

  // Check if active to avoid unnecessary string construction when idle
  if (Math.abs(currentIdx.value.x) > 0.001 || Math.abs(currentIdx.value.y) > 0.001) {
    // Note: Perspective is now on the container, so we just rotate
    cardRef.value.style.transform = `scale3d(1.02, 1.02, 1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  } else {
    cardRef.value.style.transform = 'scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)';
  }

  animationFrameId = requestAnimationFrame(loop);
};

// Event Listeners attached to CONTAINER (Stable Hitbox)
const handleMouseEnter = () => {
  if (containerRef.value && cardRef.value) {
    bounds = containerRef.value.getBoundingClientRect();
    cardRef.value.style.transition = 'none'; // Disable transition for instant JS control
  }
};

const handleMouseMove = (e) => {
  if (!bounds) return;
  
  const x = e.clientX - bounds.left;
  const y = e.clientY - bounds.top;
  
  const centerX = bounds.width / 2;
  const centerY = bounds.height / 2;
  
  targetIdx.value.x = (x - centerX) / centerX;
  targetIdx.value.y = (y - centerY) / centerY;
};

const handleMouseLeave = () => {
  targetIdx.value.x = 0;
  targetIdx.value.y = 0;
  bounds = null;
  if (cardRef.value) {
    cardRef.value.style.transition = 'transform 0.5s ease-out'; // Re-enable for smooth exit
  }
};
</script>

<template>
  <section id="about" class="py-24 transition-colors" data-aos="fade-up-right">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
          <span class="text-slate-400 font-mono"></span>About <span class="text-indigo-600 dark:text-indigo-400">Me</span><span class="text-slate-400 font-mono"></span>
        </h2>
        <div class="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <!-- Code Editor Window Container (Stable Hitbox) -->
      <div 
        ref="containerRef"
        class="max-w-4xl mx-auto" 
        style="perspective: 1000px;"
        @mouseenter="handleMouseEnter"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <div 
          ref="cardRef"
          class="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-slate-700 will-change-transform"
        >
          
          <!-- Window Chrome / Title Bar -->
          <div class="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-black">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div class="text-slate-400 text-xs font-mono select-none">src/components/aboutMe.js</div>
            <div class="w-16"></div> <!-- Spacer for centering -->
          </div>

          <!-- Editor Area -->
          <div class="p-6 md:p-8 overflow-x-auto min-h-[350px]">
            <div class="font-mono text-sm md:text-base leading-relaxed flex">
              
              <!-- Static Line Numbers -->
              <div class="w-8 md:w-12 text-slate-600 text-right pr-4 select-none shrink-0 border-r border-slate-800 mr-4 h-full">
                <div v-for="n in 11" :key="n">{{ n }}</div>
              </div>

              <!-- Typewriter Content -->
              <div class="text-slate-300 relative w-full">
                <div ref="typewriterTarget" class="whitespace-pre-wrap"></div>
              </div>

            </div>
          </div>

          <!-- Bottom Status Bar -->
          <div class="bg-[#007acc] px-4 py-1 flex items-center justify-between text-[10px] md:text-xs text-white font-mono">
            <div class="flex items-center space-x-4">
              <span class="flex items-center gap-1"><span class="i-git-branch">master*</span></span>
              <span>0 errors, 0 warnings</span>
            </div>
            <div class="flex items-center space-x-4">
              <span>Ln {{ 11 }}, Col 1</span>
              <span>UTF-8</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style>
/* Custom Cursor Style for Typewriter */
.Typewriter__cursor {
  color: #6366f1; /* Indigo-500 */
  font-weight: bold;
}
</style>
