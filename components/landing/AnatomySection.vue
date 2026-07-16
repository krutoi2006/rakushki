<script setup lang="ts">
import { anatomyFeatures, anatomyImage } from "~/data/landing"
</script>

<template>
  <section id="anatomy" class="schema-section relative overflow-hidden border-y bg-surface py-section-gap tech-border">
    <div class="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-5">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <h2 class="mb-8 font-headline-lg text-headline-lg text-on-surface">Анатомия звука</h2>
          <div class="space-y-6">
            <div
              v-for="(feature, index) in anatomyFeatures"
              :key="feature.title"
              :class="[
                'reveal-item flex items-start gap-4',
                feature.delayClass,
                index < anatomyFeatures.length - 1 ? 'animated-border pb-6' : 'relative',
              ]"
            >
              <div
                v-if="index < anatomyFeatures.length - 1"
                class="reveal-line"
                :style="{ animationDelay: feature.lineDelay }"
              />
              <span class="material-symbols-outlined text-2xl text-secondary">{{ feature.icon }}</span>
              <div>
                <h3 class="mb-2 font-label-caps text-label-caps uppercase text-on-surface">
                  {{ feature.title }}
                </h3>
                <p class="text-on-surface-variant">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal-drawing warm-glow relative rounded-lg bg-surface-container p-8 tech-border">
          <img
            :src="anatomyImage"
            alt="Схематичное изображение внутреннего устройства акустической панели."
            class="h-auto w-full object-cover opacity-80"
          >
        </div>
      </div>
    </div>
  </section>
</template>

