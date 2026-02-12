<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillSection from "./components/SkillSection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import ScrollControls from "./components/ScrollControls.vue";
</script>

<template>
  <div
    class="min-h-screen font-sans bg-slate-50 dark:bg-[#0f172a] text-slate-700 dark:text-slate-200 transition-colors duration-500"
  >
    <Navbar />
    <ScrollControls />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
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
