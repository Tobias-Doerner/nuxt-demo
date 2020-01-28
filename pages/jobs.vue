<template>
  <v-container fluid>
    <job-data-table></job-data-table>
  </v-container>
</template>
<script>
export default {
  components: {
    JobDataTable: () => import('~/components/jobs/JobDataTable.vue')
  }
}
</script>
