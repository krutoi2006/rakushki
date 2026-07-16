<script setup lang="ts">
import { footerColumns } from "~/data/landing"
</script>

<template>
  <footer class="w-full border-t border-outline-variant/30 bg-background py-section-gap">
    <div
      class="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop"
    >
      <div class="col-span-1">
        <div class="mb-4 font-headline-md text-headline-md text-on-surface">AcousticLogic</div>
        <p class="text-sm text-on-surface-variant">
          © 2026 AcousticLogic Engineering.<br>
          Все права защищены.<br>
          Precision in sound.
        </p>
      </div>

      <div class="col-span-1 grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
        <div v-for="(column, index) in footerColumns" :key="index" class="flex flex-col space-y-3">
          <a
            v-for="link in column"
            :key="link.label"
            :href="link.href"
            class="text-body-md text-on-surface-variant transition-colors hover:text-secondary"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
