<script setup lang="ts">
import { faqItems } from "~/data/landing"
</script>

<template>
  <section class="mx-auto max-w-3xl border-t px-margin-mobile py-section-gap tech-border md:px-margin-desktop">
    <div class="mb-12 text-center">
      <h2 class="mb-4 font-headline-lg text-headline-lg text-on-surface">Частые вопросы</h2>
    </div>

    <div class="space-y-4">
      <details v-for="item in faqItems" :key="item.question" class="faq-item overflow-hidden rounded-sm bg-surface-container tech-border">
        <summary class="flex cursor-pointer items-center justify-between p-6 font-headline-md text-xl text-on-surface transition-colors hover:text-[#D97706]">
          {{ item.question }}
          <span class="faq-icon material-symbols-outlined transition-transform duration-300">expand_more</span>
        </summary>

        <div class="mt-4 border-t border-outline-variant/30 p-6 pt-0 text-base text-on-surface-variant">
          {{ item.answer }}
        </div>
      </details>
    </div>
  </section>
</template>

