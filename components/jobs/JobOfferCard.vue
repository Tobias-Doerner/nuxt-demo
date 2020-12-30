<template>
  <v-card color="tertiary" width="500" tile>
    <v-card-title>{{ jobTitle }} </v-card-title>
    <v-card-subtitle>
      <h3>{{ company }}</h3>
    </v-card-subtitle>
    <v-card-text>
      <div>
        <v-icon>mdi-clock</v-icon>
        <span>{{ jobType }}</span>
      </div>
      <div>
        <v-icon>mdi-map-marker</v-icon>
        <span>{{ location }}</span>
      </div>
      <div>
        <v-icon>mdi-calendar-clock</v-icon>
        <span>{{ createdAt | formatDateTime }}</span>
      </div>
      <div v-if="isValidUrl(companyUrl)">
        <v-icon>mdi-web</v-icon>
        <a :href="companyUrl" rel="noreferrer" target="_blank">
          {{ companyUrl }}
        </a>
      </div>
      <div>
        <v-icon>mdi-file-document</v-icon>
        <a :href="url" rel="noreferrer" target="_blank">{{ id }}</a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      default: () => ''
    },
    companyLogo: {
      type: String,
      default: () => ''
    },
    companyUrl: {
      type: String,
      default: () => ''
    },
    createdAt: {
      type: String,
      default: () => ''
    },
    id: {
      type: String,
      default: () => ''
    },
    jobTitle: {
      type: String,
      default: () => ''
    },
    jobType: {
      type: String,
      default: () => ''
    },
    location: {
      type: String,
      default: () => ''
    },
    url: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    isValidUrl(url) {
      if (url) {
        try {
          return !!new URL(url)
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style>
.v-card__text,
.v-card__title,
.v-card__subtitle {
  word-break: normal !important;
}
</style>
