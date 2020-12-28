<template>
  <v-app>
    <v-app-bar
      :clipped-left="drawer.left.clipped"
      color="blue-grey darken-4"
      app
      dark
      dense
      fixed
    >
      <v-app-bar-nav-icon
        v-show="isMobile"
        @click="drawer.left.model = !drawer.left.model"
      >
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer.right.model = !drawer.right.model">
        <v-icon>mdi-cog</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer.left.model"
      :clipped="drawer.left.clipped"
      :expand-on-hover="!isMobile"
      :mini-variant="drawer.left.miniVariant"
      :permanent="!isMobile"
      color="blue-grey darken-3"
      app
      dark
      fixed
      left
    >
      <nav-menu-list />
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer.right.model"
      :clipped="drawer.right.clipped"
      color="blue-grey darken-3"
      app
      right
      temporary
    >
      <nav-menu-settings />
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <the-footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      appBar: {},
      drawer: {
        left: {
          clipped: true,
          miniVariant: false,
          model: false
        },
        right: {
          clipped: false,
          model: false
        }
      }
    }
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.mobile) return true
      if (this.$vuetify.breakpoint.name === 'xs') return true

      return false
    }
  }
}
</script>
