<template>
  <v-card width="500" tile>
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
        <v-icon>mdi-web</v-icon>
        <a :href="companyUrl" target="_blank">{{ companyUrl }}</a>
      </div>
      <div>
        <v-icon>mdi-file-document</v-icon>
        <a :href="url" target="_blank">{{ id }}</a>
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
  }
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
