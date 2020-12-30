<template>
  <v-card class="mx-auto text-center" color="tertiary" max-width="700">
    <v-card-text class="pt-2">
      {{ $t('footer.description') }}
      <div>
        <v-btn
          v-for="social in socials"
          :key="social.icon"
          :aria-label="social.description"
          :href="social.link"
          class="ma-2"
          rel="noreferrer"
          target="_blank"
          icon
          x-large
        >
          <v-icon :color="social.color">{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          color: '#2867b2',
          description: 'LinkedIn',
          icon: 'mdi-linkedin',
          link: 'https://de.linkedin.com/in/tobias-doerner-367170150'
        },
        {
          color: '#126567',
          description: 'Xing',
          icon: 'mdi-xing',
          link: 'https://www.xing.com/profile/Tobias_Doerner7'
        },
        {
          color: '#08a0e9',
          description: 'Twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/Tobias_Doerner'
        },
        {
          color: '#c9510c',
          description: 'Github',
          icon: 'mdi-github',
          link: 'https://github.com/Tobias-Doerner'
        }
      ]
    }
  }
}
</script>
