<script setup lang="ts">
import { heroImage, heroStats } from "~/data/landing"
</script>

<template>
  <header class="relative flex min-h-screen items-center overflow-hidden pt-20">
    <div class="absolute inset-0 z-0">
      <img
        :src="heroImage"
        alt="Архитектурная акустическая раковина на сцене концертного зала."
        class="parallax-bg h-full w-full scale-[1.1] object-cover opacity-30"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-background via-background/92 via-55% to-background/40" />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="max-w-4xl">
        <div
          class="mb-6 inline-flex items-center space-x-2 rounded-sm bg-surface-container/50 px-3 py-1 backdrop-blur-sm tech-border"
        >
          <span class="h-2 w-2 rounded-full bg-[#D97706]" />
          <span class="font-label-caps text-label-caps uppercase text-on-surface-variant">
            Архитектурная точность
          </span>
        </div>

        <h1
          class="mb-8 font-headline-display text-headline-lg-mobile text-on-surface md:text-headline-display"
        >
          Профессиональная акустика для концертных и сценических пространств
        </h1>

        <p class="mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Проектируем и производим мобильные акустические раковины, телескопические панели и
          экраны для залов любого масштаба. Инженерный подход к звучанию без компромиссов.
        </p>

        <div class="mb-20 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            class="rounded bg-[#D97706] px-8 py-4 text-center font-label-caps text-label-caps font-bold uppercase text-[#121212] transition-opacity hover:opacity-90"
          >
            Получить расчет проекта
          </a>
          <a
            href="#solutions"
            class="tech-border flex items-center justify-center gap-2 rounded bg-surface-container/70 px-8 py-4 text-center font-label-caps text-label-caps uppercase text-on-surface backdrop-blur-sm transition-colors hover:bg-surface-container-high"
          >
            Посмотреть продукцию
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-8 md:grid-cols-4 md:gap-8">
        <div v-for="stat in heroStats" :key="stat.index">
          <div class="mb-1 font-data-ui text-data-ui text-secondary">{{ stat.index }}</div>
          <div class="font-label-caps text-label-caps uppercase text-on-surface">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </header>
</template>
