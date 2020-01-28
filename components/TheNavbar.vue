<template>
  <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Jobs',
          to: '/jobs'
        }
      ]
    }
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
