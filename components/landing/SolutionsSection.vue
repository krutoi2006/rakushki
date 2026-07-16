<script setup lang="ts">
import { compactSolutions, featuredSolution } from "~/data/landing"
</script>

<template>
  <section id="solutions" class="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
    <div class="mb-16">
      <h2 class="mb-4 font-headline-lg text-headline-lg text-on-surface">Инженерные решения</h2>
      <p class="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        Каждый элемент системы разработан для точного управления звуковыми волнами, обеспечивая
        баланс между отражением, направлением и поглощением.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-base md:grid-cols-12">
      <article
        class="scroll-reveal-card group relative h-[600px] overflow-hidden rounded-lg bg-surface-container tech-border md:col-span-8"
        style="transition-delay: 0.1s;"
      >
        <img
          :src="featuredSolution.image"
          :alt="featuredSolution.title"
          class="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div class="absolute bottom-0 left-0 w-full p-8">
          <div class="mb-2 font-data-ui text-data-ui text-secondary">{{ featuredSolution.code }}</div>
          <h3 class="mb-2 font-headline-md text-headline-md text-on-surface">{{ featuredSolution.title }}</h3>
          <p class="max-w-md text-body-md text-on-surface-variant">{{ featuredSolution.description }}</p>
        </div>
      </article>

      <div class="flex h-[600px] flex-col gap-base md:col-span-4">
        <article
          class="scroll-reveal-card group relative flex-1 overflow-hidden rounded-lg bg-surface-container tech-border"
          style="transition-delay: 0.25s;"
        >
          <img
            :src="compactSolutions[0].image"
            :alt="compactSolutions[0].title"
            class="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div class="absolute bottom-0 left-0 p-6">
            <div class="mb-1 font-data-ui text-data-ui text-secondary">{{ compactSolutions[0].code }}</div>
            <h3 class="font-headline-md text-xl font-semibold text-on-surface">
              {{ compactSolutions[0].title }}
            </h3>
          </div>
        </article>

        <article
          class="scroll-reveal-card relative flex flex-1 flex-col justify-end overflow-hidden rounded-lg bg-surface-container p-6 tech-border"
          style="transition-delay: 0.4s;"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-high opacity-50" />
          <div
            class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(circle at 2px 2px, #c8c6c5 1px, transparent 0); background-size: 24px 24px;"
          />
          <div class="relative z-10">
            <div class="mb-1 font-data-ui text-data-ui text-secondary">{{ compactSolutions[1].code }}</div>
            <h3 class="mb-2 font-headline-md text-xl font-semibold text-on-surface">
              {{ compactSolutions[1].title }}
            </h3>
            <p class="text-sm text-on-surface-variant">{{ compactSolutions[1].description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

