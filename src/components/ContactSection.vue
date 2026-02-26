<script setup>
import { ref } from "vue";
import { Send, Phone, Mail, MessageCircle, ArrowRight } from "lucide-vue-next";

const WHATSAPP_NUMBER = "6285714662611";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendToWhatsApp = () => {
  const { name, email, message } = form.value;
  const text = `*New Contact from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:*%0A${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
};

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 857 1466 2611",
    color: "text-emerald-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mwildanseptiano@gmail.com",
    color: "text-indigo-400",
  },
];
</script>

<template>
  <section id="contact" class="py-16 sm:py-24 transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <!-- Section header -->
      <div class="text-center mb-12">
        <span
          class="inline-block px-3 py-1 mb-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-indigo-100/60 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-700/50"
        >
          Contact
        </span>
        <h2
          class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3"
        >
          Mari Berkolaborasi
        </h2>
      </div>

      <!-- Main card -->
      <div
        class="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 flex flex-col md:flex-row"
      >
        <!-- Left info panel -->
        <div
          class="relative md:w-5/12 bg-slate-900 dark:bg-slate-900 p-7 sm:p-10 flex flex-col justify-between overflow-hidden"
        >
          <!-- bg decoration -->
          <div
            class="absolute -top-16 -right-16 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
          ></div>
          <div
            class="absolute -bottom-16 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
          ></div>
          <!-- grid dot pattern -->
          <div
            class="absolute inset-0 opacity-[0.04]"
            style="
              background-image: radial-gradient(
                rgba(255, 255, 255, 0.8) 1px,
                transparent 1px
              );
              background-size: 20px 20px;
            "
          ></div>

          <div class="relative z-10">
            <div
              class="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6"
            >
              <MessageCircle class="w-5 h-5 text-indigo-400" />
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3">
              Hubungi Saya
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-8 text-justify">
              Saya terbuka untuk proyek lepas dan kolaborasi. Jangan ragu untuk
              menyapa!
            </p>

            <!-- Contact items -->
            <div class="space-y-4">
              <div
                v-for="c in contacts"
                :key="c.label"
                class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0"
                >
                  <component :is="c.icon" class="w-4 h-4" :class="c.color" />
                </div>
                <div>
                  <p
                    class="text-[10px] uppercase tracking-widest text-slate-500 font-semibold"
                  >
                    {{ c.label }}
                  </p>
                  <p class="text-xs sm:text-sm text-slate-200 font-medium">
                    {{ c.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right form panel -->
        <div class="md:w-7/12 bg-white dark:bg-slate-950/80 p-7 sm:p-10">
          <form @submit.prevent="sendToWhatsApp" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                  >Nama</label
                >
                <input
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Muhammad Wildan"
                  class="w-full rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                />
              </div>
              <div>
                <label
                  class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="email@domain.com"
                  class="w-full rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            <div>
              <label
                class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5"
                >Pesan</label
              >
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="Halo, saya ingin mendiskusikan proyek..."
                class="w-full rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25 group"
            >
              <Send class="w-4 h-4" />
              Kirim via WhatsApp
              <ArrowRight
                class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </button>

            <p class="text-center text-xs text-slate-400 dark:text-slate-500">
              Pesan akan dikirim langsung ke WhatsApp saya.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
