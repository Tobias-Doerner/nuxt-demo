<template>
  <v-container fluid>
    <v-row justify="center">
      <v-card class="mx-auto" max-width="500" elevation="2">
        <nuxt-logo></nuxt-logo>
        <v-card-title class="headline">
          {{ $t('page.index.title') }}
        </v-card-title>
        <v-card-subtitle>{{ $t('page.index.subtitle') }}</v-card-subtitle>
        <v-card-text
          class="text--primary"
          v-html="$t('page.index.details')"
        ></v-card-text>
        <v-card-actions>
          <v-btn
            dark
            color="brown darken-2"
            href="https://github.com/Tobias-Doerner/nuxt-demo"
            target="_blank"
            rel="noreferrer"
            >{{ $t('page.index.btn.repo') }}</v-btn
          >
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
