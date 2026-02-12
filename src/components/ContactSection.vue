<script setup>
import { ref } from "vue";
import { Send, Phone } from "lucide-vue-next";

// Replace with your actual WhatsApp number (international format without +)
const WHATSAPP_NUMBER = "6285714662611";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendToWhatsApp = () => {
  const { name, email, message } = form.value;

  const text = `*New Contact from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:*%0A${message}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
};
</script>

<template>
  <section id="contact" class="py-24 transition-colors">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden md:flex"
      >
        <!-- Contact Info Side -->
        <div
          class="md:w-5/12 p-8 bg-slate-900/95 dark:bg-slate-900/80 backdrop-blur-md text-white flex flex-col justify-between relative overflow-hidden"
        >
          <!-- Decorative circle -->
          <div
            class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"
          ></div>
          <div
            class="absolute bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"
          ></div>

          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-4">Kirim Pesan</h3>
            <p class="mb-8 text-slate-300 leading-relaxed">
              Anda punya proyek yang ingin dikerjakan atau hanya ingin menyapa? Saya senang mendengar kabar dari Anda.
            </p>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="p-3 bg-white/10 rounded-full">
                  <Phone class="w-5 h-5 text-indigo-400" />
                </div>
                <span class="text-slate-200 font-medium"
                  >+62 857 1466 2611</span
                >
              </div>
              <div class="flex items-center space-x-4">
                <div class="p-3 bg-white/10 rounded-full">
                  <Send class="w-5 h-5 text-purple-400" />
                </div>
                <span class="text-slate-200 font-medium"
                  >mwildanseptiano@gmail.com</span
                >
              </div>
            </div>
          </div>
          <div class="mt-12 relative z-10">
            <p class="text-sm text-slate-400">
                Saya terbuka untuk proyek lepas dan peluang baru.
            </p>
          </div>
        </div>

        <!-- Form Side -->
        <div
          class="md:w-7/12 p-8 lg:p-12 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm"
        >
          <form @submit.prevent="sendToWhatsApp" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >Nama</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="block w-full rounded-lg border border-slate-200/50 dark:border-slate-600/50 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 transition-colors outline-none backdrop-blur-sm"
                  
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="block w-full rounded-lg border border-slate-200/50 dark:border-slate-600/50 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 transition-colors outline-none backdrop-blur-sm"
                  
                />
              </div>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >Pesan</label
              >
              <textarea
                id="message"
                rows="4"
                v-model="form.message"
                required
                class="block w-full rounded-lg border border-slate-200/50 dark:border-slate-600/50 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 transition-colors outline-none resize-none backdrop-blur-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30"
              >
                <Send class="w-4 h-4 mr-2" />
                Kirim via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
