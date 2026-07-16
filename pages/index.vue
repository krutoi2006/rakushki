<script setup lang="ts">
import { nextTick, onMounted } from "vue"

import AnatomySection from "~/components/landing/AnatomySection.vue"
import ContactSection from "~/components/landing/ContactSection.vue"
import FaqSection from "~/components/landing/FaqSection.vue"
import HeroSection from "~/components/landing/HeroSection.vue"
import ImpactSection from "~/components/landing/ImpactSection.vue"
import ProcessSection from "~/components/landing/ProcessSection.vue"
import ProjectsSection from "~/components/landing/ProjectsSection.vue"
import SolutionsSection from "~/components/landing/SolutionsSection.vue"
import SiteFooter from "~/components/layout/SiteFooter.vue"
import SiteHeader from "~/components/layout/SiteHeader.vue"

const { init } = useLandingAnimations()

useSeoMeta({
  title: "AcousticLogic - Профессиональные акустические решения",
  description:
    "Nuxt-сайт для AcousticLogic: акустические раковины, сценические панели и инженерные решения для концертных залов.",
  ogTitle: "AcousticLogic",
  ogDescription:
    "Профессиональная акустика для концертных и сценических пространств.",
})

onMounted(async () => {
  await nextTick()
  init()
})
</script>

<template>
  <div id="top">
    <SiteHeader />
    <main>
      <HeroSection />
      <ImpactSection />
      <SolutionsSection />
      <ProcessSection />
      <AnatomySection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
