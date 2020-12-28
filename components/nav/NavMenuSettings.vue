<template>
  <v-container>
    <v-row>
      <v-col>{{ $t('settings.title') }}</v-col>
    </v-row>
    <v-row align="center" no-gutters>
      <v-col>{{ $t('settings.language') }}</v-col>
      <v-col>
        <chooser-language />
      </v-col>
    </v-row>
  </v-container>
</template>
