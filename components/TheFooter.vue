<template>
  <v-footer :inset="inset" color="blue-grey darken-4" app padless>
    <v-card flat tile class="blue-grey darken-4 text-center mx-auto">
      <transition name="fade">
        <v-card-text v-show="!collapsed" class="white--text pt-2">
          {{ $t('footer.description') }}
          <div>
            <v-btn
              v-for="social in socials"
              :key="social.icon"
              :href="social.link"
              rel="noreferrer"
              target="_blank"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </transition>

      <v-card-text class="white--text pa-0">
        <div>
          <v-btn
            class="white--text"
            aria-label="open or closing the navbar details"
            icon
            x-small
            @click="collapsed = !collapsed"
          >
            <v-icon size="12px">{{ collapseIcon }}</v-icon>
          </v-btn>
        </div>
        <strong>{{ $t('footer.title') }}</strong> —
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
      inset: true,
      socials: [
        {
          icon: 'mdi-linkedin',
          link: 'https://de.linkedin.com/in/tobias-doerner-367170150'
        },
        {
          icon: 'mdi-xing',
          link: 'https://www.xing.com/profile/Tobias_Doerner7'
        },
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/Tobias_Doerner'
        },
        {
          icon: 'mdi-git',
          link: 'https://github.com/Tobias-Doerner'
        }
      ]
    }
  },
  computed: {
    collapseIcon() {
      return this.collapsed ? 'mdi-chevron-up' : 'mdi-chevron-down'
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
