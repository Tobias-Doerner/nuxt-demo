<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon aria-label="toggle" @click.stop="drawer = !drawer" />
    <v-toolbar-title>{{ $t('appbar.title') }}</v-toolbar-title>
    <v-spacer />
    <lang-switcher></lang-switcher>
  </v-app-bar>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
  components: {
    LangSwitcher
  },
  computed: {
    clipped: {
      get() {
        return this.$store.state.nav.clipped
      },
      set(value) {
        this.$store.commit('nav/SET_CLIPPED', value)
      }
    },
    drawer: {
      get() {
        return this.$store.state.nav.drawer
      },
      set(value) {
        this.$store.commit('nav/SET_DRAWER', value)
      }
    }
  }
}
</script>
