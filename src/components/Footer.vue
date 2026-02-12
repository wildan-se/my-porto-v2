<script setup>
import { Github, Linkedin, Instagram, Mail } from "lucide-vue-next";
</script>

<template>
  <footer
    class="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500"
  >
    <div class="container mx-auto px-4 text-center">
      <div class="mb-6">
        <span
          class="text-2xl font-bold text-slate-800 dark:text-white tracking-tight"
          >&lt;WLSE/&gt;</span
        >
      </div>
      <p class="mb-8 max-w-md mx-auto text-slate-500 dark:text-slate-400">
        Sebaik-baik nya manusia adalah<br>
        <span class="text-slate-800 dark:text-white font-bold"
          >yang paling bermanfaat bagi manusia lainnya.</span
        >
      </p>
      <div class="flex justify-center space-x-8 mb-8">
        <a
          href="https://github.com/wildan-se" target="_blank"
          class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110"
        >
          <Github class="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadwildanseptiano/" target="_blank"
          class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/wlse._/" target="_blank"
          class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors transform hover:scale-110"
        >
          <Instagram class="w-5 h-5" />
        </a>
      </div>
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800">
        <p class="text-sm text-slate-500 dark:text-slate-500">
          &copy; {{ new Date().getFullYear() }} Muhammad Wildan. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
