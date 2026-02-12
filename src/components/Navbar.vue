<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Moon, Sun, Menu, X } from "lucide-vue-next";
import { ref, nextTick, onMounted, onUnmounted } from "vue";

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
const isMenuOpen = ref(false);
const isAnimating = ref(false);

// Instant scroll detection with requestAnimationFrame
const isScrolled = ref(false);
let ticking = false;

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  isScrolled.value = window.scrollY > 20;
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

// Smooth scroll for anchor links
const scrollTo = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  isMenuOpen.value = false;
};

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Curtain Sweep Animation for Dark Mode Toggle
const toggleTheme = async () => {
  if (isAnimating.value) return;
  isAnimating.value = true;

  // Determine the curtain color based on where we're going
  const goingDark = !isDark.value;
  const curtainColor = goingDark ? "#0f172a" : "#f8fafc";

  // Create curtain overlay
  const curtain = document.createElement("div");
  Object.assign(curtain.style, {
    position: "fixed",
    inset: "0",
    zIndex: "99999",
    background: curtainColor,
    transform: "translateX(-100%)",
    transition: "none",
    pointerEvents: "none",
  });
  document.body.appendChild(curtain);

  // Force reflow
  curtain.offsetHeight;

  // Phase 1: Sweep curtain IN (left to right)
  curtain.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  curtain.style.transform = "translateX(0%)";

  await new Promise((r) => setTimeout(r, 400));

  // Phase 2: Toggle theme while curtain covers screen
  toggleDark();
  await nextTick();

  // Small pause to let theme apply
  await new Promise((r) => setTimeout(r, 80));

  // Phase 3: Sweep curtain OUT (continue to right)
  curtain.style.transition = "transform 0.4s cubic-bezier(0.8, 0, 0.6, 1)";
  curtain.style.transform = "translateX(100%)";

  await new Promise((r) => setTimeout(r, 400));

  // Cleanup
  curtain.remove();
  isAnimating.value = false;
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full flex justify-center z-50 pt-4 px-4 pointer-events-none"
  >
    <nav
      class="pointer-events-auto navbar backdrop-blur-xl rounded-full py-3 px-6 border"
      :class="[
        isScrolled
          ? 'navbar--scrolled shadow-lg'
          : 'navbar--top border-transparent shadow-none',
        isDark
          ? isScrolled
            ? 'bg-slate-900/70 border-slate-700/50'
            : 'bg-transparent'
          : isScrolled
            ? 'bg-white/70 border-slate-200/50'
            : 'bg-transparent',
      ]"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#"
          class="text-xl font-bold font-mono tracking-tighter hover:opacity-80 transition-opacity flex items-center"
        >
          <span :class="isDark ? 'text-slate-100' : 'text-slate-900'"
            >&lt;WLSE/&gt;</span
          >
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click="scrollTo($event, link.href)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            :class="
              isDark
                ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            "
          >
            {{ link.name }}
          </a>

          <div
            class="w-px h-5 mx-2"
            :class="isDark ? 'bg-slate-700' : 'bg-slate-200'"
          ></div>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleTheme"
            class="p-2.5 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 group relative overflow-hidden"
            :class="
              isDark
                ? 'hover:bg-amber-500/10 text-amber-400'
                : 'hover:bg-indigo-500/10 text-indigo-600'
            "
          >
            <transition name="icon-rotate" mode="out-in">
              <Sun v-if="isDark" key="sun" class="h-5 w-5" />
              <Moon v-else key="moon" class="h-5 w-5" />
            </transition>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="bg-transparent p-2 rounded-full focus:outline-none transition-colors"
            :class="
              isDark
                ? 'text-slate-300 hover:bg-slate-800'
                : 'text-slate-600 hover:bg-slate-100'
            "
          >
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMenuOpen" class="h-5 w-5" aria-hidden="true" />
            <X v-else class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0 scale-95"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform -translate-y-2 opacity-0 scale-95"
      >
        <div
          v-show="isMenuOpen"
          class="absolute top-full left-0 right-0 mt-2 mx-auto w-full max-w-[calc(100%-2rem)] md:hidden rounded-2xl shadow-xl border overflow-hidden"
          :class="
            isDark
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          "
        >
          <div class="p-2 space-y-1">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              @click="scrollTo($event, link.href)"
              class="block px-4 py-3 rounded-xl text-base font-medium transition-colors"
              :class="
                isDark
                  ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              "
            >
              {{ link.name }}
            </a>
            <div
              class="h-px my-2"
              :class="isDark ? 'bg-slate-800' : 'bg-slate-100'"
            ></div>
            <button
              @click="toggleTheme"
              class="flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300"
              :class="
                isDark ? 'hover:bg-amber-500/10' : 'hover:bg-indigo-500/10'
              "
            >
              <transition name="icon-rotate" mode="out-in">
                <Sun v-if="isDark" key="sun" class="h-5 w-5 text-amber-400" />
                <Moon v-else key="moon" class="h-5 w-5 text-indigo-600" />
              </transition>
              <span :class="isDark ? 'text-slate-300' : 'text-slate-600'">{{
                isDark ? "Light Mode" : "Dark Mode"
              }}</span>
            </button>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  width: 100%;
  transition:
    max-width 0.45s cubic-bezier(0.25, 1, 0.5, 1),
    background-color 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.navbar--scrolled {
  max-width: 42rem;
}

.navbar--top {
  max-width: 72rem;
}

/* Sun/Moon icon rotate + scale animation */
.icon-rotate-enter-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.icon-rotate-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}
.icon-rotate-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0);
}
.icon-rotate-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0);
}
</style>
