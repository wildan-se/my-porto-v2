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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ecommerceImg from "../assets/projects/ecommerce.webp";
import garmentImg from "../assets/projects/produkgarment.webp";
import myblogImg from "../assets/projects/myblog.webp";
import smarthomeImg from "../assets/projects/smarthome.webp";

gsap.registerPlugin(ScrollTrigger);

const selectedProject = ref(null);
const sectionRef = ref(null);
const currentCardIndex = ref(0);
const isAnimating = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);
const activeTab = ref("overview"); // Tab state: overview, tech, features

const openModal = (project) => {
  selectedProject.value = project;
  activeTab.value = "overview"; // Reset to overview tab
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  activeTab.value = "overview";
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    subtitle: "Complete Online Store",
    description:
      "Full-featured online store with cart, checkout, and admin dashboard.",
    longDescription:
      "Aplikasi web e-commerce full-stack yang saya kembangkan untuk menghadirkan pengalaman belanja online yang modern, cepat, dan aman, sekaligus menyediakan sistem manajemen toko yang efisien untuk admin. Pada sisi frontend, aplikasi dibangun menggunakan Vue.js 3 dengan pendekatan komponen dan reactive state, sehingga antarmuka terasa responsif serta mudah dipelihara. Pada halaman katalog produk, pengguna dapat melakukan pencarian produk secara real-time, sorting berdasarkan nama, harga, dan rating, serta beralih antara tampilan grid dan list untuk kenyamanan eksplorasi produk. UI dirancang responsif menggunakan Tailwind CSS + DaisyUI, dilengkapi loading skeleton, empty state, dan error state agar pengalaman pengguna tetap baik pada berbagai kondisi jaringan. Pada sisi backend, API dibangun menggunakan Express.js dengan arsitektur RESTful, menangani autentikasi pengguna menggunakan JWT (JSON Web Tokens) dan bcrypt untuk password hashing. Database MongoDB digunakan untuk menyimpan data produk, kategori, pengguna, dan pesanan, dengan validasi skema otomatis untuk memastikan integritas data. Fitur-fitur utama mencakup manajemen produk dan kategori, keranjang belanja dengan persistensi state, proses checkout yang aman, serta admin dashboard untuk monitoring dan pengelolaan toko. Selain itu, aplikasi ini juga dilengkapi dengan fitur pencarian produk real-time, pagination, dan validasi input yang ketat untuk mencegah error dan meningkatkan keamanan.",
    image: ecommerceImg,
    tech: ["MongoDB", "Express.js", "Vue", "Node.js"],
    features: [
      "User Authentication",
      "Shopping Cart",
      "Admin Dashboard",
      "Order Tracking",
    ],
    role: "FullStack Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-emerald-500", // Card header color
    accent: "text-emerald-500",
    category: "Web App",
  },
  {
    id: 2,
    title: "Manajemen Produk & Garment",
    subtitle: "Sistem Manajemen Inventori Fashion Berbasis Web",
    description:
      "Aplikasi web full-stack untuk mengelola data produk fashion dan toko garment dengan fitur CRUD lengkap, pencarian dinamis, dan relasi database.",
    longDescription:
      "Sistem ini dilengkapi dengan manajemen data toko garment yang terintegrasi, memungkinkan satu toko memiliki banyak produk dengan relasi database yang terstruktur. Fitur pencarian memudahkan pengguna menemukan toko berdasarkan nama atau lokasi, sementara validasi data otomatis memastikan integritas informasi yang tersimpan. Web ini cocok untuk UMKM fashion, toko garment, atau bisnis retail yang membutuhkan sistem manajemen inventori yang sederhana namun powerful.",
    image: garmentImg,
    tech: ["NodeJS", "ExpressJS", "Tailwind CSS", "Mongoose", "EJS", "MongoDB"],
    features: [
      "CRUD Lengkap",
      "Pencarian Dinamis",
      "Relasi Database",
      "Mongoose Schema Validation otomatis",
    ],
    role: "FullStack Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-emerald-500",
    accent: "text-emerald-500",
    category: "Personal",
  },
  {
    id: 3,
    title: "MyBlog - Platform Blog Pribadi",
    subtitle: "Berbagi Pengetahuan, Menginspirasi Perubahan",
    description:
      "Aplikasi ini menyediakan sistem manajemen konten lengkap dengan fitur autentikasi, rich text editor, dan admin panel yang powerful.",
    longDescription:
      "MyBlog dirancang sebagai solusi lengkap untuk content creator dan developer yang ingin membangun platform berbagi pengetahuan profesional. Aplikasi ini menerapkan prinsip-prinsip modern web development dengan arsitektur yang terpisah antara frontend dan backend (decoupled architecture), memungkinkan skalabilitas dan maintenance yang lebih mudah. Admin panel yang komprehensif memberikan kontrol penuh terhadap konten, mulai dari manajemen postingan dengan bulk actions, kategori dinamis, hingga sistem komentar interaktif. Fitur password recovery via email, rate limiting untuk keamanan, dan validasi data yang ketat menjadikan aplikasi ini production-ready dan enterprise-grade.",
    image: myblogImg,
    tech: [
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Vue Router",
      "JWT",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Sistem Autentikasi Lengkap",
      "Content Management System (CMS)",
      "Admin Panel yang Powerful",
      "Sistem Komentar Interaktif",
      "Media Management",
      "Rate Limiting",
      "XSS Prevention",
      "CSRF Protection",
      "CORS",
      "JWT",
      "Bcrypt",
    ],
    role: "FullStack Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-lime-500",
    accent: "text-lime-500",
    category: "Personal",
  },
  {
    id: 4,
    title: "Smart Home IoT Control System",
    subtitle:
      "Sistem Kontrol dan Monitoring Rumah Pintar dengan ESP32 & Web Dashboard Real-time",
    description:
      "Platform IoT berbasis web untuk mengontrol dan memonitor perangkat rumah pintar (kipas otomatis, pintu servo, sensor suhu/kelembapan, dan akses RFID) secara real-time menggunakan ESP32 dan komunikasi MQTT.",
    longDescription: `Smart Home IoT Control System adalah solusi terintegrasi untuk otomasi rumah yang menggabungkan hardware ESP32 dengan web dashboard modern. Sistem ini memungkinkan pengguna untuk:

1. Mengontrol pintu servo secara manual atau otomatis melalui kartu RFID
2. Mengelola kipas dengan mode otomatis berbasis threshold suhu atau kontrol manual
3. Memonitor kondisi lingkungan (suhu & kelembapan) secara real-time dengan grafik interaktif
4. Mengelola akses RFID dengan manajemen kartu terpusat dan log aktivitas lengkap
5. Mengkonfigurasi WiFi ESP32 dari web interface tanpa perlu upload ulang sketch
6. Export data dalam format Excel/PDF untuk pelaporan dan analisis

Sistem menggunakan protokol MQTT untuk komunikasi bidirectional yang cepat dan reliable antara ESP32 dan web dashboard, memastikan sinkronisasi status real-time dengan latency minimal.`,
    image: smarthomeImg,
    tech: [
      "ESP32",
      "Sensor DHT22",
      "MFRC522",
      "Servo SG90",
      "MQTT (Shiftr.io)",
      "LCD I2C 16x2",
      "Relay Module",
      "PHP",
      "MySQL",
      "PHPSpreadsheet",
      "TCPDF",
      "AdminLTE",
      "jQuery",
      "Chart.js",
      "Bootstrap",
      "WebSocket",
    ],
    features: [
      "Dashboard Real-time",
      "Manajemen RFID",
      "Kontrol Kipas Otomatis",
      "Kontrol Pintu Servo",
      "Log Aktivitas",
      "Export Data",
      "Konfigurasi WiFi ESP32",
      "Authentication System",
      "Persistent Configuration",
    ],
    role: "FullStack Developer & IoT Engineer",
    date: "2024",
    demo: "#",
    code: "#",
    color: "bg-emerald-500",
    accent: "text-emerald-500",
    category: "IoT",
  },
];

let scrollTriggerInstance = null;

// Navigate between cards
const nextCard = () => {
  if (isAnimating.value) return;
  if (currentCardIndex.value < projects.length - 1) {
    isAnimating.value = true;
    currentCardIndex.value++;
    setTimeout(() => {
      isAnimating.value = false;
    }, 700);
  }
};

const prevCard = () => {
  if (isAnimating.value) return;
  if (currentCardIndex.value > 0) {
    isAnimating.value = true;
    currentCardIndex.value--;
    setTimeout(() => {
      isAnimating.value = false;
    }, 700);
  }
};

// Handle touch gestures for swipe
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const swipeThreshold = 50;
  const diff = touchStartX.value - touchEndX.value;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextCard(); // Swipe left
    } else {
      prevCard(); // Swipe right
    }
  }
};

// Get card style based on position relative to current
const getCardStyle = (index) => {
  const position = index - currentCardIndex.value;

  if (position < 0) {
    // Cards that have been swiped away (slide left with rotation)
    return {
      transform: `translateX(-120%) translateY(-20px) rotateZ(-8deg) scale(0.85)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      filter: "blur(4px)",
    };
  } else if (position === 0) {
    // Current card (top) - fully visible and interactive
    return {
      transform: "translateX(0) translateY(0) rotateZ(0deg) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      filter: "blur(0px)",
    };
  } else if (position === 1) {
    // Next card (1 behind) - slightly visible
    return {
      transform: "translateX(0) translateY(16px) rotateZ(0deg) scale(0.94)",
      opacity: 0.65,
      zIndex: 9,
      pointerEvents: "none",
      filter: "blur(1px)",
    };
  } else if (position === 2) {
    // Second card (2 behind) - more subtle
    return {
      transform: "translateX(0) translateY(32px) rotateZ(0deg) scale(0.88)",
      opacity: 0.35,
      zIndex: 8,
      pointerEvents: "none",
      filter: "blur(2px)",
    };
  } else {
    // Rest of cards (hidden in stack)
    return {
      transform: "translateX(0) translateY(48px) rotateZ(0deg) scale(0.82)",
      opacity: 0.15,
      zIndex: 7,
      pointerEvents: "none",
      filter: "blur(3px)",
    };
  }
};

onMounted(() => {
  const container = document.querySelector(".horizontal-scroll-container");
  const track = document.querySelector(".horizontal-track");
  const introText = document.querySelector(".intro-text-top");

  if (track && container) {
    // Horizontal scroll animation - pin the whole container (intro + track)
    scrollTriggerInstance = gsap.to(track, {
      xPercent: (-100 * projects.length) / (projects.length + 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        end: "+=2000",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      },
    });

    // Intro text stays at top (no animation) - the pinned container keeps it visible
    // Only the track animates horizontally

    // Parallax effect on project images
    gsap.utils.toArray(".project-card-image").forEach((img) => {
      gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "left right",
          end: "right left",
          scrub: 1,
          containerAnimation: scrollTriggerInstance,
        },
      });
    });
  }
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    // Clean up
  }
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    class="pt-16 sm:pt-20 pb-16 sm:pb-20 md:py-0 transition-colors relative w-full"
  >
    <div class="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <!-- Intro Text - Mobile Only -->
      <div class="md:hidden mb-8 sm:mb-10 text-center relative">
        <p
          class="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 mb-3"
        >
          Portfolio
        </p>
        <h2
          class="text-3xl sm:text-4xl font-bold mb-3 text-zinc-800 dark:text-white"
        >
          My <span class="text-emerald-600 dark:text-emerald-400">Projects</span>
        </h2>
        <p
          class="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto"
        >
          Perjalanan melalui proyek-proyek saya.
        </p>
      </div>

      <!-- Mobile: Stacked Cards with 3D Peek (below md breakpoint) -->
      <div class="md:hidden">
        <!-- Counter Indicator -->
        <div class="flex items-center justify-center gap-3 mb-6">
          <button
            @click="prevCard"
            :disabled="currentCardIndex === 0"
            class="p-2.5 rounded-full border-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            :class="
              currentCardIndex === 0
                ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                : 'bg-white dark:bg-zinc-900 border-emerald-500 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 shadow-lg shadow-emerald-500/20'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-colors"
              :class="
                currentCardIndex === 0
                  ? 'text-zinc-400'
                  : 'text-emerald-600 dark:text-emerald-400'
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            class="px-4 py-2 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-sm font-bold min-w-[80px] text-center shadow-lg"
          >
            {{ currentCardIndex + 1 }} of {{ projects.length }}
          </div>

          <button
            @click="nextCard"
            :disabled="currentCardIndex === projects.length - 1"
            class="p-2.5 rounded-full border-2 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            :class="
              currentCardIndex === projects.length - 1
                ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                : 'bg-white dark:bg-zinc-900 border-emerald-500 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 shadow-lg shadow-emerald-500/20'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 transition-colors"
              :class="
                currentCardIndex === projects.length - 1
                  ? 'text-zinc-400'
                  : 'text-emerald-600 dark:text-emerald-400'
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- Stacked Cards Container -->
        <div
          class="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]"
          style="perspective: 1800px; min-height: 500px"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="absolute inset-0 card-transition"
            :style="getCardStyle(index)"
          >
            <div
              class="relative group cursor-pointer h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all duration-300"
              @click="openModal(project)"
            >
              <!-- Image Container -->
              <div class="h-70 sm:h-80 w-full overflow-hidden relative">
                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-transparent to-transparent z-10"
                ></div>
                <img
                  :src="project.image"
                  :alt="`Gambar Project ${project.title}`"
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <!-- Category Badge -->
                <div class="absolute top-3 right-3 z-20">
                  <span
                    :class="`px-3 py-1.5 ${project.color} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`"
                  >
                    {{ project.category }}
                  </span>
                </div>

                <!-- Tech Tags -->
                <div
                  class="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-2"
                >
                  <span
                    v-for="t in project.tech.slice(0, 3)"
                    :key="t"
                    class="px-2.5 py-1 bg-zinc-900/95 text-zinc-100 text-[11px] font-bold tracking-wide rounded border border-zinc-700 shadow-lg backdrop-blur-sm"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>

              <!-- Content Below -->
              <div class="p-5">
                <div class="flex items-center gap-2 mb-3">
                  <span
                    :class="`text-2xl font-bold font-mono ${project.accent}`"
                    >0{{ index + 1 }}</span
                  >
                  <span
                    class="flex-1 h-px bg-gradient-to-r opacity-50"
                    :class="`from-${project.accent.replace('text-', '')}`"
                  ></span>
                </div>

                <h3
                  class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 line-clamp-1"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4"
                >
                  {{ project.description }}
                </p>

                <!-- Action Buttons -->
                <div class="flex gap-2">
                  <button
                    class="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5"
                  >
                    <ExternalLink class="w-3.5 h-3.5" />
                    View Details
                  </button>
                  <button
                    class="p-2.5 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Github
                      class="w-4 h-4 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Swipe Hint -->
        <div
          v-if="currentCardIndex === 0"
          class="flex items-center justify-center gap-3 mt-6 text-xs text-zinc-500 dark:text-zinc-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span class="font-medium">Swipe atau tap panah untuk navigasi</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      <!-- Desktop: Horizontal Scroll (md and above) -->
      <div
        class="hidden md:flex md:flex-col md:justify-center horizontal-scroll-container"
        style="min-height: 100vh; padding-top: 5vh; padding-bottom: 5vh"
      >
        <!-- Intro Text - stays pinned at top while track scrolls -->
        <div
          class="intro-text-top flex items-end justify-between pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800"
        >
          <div class="flex items-center gap-6">
            <div class="flex flex-col items-center gap-2 shrink-0">
              <span
                class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400"
                >Works</span
              >
              <span class="w-px h-10 bg-zinc-300 dark:bg-zinc-700"></span>
              <span
                class="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-600"
                >0{{ projects.length }}</span
              >
            </div>
            <div>
              <h2
                class="text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white leading-none tracking-tight"
              >
                My
                <span class="text-emerald-600 dark:text-emerald-400"
                  >Projects</span
                >
              </h2>
              <p
                class="text-sm lg:text-base text-zinc-500 dark:text-zinc-400 mt-2"
              >
                Perjalanan melalui proyek saya.
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600 uppercase tracking-widest shrink-0"
          >
            <span>Scroll to explore</span>
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <!-- Track wrapper with overflow hidden so cards clip to viewport -->
        <div class="overflow-hidden">
          <div
            class="horizontal-track flex gap-8 md:gap-14 lg:gap-16 pl-4 md:pl-0 items-start pt-4 h-[62vh] w-fit"
          >
            <!-- Intro Section Inside Track -->
            <div
              class="intro-card shrink-0 w-[42vw] lg:w-[32vw] flex flex-col justify-center pr-8 relative"
            >
              <span
                class="text-7xl md:text-8xl font-bold text-zinc-200 dark:text-zinc-800/50 block -mb-8"
                >00</span
              >
              <h3
                class="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white leading-tight mb-3"
              >
                Crafting Digital
                <span class="text-emerald-600 dark:text-emerald-400"
                  >Solutions</span
                >
              </h3>
              <p
                class="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-xs"
              >
                Koleksi karya terbaik yang menggabungkan kreativitas, teknologi,
                dan passion untuk menciptakan solusi yang meaningful.
              </p>
              <div class="flex gap-4 items-center">
                <span
                  class="w-24 h-1 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                ></span>
              </div>
            </div>

            <!-- Project Cards -->
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="shrink-0 w-[38vw] lg:w-[30vw] relative group cursor-pointer"
              @click="openModal(project)"
            >
              <!-- Image Container -->
              <div
                class="w-full aspect-video overflow-hidden rounded-2xl lg:rounded-3xl relative shadow-xl bg-zinc-950 dark:bg-zinc-900 transform transition-all duration-500 group-hover:shadow-emerald-500/30 group-hover:-translate-y-1"
              >
                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-zinc-900/20 to-transparent group-hover:opacity-0 transition-opacity z-10 duration-500"
                ></div>

                <!-- Animated Shadow Glow on Hover -->
                <div
                  class="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                >
                  <div
                    class="absolute inset-0 rounded-3xl shadow-2xl shadow-emerald-500/30"
                  ></div>
                </div>

                <img
                  :src="project.image"
                  :alt="`Thumbnail Project ${project.title}`"
                  loading="lazy"
                  class="project-card-image w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                <!-- Floating Tech Tags (Tooltip style) -->
                <div
                  class="absolute top-4 left-4 right-4 z-20 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <span
                    v-for="(t, i) in project.tech"
                    :key="t"
                    :style="{ transitionDelay: `${i * 50}ms` }"
                    class="px-3 py-1.5 bg-zinc-900/95 text-zinc-100 text-xs font-bold tracking-wide rounded-md border border-zinc-700 shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>

              <!-- Content Below -->
              <div
                class="pt-3 flex flex-col gap-1 transition-all duration-500 group-hover:-translate-y-1"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span
                      :class="`text-base font-bold font-mono ${project.accent} relative`"
                    >
                      0{{ index + 1 }}
                      <span
                        class="absolute -bottom-0.5 left-0 w-full h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        :class="project.color"
                      ></span>
                    </span>
                    <span
                      class="w-8 h-px bg-zinc-300 dark:bg-zinc-700 opacity-60 group-hover:opacity-100 transition-opacity"
                    ></span>
                    <span
                      :class="`text-[10px] font-bold uppercase tracking-widest ${project.accent} opacity-60`"
                      >{{ project.category }}</span
                    >
                  </div>
                  <button
                    class="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  >
                    <ExternalLink
                      class="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                    />
                  </button>
                </div>

                <h3
                  class="text-base md:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight line-clamp-1"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors"
                >
                  {{ project.description }}
                </p>
              </div>
            </div>

            <!-- End Spacer -->
            <div class="shrink-0 w-[10vw]"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabbed Modal with Fixed Header -->
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
          class="fixed inset-0 z-[99999] flex items-center justify-center p-0 md:p-4 bg-zinc-900/70 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <!-- Modal Wrapper (relative, no overflow-hidden) -->
          <div class="relative w-full h-full md:h-[88vh] md:max-w-5xl">
            <!-- Close button: half-outside modal top-right corner -->
            <button
              @click="closeModal"
              class="hidden md:flex absolute -top-4 -right-4 cursor-pointer w-9 h-9 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700 border border-white/20 transition-all duration-200 z-[100000] shadow-xl"
            >
              <X :size="15" />
            </button>
            <!-- Modal Container -->
            <transition
              enter-active-class="transition duration-400 cubic-bezier(0.16, 1, 0.3, 1)"
              enter-from-class="opacity-0 scale-95 translate-y-8"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="selectedProject"
                class="w-full h-full md:rounded-3xl bg-zinc-950 overflow-hidden flex flex-col shadow-2xl"
                style="
                  background-image: radial-gradient(
                    rgba(255, 255, 255, 0.035) 1px,
                    transparent 1px
                  );
                  background-size: 22px 22px;
                "
              >
                <!-- ═══════════════════════════════════════════════════ -->
                <!-- DESKTOP: Bento Grid 4x4 (md+)                     -->
                <!-- ═══════════════════════════════════════════════════ -->
                <div
                  class="hidden md:grid h-full p-2.5 gap-2.5 bg-transparent"
                  style="
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(4, 1fr);
                  "
                >
                  <!-- Cell 1: Image hero col-span-3 row-span-2 -->
                  <div
                    class="bento-cell group/img relative rounded-2xl overflow-hidden bg-black"
                    style="grid-column: span 3; grid-row: span 2"
                  >
                    <img
                      :src="selectedProject.image"
                      :alt="`Detail Gambar Project ${selectedProject.title}`"
                      loading="lazy"
                      class="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-110"
                    />
                    <!-- gradient for title readability -->
                    <div
                      class="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent pointer-events-none"
                    ></div>
                    <!-- top fade -->
                    <div
                      class="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/40 to-transparent pointer-events-none"
                    ></div>

                    <!-- Category badge -->
                    <span
                      class="absolute top-3 left-3 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-full"
                      :class="selectedProject.color"
                      >{{ selectedProject.category }}</span
                    >

                    <!-- Title at bottom -->
                    <div
                      class="absolute bottom-0 left-0 right-0 px-4 pb-3.5 z-10"
                    >
                      <h2
                        class="text-xl lg:text-2xl font-black text-white leading-tight line-clamp-1"
                      >
                        {{ selectedProject.title }}
                      </h2>
                      <p class="text-xs text-white/50 line-clamp-1 mt-0.5">
                        {{ selectedProject.subtitle }}
                      </p>
                    </div>
                  </div>

                  <!-- Cell 2: Year col-span-1 row-span-1 (indigo gradient) -->
                  <div
                    class="bento-cell relative rounded-2xl overflow-hidden flex flex-col justify-between p-4"
                    style="
                      grid-column: span 1;
                      grid-row: span 1;
                      background: linear-gradient(135deg, #059669, #84cc16);
                    "
                  >
                    <!-- decorative circles -->
                    <div
                      class="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10"
                    ></div>
                    <div
                      class="absolute -left-5 -top-5 w-16 h-16 rounded-full border border-white/15"
                    ></div>
                    <p
                      class="text-[10px] font-bold uppercase tracking-widest text-emerald-200 relative z-10"
                    >
                      Year
                    </p>
                    <p
                      class="text-4xl font-black text-white leading-none relative z-10"
                    >
                      {{ selectedProject.date }}
                    </p>
                  </div>

                  <!-- Cell 3: Role col-span-1 row-span-1 -->
                  <div
                    class="bento-cell relative rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden"
                    style="
                      grid-column: span 1;
                      grid-row: span 1;
                      background: linear-gradient(
                        145deg,
                        rgba(99, 102, 241, 0.12),
                        rgba(139, 92, 246, 0.06)
                      );
                    "
                  >
                    <!-- bg decorative icon -->
                    <div
                      class="absolute -bottom-3 -right-3 opacity-[0.06] pointer-events-none select-none"
                    >
                      <Layers :size="80" class="text-white" />
                    </div>
                    <!-- subtle top-left dot -->
                    <div
                      class="absolute top-0 left-0 w-20 h-20 rounded-full bg-emerald-500/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    ></div>

                    <!-- Label -->
                    <div class="flex items-center gap-1.5 relative z-10">
                      <span class="w-1 h-3 rounded-full bg-emerald-400"></span>
                      <p
                        class="text-[10px] font-bold uppercase tracking-widest text-emerald-300/70"
                      >
                        Role
                      </p>
                    </div>

                    <!-- Role value -->
                    <div class="relative z-10">
                      <p class="text-sm font-bold text-white leading-snug">
                        {{ selectedProject.role }}
                      </p>
                      <div class="mt-2 flex items-center gap-1.5">
                        <Layers :size="11" class="text-emerald-400 shrink-0" />
                        <span
                          class="text-[10px] text-emerald-300/50 uppercase tracking-wider font-semibold"
                          >Developer</span
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Cell 4: About col-span-2 row-span-2 -->
                  <div
                    class="bento-cell relative rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col backdrop-blur-sm overflow-hidden"
                    style="grid-column: span 2; grid-row: span 2"
                  >
                    <div
                      class="absolute -bottom-4 right-2 text-9xl font-black leading-none pointer-events-none select-none"
                      style="color: rgba(255, 255, 255, 0.04)"
                    >
                      “
                    </div>
                    <p
                      class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 shrink-0 relative z-10"
                    >
                      About Project
                    </p>
                    <div
                      class="flex-1 overflow-y-auto pr-1 min-h-0 bento-scroll"
                    >
                      <p
                        class="text-xs text-justify text-zinc-300 leading-relaxed whitespace-pre-line"
                      >
                        {{ selectedProject.longDescription }}
                      </p>
                    </div>
                  </div>

                  <!-- Cell 5: Key Features col-span-1 row-span-2 -->
                  <div
                    class="bento-cell rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col backdrop-blur-sm"
                    style="grid-column: span 1; grid-row: span 2"
                  >
                    <p
                      class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 shrink-0"
                    >
                      Features
                    </p>
                    <div
                      class="flex-1 overflow-y-auto min-h-0 space-y-1.5 pr-0.5 bento-scroll"
                    >
                      <div
                        v-for="(feature, i) in selectedProject.features"
                        :key="feature"
                        class="flex items-start gap-2 p-2 rounded-lg bg-white/5 border border-white/8"
                      >
                        <span
                          class="shrink-0 w-4 h-4 flex items-center justify-center rounded-full text-[9px] font-bold"
                          :class="`${selectedProject.color} text-white`"
                          >{{ i + 1 }}</span
                        >
                        <span
                          class="text-[11px] text-zinc-300 leading-tight"
                          >{{ feature }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Cell 6: Tech Stack col-span-1 row-span-1 -->
                  <div
                    class="bento-cell rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col backdrop-blur-sm"
                    style="grid-column: span 1; grid-row: span 1"
                  >
                    <p
                      class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 shrink-0"
                    >
                      Tech Stack
                    </p>
                    <div class="flex-1 overflow-y-auto min-h-0 bento-scroll">
                      <div class="flex flex-wrap gap-1.5">
                        <span
                          v-for="tech in selectedProject.tech"
                          :key="tech"
                          class="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-white/8 text-zinc-300 border border-white/10"
                          >{{ tech }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <!-- Cell 7: Actions col-span-1 row-span-1 -->
                  <div
                    class="bento-cell rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center gap-2 backdrop-blur-sm"
                    style="grid-column: span 1; grid-row: span 1"
                  >
                    <a
                      :href="selectedProject.demo"
                      target="_blank"
                      class="w-full inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all duration-200"
                    >
                      <ExternalLink :size="12" /> Live Demo
                    </a>
                    <a
                      :href="selectedProject.code"
                      target="_blank"
                      class="w-full inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-bold text-zinc-300 bg-white/8 hover:bg-white/15 rounded-lg border border-white/15 transition-all duration-200"
                    >
                      <Github :size="12" /> Source Code
                    </a>
                  </div>
                </div>

                <!-- MOBILE: Tabbed Layout (hidden on md+)             -->
                <!-- ═══════════════════════════════════════════════════ -->
                <div class="md:hidden flex flex-col flex-1 overflow-hidden">
                  <!-- Fixed Header with Image -->
                  <div class="relative h-48 sm:h-56 shrink-0">
                    <img
                      :src="selectedProject.image"
                      :alt="`Detail Gambar Project ${selectedProject.title}`"
                      loading="lazy"
                      class="w-full h-full object-cover"
                    />
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"
                    ></div>

                    <!-- Close Button -->
                    <button
                      @click="closeModal"
                      class="absolute top-3 right-3 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-all duration-200 z-10"
                    >
                      <X :size="18" />
                    </button>

                    <!-- Header Content -->
                    <div class="absolute bottom-0 left-0 right-0 p-4">
                      <span
                        :class="`inline-block px-2.5 py-1 ${selectedProject.color} text-white rounded-md text-[10px] font-bold uppercase tracking-widest mb-2`"
                      >
                        {{ selectedProject.category }}
                      </span>
                      <h2
                        class="text-2xl font-black text-white leading-tight mb-1"
                      >
                        {{ selectedProject.title }}
                      </h2>
                      <p class="text-sm text-white/80">
                        {{ selectedProject.subtitle }}
                      </p>
                    </div>
                  </div>

                  <!-- Tab Navigation -->
                  <div
                    class="sticky top-0 z-20 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shrink-0"
                  >
                    <div class="flex">
                      <button
                        @click="activeTab = 'overview'"
                        class="flex-1 py-3 text-sm font-semibold transition-colors relative"
                        :class="
                          activeTab === 'overview'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-zinc-500 dark:text-zinc-400'
                        "
                      >
                        Overview
                        <span
                          v-if="activeTab === 'overview'"
                          class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400"
                        ></span>
                      </button>
                      <button
                        @click="activeTab = 'tech'"
                        class="flex-1 py-3 text-sm font-semibold transition-colors relative"
                        :class="
                          activeTab === 'tech'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-zinc-500 dark:text-zinc-400'
                        "
                      >
                        Tech Stack
                        <span
                          v-if="activeTab === 'tech'"
                          class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400"
                        ></span>
                      </button>
                      <button
                        @click="activeTab = 'features'"
                        class="flex-1 py-3 text-sm font-semibold transition-colors relative"
                        :class="
                          activeTab === 'features'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-zinc-500 dark:text-zinc-400'
                        "
                      >
                        Features
                        <span
                          v-if="activeTab === 'features'"
                          class="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 dark:bg-emerald-400"
                        ></span>
                      </button>
                    </div>
                  </div>

                  <!-- Tab Content Scrollable -->
                  <div class="flex-1 overflow-y-auto">
                    <transition
                      enter-active-class="transition duration-200 ease-out"
                      enter-from-class="opacity-0 translate-x-4"
                      enter-to-class="opacity-100 translate-x-0"
                      leave-active-class="transition duration-150 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                      mode="out-in"
                    >
                      <div v-if="activeTab === 'overview'" class="p-4">
                        <div class="grid grid-cols-2 gap-3 mb-5">
                          <div
                            class="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl"
                          >
                            <p
                              class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                            >
                              Year
                            </p>
                            <p
                              class="text-base font-black text-zinc-900 dark:text-white flex items-center gap-1.5"
                            >
                              <Calendar :size="12" class="text-zinc-400" />{{
                                selectedProject.date
                              }}
                            </p>
                          </div>
                          <div
                            class="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl"
                          >
                            <p
                              class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                            >
                              Role
                            </p>
                            <p
                              class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5"
                            >
                              <Layers
                                :size="12"
                                class="text-zinc-400 shrink-0"
                              />{{ selectedProject.role }}
                            </p>
                          </div>
                        </div>
                        <h3
                          class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2"
                        >
                          About Project
                        </h3>
                        <p
                          class="text-sm text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line mb-4"
                        >
                          {{ selectedProject.longDescription }}
                        </p>
                      </div>
                      <div v-else-if="activeTab === 'tech'" class="p-4">
                        <h3
                          class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3"
                        >
                          Technologies Used
                        </h3>
                        <div class="flex flex-wrap gap-2">
                          <span
                            v-for="tech in selectedProject.tech"
                            :key="tech"
                            class="px-3 py-2 text-sm font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                            >{{ tech }}</span
                          >
                        </div>
                      </div>
                      <div v-else-if="activeTab === 'features'" class="p-4">
                        <h3
                          class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3"
                        >
                          Key Features
                        </h3>
                        <div class="space-y-2">
                          <div
                            v-for="(feature, i) in selectedProject.features"
                            :key="feature"
                            class="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50"
                          >
                            <span
                              class="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                              :class="`${selectedProject.color} text-white`"
                              >{{ i + 1 }}</span
                            >
                            <span
                              class="text-sm text-zinc-700 dark:text-zinc-300"
                              >{{ feature }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>

                  <!-- Mobile Action Buttons -->
                  <div
                    class="shrink-0 p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
                  >
                    <div class="flex gap-3">
                      <a
                        :href="selectedProject.demo"
                        target="_blank"
                        class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 rounded-xl transition-all duration-200"
                      >
                        <ExternalLink :size="16" /> Live Demo
                      </a>
                      <a
                        :href="selectedProject.code"
                        target="_blank"
                        class="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 text-sm font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
                      >
                        <Github :size="16" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<style scoped>
/* Stacked cards 3D perspective */
[style*="perspective"] {
  transform-style: preserve-3d;
}

/* Enhanced card transition with smooth easing */
.card-transition {
  transition:
    transform 0.65s cubic-bezier(0.34, 1.15, 0.5, 1),
    opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.65s cubic-bezier(0.4, 0, 0.2, 1),
    z-index 0s linear 0.1s;
  transform-origin: center center;
  will-change: transform, opacity, filter;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevent flickering during animation */
.card-transition > div {
  transform: translateZ(0);
  position: relative;
}

/* Smooth hover transitions */
.group:hover .project-card-image {
  transform: scale(1.1);
}

/* Bento cell entrance animation */
@keyframes bento-in {
  from {
    opacity: 0;
    transform: scale(0.93) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.bento-cell {
  animation: bento-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}
.bento-cell:hover {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 10px 40px rgba(0, 0, 0, 0.35);
}
/* Stagger delays */
.bento-cell:nth-child(1) {
  animation-delay: 0.04s;
}
.bento-cell:nth-child(2) {
  animation-delay: 0.1s;
}
.bento-cell:nth-child(3) {
  animation-delay: 0.16s;
}
.bento-cell:nth-child(4) {
  animation-delay: 0.22s;
}
.bento-cell:nth-child(5) {
  animation-delay: 0.28s;
}
.bento-cell:nth-child(6) {
  animation-delay: 0.34s;
}
.bento-cell:nth-child(7) {
  animation-delay: 0.4s;
}

/* Slim scrollbar for dark bento cells */
.bento-scroll::-webkit-scrollbar {
  width: 3px;
}
.bento-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.bento-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 99px;
}
.bento-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>
