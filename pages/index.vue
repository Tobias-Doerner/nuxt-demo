<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card class="mx-auto" max-width="700">
        <nuxt-logo />
        <v-card-title class="headline">
          {{ $t('page.index.title') }}
        </v-card-title>
        <v-card-subtitle>{{ $t('page.index.subtitle') }}</v-card-subtitle>
        <v-card-text v-html="$t('page.index.details')" />
        <v-card-actions>
          <v-btn
            color="primary"
            href="https://github.com/Tobias-Doerner/nuxt-demo"
            target="_blank"
            rel="noreferrer"
          >
            {{ $t('page.index.btn.repo') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  components: {
    NuxtLogo
  }
}
</script>
