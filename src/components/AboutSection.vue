<script setup>
import { Vue3Marquee } from "vue3-marquee";

import bootstrapImg from "../assets/bootstrap.webp";
import cssImg from "../assets/css.webp";
import expressImg from "../assets/express.webp";
import htmlImg from "../assets/html.webp";
import iotImg from "../assets/iot.webp";
import jsImg from "../assets/js.webp";
import mikrotikImg from "../assets/mikrotik.webp";
import mongodbImg from "../assets/mongodb.webp";
import mysqlImg from "../assets/mysql.webp";
import nodejsImg from "../assets/nodejs.webp";
import phpImg from "../assets/php.webp";
import tailwindImg from "../assets/tailwind.webp";
import vueImg from "../assets/vue.webp";

const skills = [
  { name: "HTML", image: htmlImg },
  { name: "CSS", image: cssImg },
  { name: "JavaScript", image: jsImg },
  { name: "Vue.js", image: vueImg },
  { name: "Node.js", image: nodejsImg },
  { name: "Express", image: expressImg },
  { name: "PHP", image: phpImg },
  { name: "Bootstrap", image: bootstrapImg },
  { name: "Tailwind", image: tailwindImg },
  { name: "MongoDB", image: mongodbImg },
  { name: "MySQL", image: mysqlImg },
  { name: "IoT", image: iotImg },
  { name: "Mikrotik", image: mikrotikImg },
];
</script>

<template>
  <section id="about" class="py-24 transition-colors">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:space-x-12 lg:space-x-24"
      >
        <!-- Photo -->
        <div
          class="w-full md:w-1/3 mb-10 md:mb-0 transform hover:scale-105 transition-transform duration-500"
        >
          <div
            class="aspect-square bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl overflow-hidden shadow-2xl skew-y-3 border-4 border-white dark:border-slate-700/50"
          >
            <img
              src="https://placehold.co/400x400/222/FFF?text=Me"
              alt="Profile"
              class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="w-full md:w-2/3">
          <h2
            class="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white"
          >
            About <span class="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-justify"
          >
            Saya seorang mahasiswa sistem komputer yang sedang menempuh
            pendidikan di Universitas Raharja dengan minat dan dedikasi yang
            kuat terhadap pemrograman, khususnya pengembangan web dan sedikit
            mengetahui tentang teknik jaringan. Dengan landasan akademis yang
            kuat dan dorongan untuk belajar lebih banyak, saya berusaha untuk
            meningkatkan keterampilan teknis dan profesional saya untuk
            memajukan karir saya di bidang IT.
          </p>

          
        </div>
      </div>
    </div>
  </section>
</template>
