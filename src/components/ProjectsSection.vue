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

const openModal = (project) => {
  selectedProject.value = project;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const projects = [
  {
    id: 1,
    title: "E-Commerce",
    subtitle: "Complete Online Store",
    description:
      "Full-featured online store with cart, checkout, payment gateway, and admin dashboard.",
    longDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: ecommerceImg,
    tech: ["MongoDB", "Express.js", "Vue", "Node.js"],
    features: [
      "User Authentication",
      "Shopping Cart",
      "Payment Gateway",
      "Admin Dashboard",
      "Order Tracking",
    ],
    role: "FullStack Developer",
    date: "2025",
    demo: "#",
    code: "#",
    color: "bg-indigo-500", // Card header color
    accent: "text-indigo-500",
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
    color: "bg-purple-500",
    accent: "text-purple-500",
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
    color: "bg-cyan-500",
    accent: "text-cyan-500",
    category: "IoT",
  },
];

let scrollTriggerInstance = null;

onMounted(() => {
  const container = document.querySelector(".horizontal-scroll-container");
  const track = document.querySelector(".horizontal-track");

  if (track && container) {
    scrollTriggerInstance = gsap.to(track, {
      xPercent: (-100 * (projects.length - 1)) / projects.length, // Move based on number of items
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        end: "+=2000",
        anticipatePin: 1,
        invalidateOnRefresh: true, // Recalculate on resize
        fastScrollEnd: true, // Prevent sticking on fast scrolls
      },
    });

    gsap.to(".intro-text", {
      opacity: 0,
      x: -50,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=500", // Fades out relatively quickly
        scrub: 0.5,
      },
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
    class="pt-24 pb-24 transition-colors relative horizontal-scroll-container overflow-hidden"
  >
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
    >
      <!-- Intro (Static) -->
      <div
        class="intro-text mb-10 text-center md:text-left md:absolute md:top-24 md:left-20 z-10 pointer-events-none"
      >
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
        >
          My <span class="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-sm">
          Perjalanan melalui proyek-proyek saya.
        </p>
      </div>

      <!-- Horizontal Track -->
      <div
        class="horizontal-track flex gap-8 md:gap-20 pl-4 md:pl-20 items-center h-[60vh] md:h-[70vh] w-fit"
      >
        <!-- Intro Card (Optional title card within scroll) -->
        <div
          class="shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] h-full flex flex-col justify-center pr-10"
        >
          <span
            class="text-9xl font-bold text-slate-200 dark:text-slate-800/50 block -mb-10 ml-[-20px]"
            >00</span
          >
          <h3
            class="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight"
          >
            Membangun <br />
            pengalaman yang <br />
            <span
              class="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500"
              >bermakna.</span
            >
          </h3>
          <div class="mt-8 flex gap-4">
            <span
              class="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"
            ></span>
            <span class="text-sm text-slate-500 uppercase tracking-widest"
              >Scroll to explore</span
            >
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
          <div
            class="h-[65%] w-full overflow-hidden rounded-3xl relative card-image-container shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10 duration-500"
            ></div>
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />

            <!-- Floating Tech Tags -->
            <div
              class="absolute top-4 left-4 z-20 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span
                v-for="t in project.tech"
                :key="t"
                class="px-2 py-1 bg-black/40 backdrop-blur-md text-white text-xs rounded-md border border-white/10"
              >
                {{ t }}
              </span>
            </div>
          </div>

          <!-- Content Below -->
          <div
            class="mt-6 pl-2 transition-transform duration-500 group-hover:-translate-y-2"
          >
            <div class="flex items-center justify-between">
              <span
                :class="`text-xl md:text-2xl font-bold font-mono ${project.accent}`"
                >0{{ index + 1 }}</span
              >
              <span
                class="w-full h-[1px] bg-slate-200 dark:bg-slate-800 mx-4"
              ></span>
              <button
                class="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ExternalLink
                  class="w-5 h-5 text-slate-600 dark:text-slate-300"
                />
              </button>
            </div>

            <h3
              class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-2"
            >
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

    <!-- Bento Grid Modal -->
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
          class="fixed inset-0 z-[99999] flex items-center justify-center p-3 md:p-6"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>

          <!-- Bento Container -->
          <transition
            enter-active-class="transition duration-400 cubic-bezier(0.16, 1, 0.3, 1)"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="selectedProject"
              class="relative z-10 w-full max-w-5xl h-[85vh] overflow-hidden"
            >
              <!-- Close Button -->
              <button
                @click="closeModal"
                class="absolute -top-2 -right-2 md:top-0 md:right-0 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <X :size="16" />
              </button>

              <!-- Bento Grid -->
              <div
                class="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 h-full"
                style="grid-template-rows: 1fr 1fr"
              >
                <!-- Cell 1: Hero Image (spans 3 cols, 2 rows) -->
                <div
                  class="md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden relative group/img min-h-[240px] md:min-h-[360px] bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    :src="selectedProject.image"
                    :alt="selectedProject.title"
                    class="w-full h-full object-contain absolute inset-0 transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div
                    class="absolute inset-0 bg-slate-900/5 pointer-events-none"
                  ></div>

                  <!-- Title overlay on image -->
                  <div
                    class="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"
                  >
                    <span
                      :class="`inline-block px-2.5 py-1 ${selectedProject.color} text-white rounded-md text-[10px] font-bold uppercase tracking-widest mb-3`"
                    >
                      {{ selectedProject.category }}
                    </span>
                    <h2
                      class="text-2xl md:text-4xl font-black text-white leading-tight tracking-tight"
                    >
                      {{ selectedProject.title }}
                    </h2>
                    <p class="text-sm text-white/70 mt-1">
                      {{ selectedProject.subtitle }}
                    </p>
                  </div>
                </div>

                <!-- Cell 2: Meta Info (1 col) -->
                <div
                  class="md:col-span-1 rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-4"
                >
                  <div>
                    <p
                      class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1.5"
                    >
                      Year
                    </p>
                    <p
                      class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2"
                    >
                      <Calendar :size="16" class="text-slate-400" />
                      {{ selectedProject.date }}
                    </p>
                  </div>
                  <div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>
                  <div>
                    <p
                      class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1.5"
                    >
                      Role
                    </p>
                    <p
                      class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2"
                    >
                      <Layers :size="14" class="text-slate-400" />
                      {{ selectedProject.role }}
                    </p>
                  </div>
                </div>

                <!-- Cell 3: Action Buttons (1 col) -->
                <div
                  class="md:col-span-1 rounded-2xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-3"
                >
                  <a
                    :href="selectedProject.demo"
                    target="_blank"
                    class="w-full inline-flex justify-center items-center gap-2 px-4 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <ExternalLink :size="14" />
                    Live Demo
                  </a>
                  <a
                    :href="selectedProject.code"
                    target="_blank"
                    class="w-full inline-flex justify-center items-center gap-2 px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700"
                  >
                    <Github :size="14" />
                    Source Code
                  </a>
                </div>

                <!-- Cell 4: Description (spans 2 cols) -->
                <div
                  class="md:col-span-2 rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
                >
                  <h4
                    class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-3 shrink-0"
                  >
                    About
                  </h4>
                  <p
                    class="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed overflow-y-auto text-justify scrollbar-thin pr-2"
                  >
                    {{ selectedProject.longDescription }}
                  </p>
                </div>

                <!-- Cell 5: Tech Stack (1 col) -->
                <div
                  class="md:col-span-1 rounded-2xl bg-white dark:bg-slate-900 p-5 md:p-6 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
                >
                  <h4
                    class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-4 shrink-0"
                  >
                    Tech Stack
                  </h4>
                  <div
                    class="flex flex-wrap gap-2 overflow-y-auto scrollbar-thin pr-1"
                  >
                    <span
                      v-for="tech in selectedProject.tech"
                      :key="tech"
                      class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Cell 6: Features (1 col) -->
                <div
                  class="md:col-span-1 rounded-2xl bg-white dark:bg-slate-900 p-5 md:p-6 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
                >
                  <h4
                    class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-4 shrink-0"
                  >
                    Features
                  </h4>
                  <div class="space-y-2.5 overflow-y-auto scrollbar-thin pr-1">
                    <div
                      v-for="(feature, i) in selectedProject.features"
                      :key="feature"
                      class="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <span
                        class="text-[10px] font-mono font-bold shrink-0"
                        :class="selectedProject.accent"
                        >0{{ i + 1 }}</span
                      >
                      {{ feature }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </section>
</template>
