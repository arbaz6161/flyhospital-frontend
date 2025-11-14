<template>
  <main class="container my-5">
    <!-- Breadcrumb -->
    <Breadcrumb :items="[
      { label: 'Home', link: '/' },
      { label: 'Hospitals', active: true }
    ]" />

    <!-- Filter Section -->
    <div class="filter-section mb-5">
      <div class="row g-3 align-items-center">
        <!-- Search -->
        <div class="col-lg-4">
          <div class="input-group">
            <span class="input-group-text bg-white">
              <Icon name="bi:search" class="text-[#053862] w-5 h-5" />
            </span>
            <input type="text" class="form-control" v-model="store.search" placeholder="Enter Hospital Name" />
          </div>
        </div>

        <!-- Country -->
        <div class="col-lg-3">
          <USelectMenu v-model="selectedCountry" :items="countryOptions" placeholder="Select a country"
            class="w-full rounded h-12" />
        </div>

        <!-- City -->
        <div class="col-lg-3">
          <USelectMenu v-model="selectedCity" :items="cityOptions" placeholder="Select city"
            class="w-full rounded h-12" />
        </div>

        <!-- Search button -->
        <div class="col-lg-2">
          <button @click="applyFilters" class="search-btn-icon">
            <Icon name="bi:search" class="text-[#ffffff] w-5 h-5" /> Search
          </button>
        </div>
      </div>
    </div>

    <!-- Hospital Listings -->
    <div class="listings-header mb-4">
      <h2>
        Best <span>{{ store.totalHospitals }} Verified</span> Hospitals in the World
      </h2>
      <p class="text-muted">
        FlyHospitals uses data science algorithms to deliver a trusted, transparent, and objective comparison.
      </p>
    </div>

    <div class="hospital-list">
      <span v-if="store.loader"> Loading ... </span>
      <div v-else>
        <template v-if="store.hospitals.length > 0">
          <HospitalListCard v-for="hospital in store.hospitals" :key="hospital.id" :hospital="hospital" />
        </template>
        <div v-else class="text-center text-muted py-5">
          No hospitals found.
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="text-center mt-5" v-if="store.hospitals.length > 0">
      <p class="text-muted">
        Page {{ store.currentPage }} of {{ store.lastPage }} <br />
        Showing {{ store.hospitals.length }} of {{ store.totalHospitals }} hospitals
      </p>

      <div class="d-flex justify-content-center gap-3">
        <button v-if="store.currentPage > 1" @click="store.loadPrevious()" class="btn btn-primary details-btn">
          Previous
        </button>

        <button v-if="store.currentPage < store.lastPage" @click="store.loadMore()" class="btn btn-primary details-btn">
          Next
        </button>
      </div>
    </div>

    <!-- Blogs -->
    <BlogList />
  </main>
</template>

<script setup lang="ts">
import { useHospitalListStore } from '~/stores/hospitallist'
import { useRoute, useRouter } from '#imports'

const store = useHospitalListStore()
const route = useRoute()
const router = useRouter()

// Load countries on mount
await store.loadCountries()

store.country_id = ''
store.city_id = ''
store.search = ''

// ✅ On initial load, sync query params into store
if (route.query.country_id) store.country_id = String(route.query.country_id)
if (route.query.city_id) store.city_id = String(route.query.city_id)
if (route.query.search) store.search = String(route.query.search)

// Load dependent data
if (store.country_id) await store.loadCities(store.country_id)

// Fetch hospitals
await store.list()

// Options with default "Select ... "
const countryOptions = computed(() => [
  { label: 'Select Country', value: '' },
  ...store.countries.map(c => ({ label: c.country_name, value: c.id }))
])
const cityOptions = computed(() => [
  { label: 'Select City', value: '' },
  ...store.cities.map(city => ({ label: city.name, value: city.id }))
])

// Select models
const selectedCountry = computed({
  get: () => countryOptions.value.find(c => c.value == store.country_id) || null,
  set: (val) => {
    store.country_id = val?.value || ''
  }
})

const selectedCity = computed({
  get: () => cityOptions.value.find(c => c.value == store.city_id) || null,
  set: (val) => {
    store.city_id = val?.value || ''
  }
})

// Apply filters -> sync with URL
const applyFilters = async () => {
  const query: any = {}
  if (store.country_id) query.country_id = store.country_id
  if (store.city_id) query.city_id = store.city_id
  if (store.search) query.search = store.search

  await router.push({ path: '/hospitals', query })
  await store.list(1)
}

// Watch country changes
watch(selectedCountry, (newVal) => {
  store.country_id = newVal?.value || ''
  store.city_id = ''
  if (newVal?.value) store.loadCities(newVal.value)
})

// Watch city changes
watch(selectedCity, (newVal) => {
  store.city_id = newVal?.value || ''
})
</script>
