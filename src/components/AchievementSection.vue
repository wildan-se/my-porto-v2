<script setup>
import {
  Award,
  Trophy,
  Medal,
  Star,
  GraduationCap,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-vue-next";
import { ref, computed } from "vue";

const achievements = [
  {
    icon: "trophy",
    title: "1st Place Hackathon",
    description:
      "Won first place at National Web Development Hackathon 2025 with an innovative e-commerce solution.",
    year: "2025",
    category: "Competition",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: "graduation",
    title: "AWS Certified Developer",
    description:
      "Achieved AWS Certified Developer Associate certification, demonstrating cloud expertise.",
    year: "2025",
    category: "Certification",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=1000&fit=crop",
  },
  {
    icon: "star",
    title: "Open Source Contributor",
    description:
      "Top contributor to Vue.js ecosystem with 500+ GitHub stars across personal projects.",
    year: "2024",
    category: "Open Source",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
  },
  {
    icon: "medal",
    title: "Best UI/UX Design Award",
    description:
      "Recognized for outstanding user interface design at Regional Tech Conference.",
    year: "2024",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1000&fit=crop",
  },
  {
    icon: "shield",
    title: "Google Developer Expert",
    description:
      "Selected as Google Developer Expert for Web Technologies, recognized for community contributions.",
    year: "2024",
    category: "Recognition",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    icon: "award",
    title: "Dean's List Excellence",
    description:
      "Consistently achieved Dean's List recognition for academic performance in Computer Science.",
    year: "2023",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  },
];

const iconMap = {
  trophy: Trophy,
  graduation: GraduationCap,
  star: Star,
  medal: Medal,
  shield: ShieldCheck,
  award: Award,
};

const categoryColors = {
  Competition: "from-amber-500 to-orange-500",
  Certification: "from-blue-500 to-cyan-500",
  "Open Source": "from-green-500 to-emerald-500",
  Design: "from-pink-500 to-rose-500",
  Recognition: "from-indigo-500 to-violet-500",
  Academic: "from-purple-500 to-fuchsia-500",
};

const activeIndex = ref(2); // Start from middle

const prev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const next = () => {
  if (activeIndex.value < achievements.length - 1) {
    activeIndex.value++;
  }
};

const getCardStyle = (index) => {
  const diff = index - activeIndex.value;

  if (diff === 0) {
    // Active card - center, large, no blur
    return {
      transform: "translateX(0%) scale(1)",
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
    };
  } else if (diff === -1) {
    // Left neighbor
    return {
      transform: "translateX(-60%) scale(0.85)",
      opacity: 0.6,
      filter: "blur(4px)",
      zIndex: 5,
    };
  } else if (diff === 1) {
    // Right neighbor
    return {
      transform: "translateX(60%) scale(0.85)",
      opacity: 0.6,
      filter: "blur(4px)",
      zIndex: 5,
    };
  } else if (diff < -1) {
    // Far left
    return {
      transform: "translateX(-120%) scale(0.7)",
      opacity: 0.3,
      filter: "blur(8px)",
      zIndex: 1,
    };
  } else {
    // Far right
    return {
      transform: "translateX(120%) scale(0.7)",
      opacity: 0.3,
      filter: "blur(8px)",
      zIndex: 1,
    };
  }
};
</script>

<template>
  <section id="achievements" class="py-24 transition-colors overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
        >
          Achievement
          <span class="text-indigo-600 dark:text-indigo-400">Gallery</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A visual showcase of milestones and recognitions.
        </p>
      </div>

      <!-- Gallery Carousel -->
      <div class="relative">
        <!-- Cards Container -->
        <div class="gallery-container">
          <div
            v-for="(achievement, index) in achievements"
            :key="index"
            class="gallery-card"
            :style="getCardStyle(index)"
            @click="activeIndex = index"
          >
            <div class="relative h-full rounded-3xl overflow-hidden shadow-2xl">
              <!-- Image -->
              <img
                :src="achievement.image"
                :alt="achievement.title"
                class="w-full h-full object-cover"
              />

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
              ></div>

              <!-- Content -->
              <div
                class="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-white"
              >
                <!-- Icon -->
                <div class="mb-6">
                  <div
                    class="inline-flex p-4 rounded-2xl bg-gradient-to-br shadow-xl"
                    :class="categoryColors[achievement.category]"
                  >
                    <component
                      :is="iconMap[achievement.icon]"
                      class="w-8 h-8"
                    />
                  </div>
                </div>

                <!-- Title & Description -->
                <h3 class="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                  {{ achievement.title }}
                </h3>
                <p class="text-lg text-white/90 mb-4 leading-relaxed max-w-2xl">
                  {{ achievement.description }}
                </p>

                <!-- Meta Info -->
                <div class="flex items-center gap-4 flex-wrap">
                  <span
                    class="px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-md border border-white/30"
                  >
                    {{ achievement.category }}
                  </span>
                  <div class="flex items-center gap-2 text-white/80">
                    <Calendar class="w-4 h-4" />
                    <span class="text-sm font-mono">{{
                      achievement.year
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="prev"
          :disabled="activeIndex === 0"
          class="nav-button nav-button-left"
          :class="{ 'opacity-30 cursor-not-allowed': activeIndex === 0 }"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>
        <button
          @click="next"
          :disabled="activeIndex === achievements.length - 1"
          class="nav-button nav-button-right"
          :class="{
            'opacity-30 cursor-not-allowed':
              activeIndex === achievements.length - 1,
          }"
        >
          <ChevronRight class="w-6 h-6" />
        </button>

        <!-- Indicators -->
        <div class="flex items-center justify-center gap-2 mt-12">
          <button
            v-for="(achievement, index) in achievements"
            :key="index"
            @click="activeIndex = index"
            class="indicator"
            :class="{ 'indicator-active': index === activeIndex }"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Gallery Container */
.gallery-container {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

/* Gallery Card */
.gallery-card {
  position: absolute;
  width: 90%;
  max-width: 700px;
  height: 500px;
  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
  will-change: transform, opacity, filter;
}

@media (max-width: 768px) {
  .gallery-card {
    max-width: 90%;
    height: 450px;
  }
  .gallery-container {
    height: 500px;
  }
}

/* Navigation Buttons */
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  padding: 1rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #1e293b;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.nav-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.nav-button:disabled {
  pointer-events: none;
}

:root.dark .nav-button {
  background: rgba(30, 41, 59, 0.9);
  color: #e2e8f0;
  border-color: rgba(71, 85, 105, 0.5);
}

:root.dark .nav-button:hover:not(:disabled) {
  background: rgba(30, 41, 59, 1);
}

.nav-button-left {
  left: 1rem;
}

.nav-button-right {
  right: 1rem;
}

@media (max-width: 768px) {
  .nav-button {
    padding: 0.75rem;
  }
  .nav-button-left {
    left: 0.5rem;
  }
  .nav-button-right {
    right: 0.5rem;
  }
}

/* Indicators */
.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  transition: all 0.3s ease;
  cursor: pointer;
}

.indicator:hover {
  background: #94a3b8;
  transform: scale(1.2);
}

.indicator-active {
  width: 32px;
  border-radius: 4px;
  background: #6366f1;
}

:root.dark .indicator {
  background: #475569;
}

:root.dark .indicator:hover {
  background: #64748b;
}

:root.dark .indicator-active {
  background: #818cf8;
}
</style>
