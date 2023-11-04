<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, availableLocales } = useI18n()
</script>

<template>
  <select v-model="locale">
    <option v-for="loc in availableLocales" :key="loc" :value="loc">
      {{ loc }}
    </option>
  </select>
</template>
