<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale } = useI18n()

const currentLocale = computed({
  get() {
    return locales.value.find(el => el.code === locale.value)
  },
  set(newLocale) {
    if (newLocale)
      setLocale(newLocale.code)
  },
})
</script>

<template>
  <select v-model="currentLocale">
    <option v-for="loc in locales" :key="loc.code" :value="loc">
      {{ loc.code }}
    </option>
  </select>
</template>
