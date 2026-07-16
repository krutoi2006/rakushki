<script setup lang="ts">
import { reactive, ref } from "vue"

const form = reactive({
  name: "",
  phone: "",
  company: "",
  venueType: "",
  city: "",
  fileName: "",
})

const fileInput = ref<HTMLInputElement | null>(null)
const submitted = ref(false)

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  form.fileName = target.files?.[0]?.name ?? ""
}

const onSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-[#0A0B09] py-section-gap">
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="h-[800px] w-[800px] rounded-full bg-[#D97706] opacity-[0.03] blur-[100px]" />
    </div>

    <div class="relative z-10 mx-auto max-w-4xl px-margin-mobile text-center md:px-margin-desktop">
      <h2 class="mb-6 font-headline-lg text-headline-lg text-on-surface">
        Спроектируем акустическую систему под особенности вашего зала
      </h2>
      <p class="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        Оставьте заявку, и наши инженеры свяжутся с вами для обсуждения технического задания и
        подготовки предварительного расчета.
      </p>

      <form class="mx-auto max-w-md space-y-4 text-left" @submit.prevent="onSubmit">
        <div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Имя"
            class="tech-border w-full rounded-sm bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline focus:border-[#D97706] focus:outline-none"
          >
        </div>

        <div>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Телефон"
            class="tech-border w-full rounded-sm bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline focus:border-[#D97706] focus:outline-none"
          >
        </div>

        <div>
          <input
            v-model="form.company"
            type="text"
            placeholder="Компания / организация"
            class="tech-border w-full rounded-sm bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline focus:border-[#D97706] focus:outline-none"
          >
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <input
              v-model="form.venueType"
              type="text"
              placeholder="Тип объекта"
              class="tech-border w-full rounded-sm bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline focus:border-[#D97706] focus:outline-none"
            >
          </div>
          <div>
            <input
              v-model="form.city"
              type="text"
              placeholder="Город"
              class="tech-border w-full rounded-sm bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline focus:border-[#D97706] focus:outline-none"
            >
          </div>
        </div>

        <div>
          <input ref="fileInput" type="file" class="hidden" @change="onFileChange">
          <button
            type="button"
            class="tech-border mt-2 flex w-full items-center justify-center gap-2 rounded-sm border-dashed bg-surface-container/70 px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-container-high"
            @click="fileInput?.click()"
          >
            <span class="material-symbols-outlined text-xl">upload_file</span>
            {{ form.fileName || "Прикрепить чертежи зала (опционально)" }}
          </button>
        </div>

        <button
          type="submit"
          class="mt-4 w-full rounded-sm bg-[#D97706] px-8 py-4 font-label-caps text-label-caps font-bold uppercase text-[#121212] transition hover:brightness-105"
        >
          Отправить запрос
        </button>

        <p class="mt-4 text-center text-xs text-on-surface-variant/80">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Специалисты свяжутся с
          вами для уточнения параметров помещения.
        </p>

        <p v-if="submitted" class="rounded-sm border border-[#D97706]/30 bg-[#D97706]/10 px-4 py-3 text-sm text-secondary">
          Форма подготовлена. Остается подключить ваш backend или CRM для реальной отправки заявок.
        </p>
      </form>
    </div>
  </section>
</template>
