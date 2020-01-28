<template>
  <v-app>
    <the-navbar></the-navbar>
    <the-app-bar></the-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
export default {
  components: {
    TheAppBar: () => import('~/components/TheAppBar.vue'),
    TheFooter: () => import('~/components/TheFooter.vue'),
    TheNavbar: () => import('~/components/TheNavbar.vue')
  },
  data() {
    return {}
  },
  head() {
    return {
      htmlAttrs: { lang: this.$store.state.i18n.locale }
    }
  }
}
</script>
