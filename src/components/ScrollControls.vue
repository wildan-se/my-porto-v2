<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { ArrowUp, ArrowDown } from 'lucide-vue-next';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const showScrollTop = ref(false);
const showScrollBottom = ref(false);

const checkScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show Top Arrow if scrolled down a bit
    showScrollTop.value = scrollY > 300;

    // Show Bottom Arrow if not at the very bottom
    showScrollBottom.value = (windowHeight + scrollY) < (documentHeight - 100);
};

const scrollToTop = () => {
    gsap.to(window, { duration: 0.8, scrollTo: 0, ease: "power3.inOut" });
};

const scrollToBottom = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    gsap.to(window, { duration: 0.8, scrollTo: maxScroll, ease: "power3.inOut" });
};

onMounted(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
    <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <!-- Scroll to Top -->
        <transition 
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-4"
        >
            <button 
                v-if="showScrollTop"
                @click="scrollToTop"
                class="p-3 bg-white/80 cursor-pointer dark:bg-zinc-800/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg hover:shadow-emerald-500/30 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Scroll to top"
            >
                <ArrowUp class="w-5 h-5 group-hover:animate-bounce" />
            </button>
        </transition>

        <!-- Scroll to Bottom -->
        <transition 
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <button 
                v-if="showScrollBottom"
                @click="scrollToBottom"
                class="p-3 bg-white/80 cursor-pointer dark:bg-zinc-800/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg hover:shadow-emerald-500/30 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:translate-y-1 transition-all duration-300 group"
                 aria-label="Scroll to bottom"
            >
                <ArrowDown class="w-5 h-5 group-hover:animate-bounce" />
            </button>
        </transition>
    </div>
</template>
