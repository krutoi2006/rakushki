<script setup lang="ts">
import { projects } from "~/data/landing"
</script>

<template>
  <section id="projects" class="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
    <div class="mb-12 flex items-end justify-between">
      <h2 class="font-headline-lg text-headline-lg text-on-surface">Реализованные объекты</h2>
      <a
        href="#contact"
        class="hidden items-center gap-1 font-label-caps text-label-caps uppercase text-secondary transition-colors hover:text-primary md:flex"
      >
        Обсудить проект
        <span class="material-symbols-outlined text-sm">arrow_outward</span>
      </a>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <article v-for="project in projects" :key="project.title" class="group cursor-pointer">
        <div class="relative mb-4 h-80 overflow-hidden rounded-sm bg-surface-container tech-border">
          <img
            :src="project.image"
            :alt="project.alt"
            class="h-full w-full object-cover opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          >
        </div>
        <div class="mb-1 font-data-ui text-data-ui text-outline">{{ project.city }}</div>
        <h3 class="font-body-lg text-body-lg text-on-surface transition-colors group-hover:text-secondary">
          {{ project.title }}
        </h3>
      </article>
    </div>
  </section>
</template>

