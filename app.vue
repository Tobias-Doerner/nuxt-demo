<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

useHead({
  title: 'Demo',
  meta: [{ name: 'description', content: 'Demo App' }],
  htmlAttrs: {
    lang: locale,
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
