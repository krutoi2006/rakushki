<script setup lang="ts">
import { impactCards } from "~/data/landing"
</script>

<template>
  <section id="impact" class="mx-auto max-w-container-max border-b bg-surface-container-low px-margin-mobile py-section-gap tech-border md:px-margin-desktop">
    <div class="mb-16">
      <h2 class="mb-4 font-headline-lg text-headline-lg text-on-surface">Как меняется звучание</h2>
      <p class="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        Акустическая раковина формирует правильное звуковое поле, направляя энергию в зрительный
        зал и создавая комфортную среду для музыкантов на сцене.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
      <article
        v-for="card in impactCards"
        :key="card.title"
        :class="[
          'group relative overflow-hidden rounded-sm bg-surface-dim p-8 tech-border',
          card.icon === 'check' ? 'border-[#D97706]/30 warm-glow' : '',
        ]"
      >
        <h3 class="relative z-10 mb-6 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
          <span :class="['h-3 w-3 rounded-full', card.accentClass]" />
          {{ card.title }}
        </h3>

        <div
          :class="[
            'relative mb-6 flex h-64 items-center justify-center rounded-sm tech-border',
            card.icon === 'check' ? 'bg-surface-container-lowest' : 'bg-surface',
          ]"
        >
          <svg v-if="card.icon === 'close'" class="h-full w-full opacity-80" fill="none" viewBox="0 0 500 250">
            <path d="M50 200 L450 200" stroke="#444748" stroke-width="2" />
            <path d="M100 200 L100 220 M250 200 L250 220 M400 200 L400 220" stroke="#444748" stroke-width="1" />
            <circle cx="250" cy="180" r="8" fill="#c8c6c5" />
            <path class="sound-wave-before" d="M250 170 Q 200 80 120 40" stroke="#8e9192" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 0s;" />
            <path class="sound-wave-before" d="M250 170 Q 250 80 250 20" stroke="#8e9192" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 0.8s;" />
            <path class="sound-wave-before" d="M250 170 Q 300 80 380 40" stroke="#8e9192" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 1.6s;" />
            <path class="sound-wave-before" d="M240 175 Q 150 120 60 100" stroke="#8e9192" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 0.4s;" />
            <path class="sound-wave-before" d="M260 175 Q 350 120 440 100" stroke="#8e9192" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 1.2s;" />
            <path class="sound-wave-before" d="M260 185 L 450 185" stroke="#8e9192" stroke-linecap="round" stroke-width="1" style="animation-delay: 2s; opacity: 0.3;" />
          </svg>

          <svg v-else class="h-full w-full" fill="none" viewBox="0 0 500 250">
            <path d="M50 200 L450 200" stroke="#444748" stroke-width="2" />
            <path d="M100 200 L100 220 M250 200 L250 220 M400 200 L400 220" stroke="#444748" stroke-width="1" />
            <path d="M150 200 L150 100 Q 250 50 350 100 L350 200" fill="rgba(217, 119, 6, 0.03)" stroke="#D97706" stroke-opacity="0.6" stroke-width="2" />
            <path d="M180 80 L320 80" stroke="#D97706" stroke-dasharray="4 2" stroke-opacity="0.4" stroke-width="1" />
            <path d="M200 60 L300 60" stroke="#D97706" stroke-dasharray="4 2" stroke-opacity="0.4" stroke-width="1" />
            <circle cx="200" cy="180" r="8" fill="#c8c6c5" />
            <path class="sound-wave-after" d="M210 180 L 460 180" stroke="#D97706" stroke-linecap="round" stroke-width="2" style="animation-delay: 0s;" />
            <path class="sound-wave-after" d="M205 175 L 250 90 L 460 140" stroke="#D97706" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 0.5s;" />
            <path class="sound-wave-after" d="M205 175 L 280 110 L 460 160" stroke="#D97706" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 1s;" />
            <path class="sound-wave-after" d="M205 175 L 320 130 L 460 170" stroke="#D97706" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 1.5s;" />
            <path class="sound-wave-after" d="M195 180 L 160 180 L 460 120" stroke="#D97706" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 0.8s; opacity: 0.7;" />
            <path class="sound-wave-after" d="M195 175 L 160 140 L 460 100" stroke="#D97706" stroke-linecap="round" stroke-width="1.5" style="animation-delay: 1.3s; opacity: 0.7;" />
          </svg>
        </div>

        <ul class="relative z-10 space-y-4">
          <li v-for="item in card.items" :key="item" class="flex items-start gap-3">
            <span :class="['material-symbols-outlined text-lg', card.iconClass]">{{ card.icon }}</span>
            <span class="font-body-md text-on-surface-variant">{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

