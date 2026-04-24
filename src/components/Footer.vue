<script setup>
import { Github, Linkedin, Instagram } from "lucide-vue-next";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/wildan-se", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammadwildanseptiano/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/wlse._/",
    label: "Instagram",
  },
];
</script>

<template>
  <footer
    class="relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-500 overflow-hidden"
  >
    <!-- subtle top gradient accent -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent"
    ></div>

    <div class="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <!-- Top row -->
      <div
        class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-10"
      >
        <!-- Brand + tagline -->
        <div class="flex flex-col gap-3 max-w-xs">
          <span
            class="text-xl font-bold text-zinc-900 dark:text-white tracking-tight"
          >
            &lt;<span class="text-emerald-700 dark:text-emerald-400">WLSE</span>/&gt;
          </span>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Sebaik-baik nya manusia adalah
            <span class="text-zinc-700 dark:text-zinc-200 font-medium"
              >yang paling bermanfaat bagi manusia lainnya.</span
            >
          </p>
        </div>

        <!-- Nav links -->
        <nav class="flex flex-col gap-2">
          <p
            class="text-[11px] font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1"
          >
            Navigation
          </p>
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:text-emerald-700 dark:focus:text-emerald-400"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Socials -->
        <div class="flex flex-col gap-2">
          <p
            class="text-[11px] font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-1"
          >
            Find Me
          </p>
          <div class="flex gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :aria-label="`${s.label} (tab baru)`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <component :is="s.icon" class="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-zinc-200 dark:bg-zinc-800"></div>

      <!-- Bottom row -->
      <div
        class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <p class="text-xs text-zinc-600 dark:text-zinc-400">
          &copy; {{ new Date().getFullYear() }} Muhammad Wildan Septiano. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
