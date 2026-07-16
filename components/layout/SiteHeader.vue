<script setup lang="ts">
import { ref } from "vue"

import { navigationLinks } from "~/data/landing"

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="glass-effect fixed top-0 z-50 w-full">
    <div
      class="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop"
    >
      <a class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface" href="#top">
        AcousticLogic
      </a>

      <div class="hidden items-center space-x-8 md:flex">
        <a
          v-for="link in navigationLinks"
          :key="link.href"
          :href="link.href"
          class="font-label-caps text-label-caps uppercase text-on-surface-variant transition-colors duration-300 hover:text-secondary"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="hidden items-center md:flex">
        <a
          href="#contact"
          class="rounded bg-[#D97706] px-6 py-3 font-label-caps text-label-caps font-bold uppercase text-[#121212] transition-all duration-300 hover:bg-[#b46305]"
        >
          Получить расчет
        </a>
      </div>

      <button class="text-on-surface md:hidden" type="button" @click="isMenuOpen = !isMenuOpen">
        <span class="material-symbols-outlined text-3xl">
          {{ isMenuOpen ? "close" : "menu" }}
        </span>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="tech-border border-t bg-surface-container-low px-margin-mobile py-4 md:hidden"
    >
      <div class="flex flex-col gap-4">
        <a
          v-for="link in navigationLinks"
          :key="`${link.href}-mobile`"
          :href="link.href"
          class="font-label-caps text-label-caps uppercase text-on-surface-variant transition-colors hover:text-secondary"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <a
          href="#contact"
          class="mt-2 inline-flex w-full justify-center rounded bg-[#D97706] px-6 py-3 font-label-caps text-label-caps font-bold uppercase text-[#121212]"
          @click="closeMenu"
        >
          Получить расчет
        </a>
      </div>
    </div>
  </nav>
</template>

