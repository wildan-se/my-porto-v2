<script setup>
import { defineAsyncComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillSection from "./components/SkillSection.vue";
import ScrollControls from "./components/ScrollControls.vue";
import Footer from "./components/Footer.vue";

// Lazy-load heavy below-fold sections — each becomes a separate JS chunk
// loaded only after the initial paint, reducing main bundle size.
const CertificatesSection = defineAsyncComponent(() => import("./components/CertificatesSection.vue"));
const ProjectsSection = defineAsyncComponent(() => import("./components/ProjectsSection.vue"));
const ContactSection = defineAsyncComponent(() => import("./components/ContactSection.vue"));
</script>

<template>
  <div
    class="min-h-screen font-sans bg-zinc-50 dark:bg-[#0f172a] text-zinc-700 dark:text-zinc-200 transition-colors duration-500"
  >
    <Navbar />
    <ScrollControls />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <CertificatesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
