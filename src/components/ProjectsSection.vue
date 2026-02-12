<script setup>
import {
  Github,
  ExternalLink,
  X,
  Calendar,
  Layers,
  Search,
} from "lucide-vue-next";
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "";
};

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    subtitle: "Complete Online Store",
    description: "Full-featured online store with cart, checkout, payment gateway, and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce solution featuring user authentication, product catalog with search and filtering, shopping cart with persistent state, Stripe payment integration, order tracking, and a full admin dashboard with analytics. Built with a focus on performance and scalability.",
    image: "https://placehold.co/1200x800/222/FFF?text=E-Commerce",
    tech: ["Vue 3", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "User Authentication",
      "Shopping Cart",
      "Payment Gateway",
      "Admin Dashboard",
      "Order Tracking",
    ],
    role: "Full Stack Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-indigo-500", // Card header color
    accent: "text-indigo-500",
    category: "Web App"
  },
  {
    id: 2,
    title: "Task App",
    subtitle: "Real-time Kanban",
    description: "Real-time collaborative task manager with drag-and-drop kanban boards.",
    longDescription:
      "A real-time collaborative task management application with intuitive drag-and-drop kanban boards, team workspaces, task assignments, due date reminders, and activity logging. Supports real-time sync across multiple users using Firebase Realtime Database.",
    image: "https://placehold.co/1200x800/222/FFF?text=Task+App",
    tech: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "Drag & Drop Kanban",
      "Real-time Sync",
      "Team Workspaces",
      "Activity Log",
      "Notifications",
    ],
    role: "Frontend Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-emerald-500",
    accent: "text-emerald-500",
    category: "Productivity"
  },
  {
    id: 3,
    title: "Portfolio v2",
    subtitle: "Personal Site",
    description: "Modern, responsive personal portfolio showcase.",
    longDescription:
      "A modern, responsive personal portfolio built with Vue 3 and Tailwind CSS. Features smooth animations, dark/light mode with curtain sweep transition, glassmorphism design, parallax effects, and a contact form integrated with WhatsApp API.",
    image: "https://placehold.co/1200x800/222/FFF?text=Portfolio",
    tech: ["Vue 3", "Vite", "Tailwind CSS"],
    features: [
      "Dark/Light Mode",
      "Glassmorphism UI",
      "Parallax Effects",
      "Responsive Design",
      "WhatsApp Integration",
    ],
    role: "Designer & Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-purple-500",
    accent: "text-purple-500",
    category: "Personal"
  },
  {
    id: 4,
    title: "EcoHome",
    subtitle: "IoT Dashboard",
    description: "IoT dashboard for monitoring smart home devices.",
    longDescription: "An intuitive dashboard for visualizing data from various IoT sensors and controlling smart devices like lights, thermostats, and locks. Features real-time graphical data visualization using Chart.js.",
    image: "https://placehold.co/1200x800/222/FFF?text=IoT+Dashboard",
    tech: ["Vue 3", "Chart.js", "WebSocket", "MQTT"],
    features: ["Real-time Data", "Device Control", "Alerts", "Historical Charts"],
    role: "Frontend Developer",
    date: "2024",
    demo: "#",
    code: "#",
    color: "bg-cyan-500",
    accent: "text-cyan-500",
    category: "IoT"
  },
   {
    id: 5,
    title: "FinTrack",
    subtitle: "Finance Manager",
    description: "Mobile-first PWA for tracking personal expenses.",
    longDescription: "A PWA for tracking finances on the go. Visualize spending habits with charts, set budgets, and export reports. Offline-first architecture ensures data is always accessible.",
    image: "https://placehold.co/1200x800/222/FFF?text=Finance",
    tech: ["PWA", "IndexedDB", "Chart.js"],
    features: ["Offline Mode", "Budgeting", "Expense Charts", "PWA Installable"],
    role: "Full Stack Developer",
    date: "2024",
    demo: "#",
    code: "#",
    color: "bg-orange-500",
    accent: "text-orange-500",
    category: "Finance"
  },
];

let scrollTriggerInstance = null;

onMounted(() => {
  const container = document.querySelector(".horizontal-scroll-container");
  const track = document.querySelector(".horizontal-track");
  
  // Calculate total width of all cards + gaps
  // We need to move the track to the left by (totalWidth - viewportWidth)
  
  if (track && container) {
      scrollTriggerInstance = gsap.to(track, {
      xPercent: -100 * (projects.length - 1) / projects.length, // Move based on number of items
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        // Adjust the 'end' value to control speed. 
        // "bottom bottom" means scroll length = container width, but we want it longer for slower scroll
        end: "+=3000", 
      }
    });

    // Fade out the intro text as we scroll
    gsap.to(".intro-text", {
      opacity: 0,
      x: -50,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=500", // Fades out relatively quickly
        scrub: 1
      }
    });
  }
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
     // Clean up
     // scrollTriggerInstance.kill(); // This might kill global ST, usually not needed in Vue unless route change
  }
});

</script>

<template>
  <section id="projects" class="py-24 transition-colors relative horizontal-scroll-container overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
      
      <!-- Intro (Static) -->
      <div class="intro-text mb-10 text-center md:text-left md:absolute md:top-24 md:left-20 z-10 pointer-events-none">
         <h2 class="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
          My <span class="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-sm">
          Perjalanan melalui proyek-proyek saya.
        </p>
      </div>

      <!-- Horizontal Track -->
      <div class="horizontal-track flex gap-8 md:gap-20 pl-4 md:pl-20 items-center h-[60vh] md:h-[70vh] w-fit">
        
        <!-- Intro Card (Optional title card within scroll) -->
        <div class="shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] h-full flex flex-col justify-center pr-10">
           <span class="text-9xl font-bold text-slate-200 dark:text-slate-800/50 block -mb-10 ml-[-20px]">00</span>
           <h3 class="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
             Membangun <br/>
             pengalaman yang <br/>
             <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">bermakna.</span>
           </h3>
           <div class="mt-8 flex gap-4">
              <span class="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
              <span class="text-sm text-slate-500 uppercase tracking-widest">Scroll to explore</span>
           </div>
        </div>

        <!-- Project Cards -->
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-[50vh] md:h-[60vh] relative group cursor-pointer"
          @click="openModal(project)"
        >
          <!-- Image Container with Parallax Effect (Simulated via scale/overflow) -->
          <div class="h-[65%] w-full overflow-hidden rounded-3xl relative card-image-container shadow-2xl">
             <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10 duration-500"></div>
             <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transform scale-105 transition-transform duration-700 group-hover:scale-110"
            />
            
            <!-- Floating Tech Tags -->
            <div class="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
               <span v-for="t in project.tech" :key="t" class="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-xs rounded-md border border-white/10">
                  {{ t }}
               </span>
            </div>
          </div>

          <!-- Content Below -->
          <div class="mt-6 pl-2 transition-transform duration-500 group-hover:-translate-y-2">
             <div class="flex items-center justify-between">
                <span :class="`text-xl md:text-2xl font-bold font-mono ${project.accent}`">0{{ index + 1 }}</span>
                <span class="w-full h-[1px] bg-slate-200 dark:bg-slate-800 mx-4"></span>
                <button class="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                   <ExternalLink class="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
             </div>
             
             <h3 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-2">
               {{ project.title }}
             </h3>
             <p class="text-lg text-slate-500 dark:text-slate-400">
               {{ project.description }}
             </p>
          </div>

        </div>

        <!-- End Spacer -->
        <div class="shrink-0 w-[10vw]"></div>

      </div>
    </div>

    <!-- Same Project Detail Modal (Reused) -->
   <teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <transition
            enter-active-class="transition duration-300 cubic-bezier(0.16, 1, 0.3, 1)"
            enter-from-class="opacity-0 scale-95 translate-y-8"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-8"
          >
             <div
              v-if="selectedProject"
              class="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-white dark:bg-slate-900 flex flex-col md:flex-row overflow-hidden"
            >
              <!-- Close Button -->
              <button
                @click="closeModal"
                class="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
              >
                <X class="w-5 h-5" />
              </button>

              <!-- Modal Image Side (40%) -->
              <div class="w-full md:w-2/5 relative h-64 md:h-auto">
                 <img
                  :src="selectedProject.image"
                  :alt="selectedProject.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
              </div>

              <!-- Modal Body Side (60%) -->
              <div class="w-full md:w-3/5 p-8 md:p-10 bg-white dark:bg-slate-900 overflow-y-auto">
                <div class="flex items-center gap-2 mb-2">
                    <span :class="`px-3 py-1 ${selectedProject.color} text-white rounded-full text-xs font-bold uppercase tracking-wide`">
                        {{ selectedProject.category }}
                    </span>
                    <span class="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar class="w-3 h-3" /> {{ selectedProject.date }}
                    </span>
                 </div>

                <h3 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
                  {{ selectedProject.title }}
                </h3>

                <p class="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                  {{ selectedProject.longDescription }}
                </p>

                 <div class="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                        <Layers class="w-4 h-4" /> Key Features
                    </h4>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        <li v-for="feature in selectedProject.features" :key="feature" class="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                            <span :class="`mt-1.5 w-1.5 h-1.5 rounded-full ${selectedProject.color} shrink-0`"></span>
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                 <!-- Tech Stack -->
                <div class="mb-8">
                  <h4 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Technologies
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="t in selectedProject.tech"
                      :key="t"
                      class="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {{ t }}
                    </span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-wrap gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a
                    :href="selectedProject.demo"
                    target="_blank"
                    class="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                  >
                    <ExternalLink class="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    :href="selectedProject.code"
                    target="_blank"
                    class="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold transition-all border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  >
                    <Github class="w-5 h-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>

  </section>
</template>
