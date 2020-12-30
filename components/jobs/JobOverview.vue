<template>
  <v-card class="ma-0 pa-0" tile>
    <v-toolbar>
      <v-toolbar-title>
        {{ $t('common.jobs') }}
        <v-chip class="ma-0 pa-2" color="secondary" small>
          <strong>{{ jobs.length }}</strong>
        </v-chip>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          :disabled="isLoading"
          aria-label="Filter"
          icon
          @click="showFilter = !showFilter"
        >
          <v-icon>mdi-filter</v-icon>
        </v-btn>
        <v-btn
          :disabled="isLoading"
          aria-label="Refresh"
          icon
          @click="loadJobs"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-fade-transition>
      <v-container v-show="showFilter" fluid>
        <v-row no-gutters>
          <v-text-field
            v-model="textFilter"
            :label="$t('page.job.filter.free_text_search')"
            class="mx-2"
            clearable
            dense
            outlined
          />
          <v-combobox
            v-model="selectedLocations"
            :items="locations"
            :label="$t('page.job.filter.locations')"
            class="mx-2"
            clearable
            dense
            multiple
            outlined
          />
          <v-combobox
            v-model="selectedCompanies"
            :items="companies"
            :label="$t('page.job.filter.companies')"
            class="mx-2"
            clearable
            dense
            multiple
            outlined
          />
        </v-row>
      </v-container>
    </v-fade-transition>

    <v-container fluid>
      <v-row v-show="isLoading" no-gutters>
        <v-progress-linear color="primary" height="8" indeterminate />
      </v-row>
      <v-row v-show="!isLoading" no-gutters>
        <job-offer-card
          v-for="job in jobs"
          :id="job.id"
          :key="job.id"
          :company="job.company"
          :company-logo="job.company_logo"
          :company-url="job.company_url"
          :created-at="job.created_at"
          :job-title="job.title"
          :job-type="job.type"
          :location="job.location"
          :url="job.url"
          class="ma-2"
        />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import JobOfferCard from '~/components/jobs/JobOfferCard'

export default {
  components: {
    JobOfferCard
  },
  data() {
    return {
      isLoading: true,
      selectedCompanies: [],
      selectedLocations: [],
      showFilter: false,
      textFilter: ''
    }
  },
  computed: {
    companies() {
      return this.$store.getters['jobs/getCompanies']
    },
    jobs() {
      let jobs = this.$store.getters['jobs/getJobs']

      if (!!this.textFilter && this.textFilter.length > 0) {
        jobs = jobs.filter((job) =>
          job.description.toLowerCase().includes(this.textFilter.toLowerCase())
        )
      }

      if (this.selectedLocations.length > 0) {
        jobs = jobs.filter((job) =>
          this.selectedLocations.includes(job.location)
        )
      }

      if (this.selectedCompanies.length > 0) {
        jobs = jobs.filter((job) =>
          this.selectedCompanies.includes(job.company)
        )
      }

      return jobs
    },
    locations() {
      return this.$store.getters['jobs/getLocations']
    }
  },
  mounted() {
    this.loadJobs()
  },
  methods: {
    loadJobs() {
      this.isLoading = true
      this.$store.commit('jobs/CLEAR')
      this.$store.dispatch('jobs/GET_JOBS').then((el) => {
        this.isLoading = false
      })
    }
  }
}
</script>
