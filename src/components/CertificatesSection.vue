<script setup>
import { ref, computed } from "vue";
import { X, ExternalLink, ZoomIn, ZoomOut, RotateCw } from "lucide-vue-next";
import imgJwd from "../sertifikat/lsp_jwd.jpeg?url";
import imgJna from "../sertifikat/lsp_jna.jpeg?url";
import imgSanken from "../sertifikat/sanken.jpeg?url";
import imgEskul from "../sertifikat/eskul.jpeg?url";
import img1 from "../sertifikat/1.jpg?url";
import img2 from "../sertifikat/2.jpg?url";
import img3 from "../sertifikat/3.jpg?url";
import img4 from "../sertifikat/4.jpg?url";
import img5 from "../sertifikat/5.jpg?url";
import img6 from "../sertifikat/6.jpg?url";
import img7 from "../sertifikat/7.jpg?url";
import img8 from "../sertifikat/8.jpg?url";
import img9 from "../sertifikat/9.jpg?url";
import img10 from "../sertifikat/10.jpg?url";
import img11 from "../sertifikat/11.jpg?url";
import img12 from "../sertifikat/12.jpg?url";

const certificates = [
  // ── Sertifikasi Nasional (BNSP) ──
  {
    id: 1,
    title: "Junior Web Developer",
    issuer: "BNSP — LSP BPPTIK",
    category: "Sertifikasi",
    year: 2023,
    issuedAt: "06 Oktober 2023",
    credentialId: "No. 62010 2513 4 0005670 2023",
    verifyUrl: "",
    description:
      "Sertifikasi kompetensi nasional bidang Pemrograman dan Pengembangan Perangkat Lunak dari Badan Nasional Sertifikasi Profesi (BNSP). Berlaku 3 tahun.",
    image: imgJwd,
  },
  {
    id: 2,
    title: "Junior Network Administrator",
    issuer: "BNSP — LSP Media Informatika",
    category: "Sertifikasi",
    year: 2023,
    issuedAt: "30 Maret 2023",
    credentialId: "No. 61100 2522 5 0004232 2023",
    verifyUrl: "",
    description:
      "Sertifikasi kompetensi nasional bidang Network and Infrastructure dari Badan Nasional Sertifikasi Profesi (BNSP). Berlaku 3 tahun.",
    image: imgJna,
  },
  // ── Industri & Sekolah ──
  {
    id: 3,
    title: "Kompetensi Keahlian TKJ — Sanken Argadwija",
    issuer: "PT. Sanken Argadwija",
    category: "Industri",
    year: 2023,
    issuedAt: "03 April 2023",
    credentialId: "No. 91/PRS-SNK/HRD/V/2023",
    verifyUrl: "",
    description:
      "Lulus Uji Kompetensi Keahlian Teknik Komputer dan Jaringan yang diselenggarakan PT. Sanken Argadwija, Tangerang. Sekolah Asal: SMK Bhakti Anindya.",
    image: imgSanken,
  },
  {
    id: 4,
    title: "Sertifikat Kompetensi MikroTik",
    issuer: "SMK Bhakti Anindya × MikroTik",
    category: "Industri",
    year: 2023,
    issuedAt: "2022/2023",
    credentialId: "NISN 0044875517",
    verifyUrl: "",
    description:
      "Sertifikat kompetensi keahlian MikroTik yang diselenggarakan SMK Bhakti Anindya. Instruktur: Agus Setiatmojo, MTCSE, CNSS, MTCINE.",
    image: imgEskul,
  },
  // ── Codepolitan — Fullstack ──
  {
    id: 5,
    title: "Fullstack Tutorial: MongoDB, Express, Vue, Node — Shopping Cart",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "02 Desember 2024",
    credentialId: "ZPMSQKX",
    verifyUrl: "https://www.codepolitan.com/c/ZPMSQKX/",
    description:
      "Membangun aplikasi shopping cart fullstack menggunakan MongoDB, Express.js, Vue.js, dan Node.js (MEVN stack).",
    image: img11,
  },
  {
    id: 6,
    title: "Membuat Project Express.js Dengan MongoDB",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "05 September 2024",
    credentialId: "LZBN4US",
    verifyUrl: "https://www.codepolitan.com/c/LZBN4US/",
    description:
      "Membangun project backend nyata menggunakan Express.js terintegrasi dengan database MongoDB.",
    image: img10,
  },
  {
    id: 7,
    title: "Menggunakan MongoDB di JavaScript",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "31 Agustus 2024",
    credentialId: "RN9DVRP",
    verifyUrl: "https://www.codepolitan.com/c/RN9DVRP/",
    description:
      "Mengoperasikan database NoSQL MongoDB dari JavaScript: koneksi, CRUD, query, dan integrasi dengan aplikasi.",
    image: img9,
  },
  {
    id: 8,
    title: "Belajar RESTful dengan Express.js",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "21 Agustus 2024",
    credentialId: "D4GP0JR",
    verifyUrl: "https://www.codepolitan.com/c/D4GP0JR/",
    description:
      "Merancang dan membangun REST API dengan Express.js, mencakup routing, middleware, dan pengelolaan response.",
    image: img8,
  },
  {
    id: 9,
    title: "Membuat Halaman Web Dinamis dengan Express.js dan EJS",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "14 Agustus 2024",
    credentialId: "OVY6TMC",
    verifyUrl: "https://www.codepolitan.com/c/OVY6TMC/",
    description:
      "Membangun halaman web server-side rendering dinamis menggunakan Express.js dan template engine EJS.",
    image: img1,
  },
  {
    id: 10,
    title: "Belajar Dasar Express.js",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "10 Agustus 2024",
    credentialId: "FS30HOU",
    verifyUrl: "https://www.codepolitan.com/c/FS30HOU/",
    description:
      "Dasar-dasar framework Express.js: setup server, routing, middleware, dan penanganan request/response HTTP.",
    image: img2,
  },
  {
    id: 11,
    title: "Belajar Dasar Node.js dan NPM",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "06 Agustus 2024",
    credentialId: "VAM2IP3",
    verifyUrl: "https://www.codepolitan.com/c/VAM2IP3/",
    description:
      "Fondasi runtime Node.js dan manajemen paket NPM: modul bawaan, event loop, dan pengelolaan dependensi.",
    image: img3,
  },
  {
    id: 12,
    title: "Belajar Cepat Vue.js",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "31 Juli 2024",
    credentialId: "H6Q0CNW",
    verifyUrl: "https://www.codepolitan.com/c/H6Q0CNW/",
    description:
      "Pengenalan cepat framework Vue.js: komponen, reaktivitas, directive, dan state management dasar.",
    image: img4,
  },
  {
    id: 13,
    title: "Belajar JavaScript",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2024,
    issuedAt: "20 Januari 2024",
    credentialId: "1XI7H5Y",
    verifyUrl: "https://www.codepolitan.com/c/1XI7H5Y/",
    description:
      "Belajar JavaScript dari dasar: variabel, tipe data, fungsi, DOM manipulation, dan pemrograman asinkron.",
    image: img5,
  },
  {
    id: 14,
    title: "Belajar Dasar CSS",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2023,
    issuedAt: "23 Desember 2023",
    credentialId: "4LYQAD8",
    verifyUrl: "https://www.codepolitan.com/c/4LYQAD8/",
    description:
      "Dasar-dasar CSS: selector, box model, Flexbox, Grid, dan teknik styling untuk tampilan web modern.",
    image: img6,
  },
  {
    id: 15,
    title: "Belajar Dasar HTML",
    issuer: "Codepolitan",
    category: "Kursus",
    year: 2023,
    issuedAt: "16 Desember 2023",
    credentialId: "ZBHANXI",
    verifyUrl: "https://www.codepolitan.com/c/ZBHANXI/",
    description:
      "Struktur dasar HTML: elemen semantik, form, tabel, dan penulisan markup yang baik dan aksesibel.",
    image: img7,
  },
  // ── Dicoding ──
  {
    id: 16,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    category: "Kursus",
    year: 2023,
    issuedAt: "11 Oktober 2023",
    credentialId: "NVP78NDD4XR0",
    verifyUrl: "https://www.dicoding.com/certificates/NVP78NDD4XR0",
    description:
      "Kursus fondasi web dari Dicoding mencakup HTML, CSS, Flexbox, dan praktik pembuatan halaman web responsif. Berlaku s.d. 11 Oktober 2026.",
    image: img12,
  },
];

const query = ref("");
const activeCategory = ref("All");
const activeYear = ref("All");
const selectedCert = ref(null);

// Image viewer state
const imgZoom = ref(1);
const imgRotate = ref(0);
const imgViewerOpen = ref(false);
const imgNaturalW = ref(0);
const imgNaturalH = ref(0);

const categories = computed(() => {
  const items = new Set(certificates.map((c) => c.category));
  return ["All", ...items];
});

const years = computed(() => {
  const items = Array.from(new Set(certificates.map((c) => String(c.year))));
  items.sort((a, b) => Number(b) - Number(a));
  return ["All", ...items];
});

const filteredCerts = computed(() => {
  const q = query.value.trim().toLowerCase();
  return certificates.filter((cert) => {
    const matchesQuery =
      !q ||
      cert.title.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q) ||
      cert.credentialId.toLowerCase().includes(q);
    const matchesCategory =
      activeCategory.value === "All" || cert.category === activeCategory.value;
    const matchesYear =
      activeYear.value === "All" || String(cert.year) === activeYear.value;
    return matchesQuery && matchesCategory && matchesYear;
  });
});

const hasFilters = computed(() => {
  return (
    query.value.trim().length > 0 ||
    activeCategory.value !== "All" ||
    activeYear.value !== "All"
  );
});

const openCert = (cert) => {
  selectedCert.value = cert;
  imgZoom.value = 1;
  imgRotate.value = 0;
  imgViewerOpen.value = false;
};

const closeCert = () => {
  selectedCert.value = null;
  imgViewerOpen.value = false;
};

const resetFilters = () => {
  query.value = "";
  activeCategory.value = "All";
  activeYear.value = "All";
};

const getInitials = (text) => {
  return text
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
};

const openImgViewer = () => {
  if (!selectedCert.value?.image) return;
  imgZoom.value = 1;
  imgRotate.value = 0;
  imgNaturalW.value = 0;
  imgNaturalH.value = 0;
  imgViewerOpen.value = true;
};

const closeImgViewer = () => {
  imgViewerOpen.value = false;
};

const zoomIn = () => {
  imgZoom.value = Math.min(imgZoom.value + 0.25, 4);
};

const zoomOut = () => {
  imgZoom.value = Math.max(imgZoom.value - 0.25, 0.5);
};

const rotateCw = () => {
  imgRotate.value = (imgRotate.value + 90) % 360;
};

const onImgLoad = (e) => {
  imgNaturalW.value = e.target.naturalWidth;
  imgNaturalH.value = e.target.naturalHeight;
};

// For the viewer we use width/height scaling so the scrollable container
// actually has room to scroll — CSS transform:scale clips at original bounds.
const imgViewerSize = computed(() => {
  if (!imgNaturalW.value) return {};
  // Fit to viewport first, then multiply by zoom
  // Base size at zoom=1 is intentionally smaller (65% of viewport) so there's room to zoom in
  const maxW = (window.innerWidth - 64) * 0.65;
  const maxH = (window.innerHeight - 140) * 0.65;
  const ratio = imgNaturalW.value / imgNaturalH.value;

  // Determine base fit size (no rotation)
  let baseW, baseH;
  if (ratio >= 1) {
    baseW = Math.min(imgNaturalW.value, maxW);
    baseH = baseW / ratio;
    if (baseH > maxH) { baseH = maxH; baseW = baseH * ratio; }
  } else {
    baseH = Math.min(imgNaturalH.value, maxH);
    baseW = baseH * ratio;
    if (baseW > maxW) { baseW = maxW; baseH = baseW / ratio; }
  }

  // Swap width/height when rotated 90/270
  const swapped = imgRotate.value === 90 || imgRotate.value === 270;
  const w = swapped ? baseH * imgZoom.value : baseW * imgZoom.value;
  const h = swapped ? baseW * imgZoom.value : baseH * imgZoom.value;
  return { width: `${Math.round(w)}px`, height: `${Math.round(h)}px` };
});

const imgTransform = computed(
  () => `rotate(${imgRotate.value}deg)`
);
</script>

<template>
  <section id="certificates" class="py-16 sm:py-24 isolate">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <!-- Header — centered on mobile -->
      <div class="mb-10 text-center sm:text-left">
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-300/70 dark:border-emerald-700/50"
        >
          Certificates
        </span>
        <h2
          class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3"
        >
          Sertifikat &amp; Pencapaian
        </h2>
      </div>

      <!-- Filters -->
      <div class="flex flex-col gap-3 mb-10">
        <div class="flex flex-wrap justify-center sm:justify-start gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            @click="activeCategory = cat"
            class="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors"
            :class="
              activeCategory === cat
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700/60 hover:border-emerald-400'
            "
          >
            {{ cat }}
          </button>
        </div>
        <div class="flex flex-wrap justify-center sm:justify-start gap-2 items-center">
          <button
            v-for="year in years"
            :key="year"
            type="button"
            @click="activeYear = year"
            class="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors"
            :class="
              activeYear === year
                ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900'
                : 'bg-white/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700/60 hover:border-emerald-400'
            "
          >
            {{ year }}
          </button>

          <button
            v-if="hasFilters"
            type="button"
            @click="resetFilters"
            class="ml-2 text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Reset
          </button>
        </div>
      </div>

      <!-- Timeline -->
      <div v-if="filteredCerts.length" class="relative">
        <div
          class="absolute left-3 md:left-1/2 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800"
        ></div>
        <div class="space-y-8">
          <div
            v-for="(cert, index) in filteredCerts"
            :key="cert.id"
            class="relative flex"
          >
            <div
              class="absolute left-3 md:left-1/2 -translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/40"
            ></div>

            <div
              class="w-full md:w-1/2 pl-10 md:pl-0"
              :class="
                index % 2 === 0
                  ? 'md:pr-12 md:ml-auto md:text-left'
                  : 'md:pl-12 md:mr-auto md:text-left'
              "
            >
              <button
                type="button"
                @click="openCert(cert)"
                class="w-full text-left rounded-2xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 p-5 hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
              >
                <div
                  class="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400"
                >
                  <span
                    class="px-2 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                  >
                    {{ cert.category }}
                  </span>
                  <span>{{ cert.issuedAt }}</span>
                </div>
                <h3
                  class="mt-2 text-lg font-semibold text-zinc-900 dark:text-white"
                >
                  {{ cert.title }}
                </h3>
                <p class="text-sm text-zinc-500 dark:text-zinc-400">
                  {{ cert.issuer }}
                </p>
                <p class="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                  ID: {{ cert.credentialId }}
                </p>
                <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                  {{ cert.description }}
                </p>
                <p class="text-xs text-emerald-600 dark:text-emerald-400 mt-4">
                  View details →
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12 text-zinc-500 dark:text-zinc-400">
        No certificates found. Try a different filter.
      </div>
    </div>

    <!-- ── Detail Modal ── -->
    <teleport to="body">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedCert"
          class="fixed inset-0 z-[99990] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center"
          @click.self="closeCert"
        >
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-6 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-6 sm:translate-y-0 sm:scale-95"
          >
            <!-- Sheet on mobile (slides up), centered card on sm+ -->
            <div
              class="relative w-full sm:max-w-2xl lg:max-w-3xl bg-white dark:bg-zinc-950 border-t sm:border border-zinc-200 dark:border-zinc-800 rounded-t-[28px] sm:rounded-[24px] shadow-2xl overflow-hidden flex flex-col"
              style="max-height: 92dvh;"
            >
              <!-- Drag pill (mobile only) -->
              <div class="flex justify-center pt-3 pb-1 sm:hidden">
                <div class="w-10 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
              </div>

              <!-- Sticky header -->
              <div class="flex items-start justify-between gap-3 px-5 sm:px-7 pt-4 sm:pt-6 pb-3 shrink-0">
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-700/60"
                    >
                      {{ selectedCert.category }}
                    </span>
                    <span class="text-xs text-zinc-400">{{ selectedCert.issuedAt }}</span>
                  </div>
                  <h3 class="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    {{ selectedCert.title }}
                  </h3>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{{ selectedCert.issuer }}</p>
                </div>
                <button
                  type="button"
                  @click="closeCert"
                  class="shrink-0 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close"
                >
                  <X class="w-4 h-4" />
                </button>
              </div>

              <div class="h-px bg-zinc-100 dark:bg-zinc-800 mx-5 sm:mx-7 shrink-0"></div>

              <!-- Scrollable body -->
              <div class="overflow-y-auto flex-1 px-5 sm:px-7 py-5 space-y-5">

                <!-- Certificate image -->
                <div
                  class="relative group w-full rounded-2xl overflow-hidden border border-zinc-200/70 dark:border-zinc-800 bg-gradient-to-br from-emerald-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950"
                  :class="selectedCert.image ? 'cursor-zoom-in' : ''"
                  @click="openImgViewer"
                >
                  <!-- With image -->
                  <template v-if="selectedCert.image">
                    <img
                      :src="selectedCert.image"
                      :alt="selectedCert.title"
                      class="w-full object-contain max-h-64 sm:max-h-80"
                    />
                    <!-- Hover overlay hint -->
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                      <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <ZoomIn class="w-3.5 h-3.5" /> Klik untuk zoom
                      </span>
                    </div>
                  </template>

                  <!-- No image placeholder -->
                  <div
                    v-else
                    class="flex flex-col items-center justify-center py-14 gap-3"
                  >
                    <span class="text-5xl font-black text-emerald-500/30 dark:text-emerald-400/20 select-none">
                      {{ getInitials(selectedCert.issuer) }}
                    </span>
                    <span class="text-xs text-zinc-400">No image available</span>
                  </div>
                </div>

                <!-- Meta grid -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div class="col-span-2 sm:col-span-1 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-3">
                    <p class="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Issuer</p>
                    <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200 break-words leading-snug">{{ selectedCert.issuer }}</p>
                  </div>
                  <div class="col-span-1 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-3">
                    <p class="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Issued</p>
                    <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200">{{ selectedCert.issuedAt }}</p>
                  </div>
                  <div class="col-span-1 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-3">
                    <p class="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Year</p>
                    <p class="text-sm font-medium text-zinc-800 dark:text-zinc-200">{{ selectedCert.year }}</p>
                  </div>
                  <div class="col-span-2 sm:col-span-1 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-3">
                    <p class="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Credential ID</p>
                    <p class="text-xs font-mono text-zinc-700 dark:text-zinc-300 break-all leading-snug">{{ selectedCert.credentialId }}</p>
                  </div>
                </div>

                <!-- Description -->
                <div>
                  <p class="text-[10px] uppercase tracking-widest text-zinc-400 mb-1.5">Deskripsi</p>
                  <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {{ selectedCert.description }}
                  </p>
                </div>
              </div>

              <!-- Sticky footer -->
              <div class="shrink-0 px-5 sm:px-7 py-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row gap-2.5">
                <a
                  v-if="selectedCert.verifyUrl"
                  :href="selectedCert.verifyUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
                >
                  Verify Certificate
                  <ExternalLink class="w-4 h-4" />
                </a>
                <button
                  type="button"
                  @click="closeCert"
                  class="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </transition>
        </div>
      </transition>

      <!-- ── Image Viewer (fullscreen zoom/rotate) ── -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="imgViewerOpen && selectedCert?.image"
          class="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex flex-col"
          @click.self="closeImgViewer"
        >
          <!-- Viewer toolbar -->
          <div class="flex items-center justify-between px-4 py-3 shrink-0">
            <span class="text-white/70 text-sm truncate max-w-[60%]">{{ selectedCert.title }}</span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                @click="zoomOut"
                :disabled="imgZoom <= 0.5"
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-white transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut class="w-4 h-4" />
              </button>
              <span class="text-white/60 text-xs w-10 text-center">{{ Math.round(imgZoom * 100) }}%</span>
              <button
                type="button"
                @click="zoomIn"
                :disabled="imgZoom >= 4"
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-white transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn class="w-4 h-4" />
              </button>
              <button
                type="button"
                @click="rotateCw"
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Rotate"
              >
                <RotateCw class="w-4 h-4" />
              </button>
              <button
                type="button"
                @click="closeImgViewer"
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-1"
                aria-label="Close viewer"
              >
                <X class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Image canvas — truly scrollable when zoomed -->
          <div
            class="flex-1 overflow-auto"
            style="scroll-behavior: smooth;"
          >
            <!-- Inner centering wrapper — min full viewport so small images stay centered -->
            <div
              class="flex items-center justify-center p-8"
              :style="{ minWidth: '100%', minHeight: '100%' }"
              @click.self="closeImgViewer"
            >
              <img
                :src="selectedCert.image"
                :alt="selectedCert.title"
                :style="{ ...imgViewerSize, transform: imgTransform, transformOrigin: 'center center' }"
                class="transition-all duration-200 select-none rounded-lg shadow-2xl shrink-0"
                draggable="false"
                @load="onImgLoad"
              />
            </div>
          </div>

          <!-- Zoom hint -->
          <div class="shrink-0 py-2.5 text-center">
            <span class="text-white/30 text-xs">Klik di luar gambar untuk tutup · scroll untuk menelusuri</span>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>
