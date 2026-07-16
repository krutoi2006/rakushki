<script setup lang="ts">
import { processSteps } from "~/data/landing"
</script>

<template>
  <section id="process" class="relative overflow-hidden border-y bg-surface-container-low py-section-gap tech-border">
    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <h2 class="mb-16 text-center font-headline-lg text-headline-lg text-on-surface">Этапы работы</h2>

      <div class="relative">
        <div class="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-outline-variant/50 lg:block" />

        <div class="grid grid-cols-1 gap-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="step in processSteps"
            :key="step.index"
            class="group relative z-10 rounded-sm bg-surface p-6 tech-border transition-colors hover:border-[#D97706]/50"
          >
            <div class="absolute -top-3 left-6 bg-surface px-2 font-data-ui text-sm text-secondary">
              {{ step.index }}
            </div>
            <h3 class="mb-2 mt-2 font-label-caps text-label-caps uppercase text-on-surface">
              {{ step.title }}
            </h3>
            <p class="text-sm text-on-surface-variant">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

