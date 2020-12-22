<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :search="search"
    :expanded.sync="expanded"
    :loading="loading"
    class="elevation-2"
    item-key="id"
    height="60vh"
    fixed-header
    multi-sort
    show-expand
    single-expand
    @update:expanded="loadDescription()"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ $t('vacancies.table.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="$t('vacancies.table.search')"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:item.creationDate="{ item }">
      {{ getDateString(item.creationDate) }}
    </template>

    <template v-slot:expanded-item="{ item }">
      <td :colspan="headers.length">
        <v-progress-circular
          v-show="loadingDescription"
          indeterminate
          color="success"
          class="text-center"
        ></v-progress-circular>
        <div
          v-show="!loadingDescription"
          class="mt-3"
          v-html="item.description"
        ></div>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      search: '',
      expanded: [],
      loadingDescription: false
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('vacancies.table.header.company'),
          value: 'company',
          sortable: true,
          filterable: true
        },
        {
          text: this.$t('vacancies.table.header.title'),
          value: 'title',
          sortable: true,
          filterable: true
        },
        {
          text: this.$t('vacancies.table.header.location'),
          value: 'location',
          sortable: true,
          filterable: true
        },
        {
          text: this.$t('vacancies.table.header.type'),
          value: 'type',
          sortable: true,
          filterable: true
        },
        {
          text: this.$t('vacancies.table.header.date'),
          value: 'creationDate',
          sortable: false,
          filterable: true
        },
        {
          text: '',
          value: 'data-table-expand'
        }
      ]
    },
    data() {
      return this.$store.getters['jobs/getJobs']
    }
  },
  created() {
    this.$vuetify.lang.current = this.$i18n.locale
  },
  async mounted() {
    try {
      await this.$store.dispatch('jobs/GET_JOBS')
    } catch (e) {
    } finally {
      this.loading = false
    }
  },
  destroyed() {
    this.$store.commit('jobs/CLEAR')
  },
  methods: {
    getDateString(dateString) {
      const moment = this.$moment(Date.parse(dateString))
      return moment.format(this.$t('formatter.datetime'))
    },

    async loadDescription() {
      this.loadingDescription = true
      const item = this.expanded[0]
      if (item === undefined || item === null) {
        this.loadingDescription = false
        await Promise.resolve()
      } else {
        await this.$store.dispatch('jobs/GET_JOB', item.id).then((res) => {
          this.loadingDescription = false
        })
      }
    }
  }
}
</script>
