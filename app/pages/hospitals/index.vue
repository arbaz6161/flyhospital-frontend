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
          <USelectMenu 
            :model-value="selectedCountry as any"
            @update:model-value="(val) => selectedCountry = val as any"
            :items="countryOptions" 
            placeholder="Select a country"
            class="w-full rounded h-12" />
        </div>

        <!-- City -->
        <div class="col-lg-3">
          <USelectMenu 
            :model-value="selectedCity as any"
            @update:model-value="(val) => selectedCity = val as any"
            :items="cityOptions" 
            placeholder="Select city"
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
        ClickHospital uses data science algorithms to deliver a trusted, transparent, and objective comparison.
      </p>
    </div>

    <div class="hospital-list">
      <!-- Show loader on first load OR when filters are changing -->
      <div v-if="(pending && isFirstLoad && store.hospitals.length === 0) || (isFilterChanging)" class="text-center py-5" style="position: relative; min-height: 200px;">
        <Loader />
      </div>
      <div v-else>
        <template v-if="store.hospitals.length > 0">
          <HospitalListCard v-for="hospital in store.hospitals" :key="hospital.id" :hospital="hospital" />
          
          <!-- Show loading indicator at bottom during pagination (not filter changes) -->
          <div v-if="store.loader && !isFilterChanging" class="text-center py-4" style="position: relative; min-height: 100px;">
            <Loader />
          </div>
        </template>
        <div v-else-if="!pending && !store.loader && !isFilterChanging" class="text-center text-muted py-5">
          No hospitals found.
        </div>
      </div>
    </div>

    <!-- Load More/Less Section -->
    <div class="text-center mt-5" v-if="store.hospitals.length > 0">
      <p class="text-muted mb-3">
        Showing {{ store.hospitals.length }} of {{ store.totalHospitals }} hospitals
      </p>

      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <!-- Load Less button (show if more than initial load) -->
        <button 
          v-if="store.currentPage > 1"
          @click="store.loadLess()" 
          :disabled="store.loader"
          class="btn btn-primary details-btn"
          style="min-width: 150px;">
          Load Less
        </button>

        <!-- Load More button (show if more pages available) -->
        <button 
          v-if="store.currentPage < store.lastPage"
          @click="store.loadMore()" 
          :disabled="store.loader"
          class="btn btn-primary details-btn"
          style="min-width: 200px;">
          {{ store.loader ? 'Loading...' : 'Load More Hospitals' }}
        </button>
      </div>

      <!-- Show message when all loaded -->
      <p v-if="store.currentPage >= store.lastPage" class="text-muted mt-3 mb-0">
        All hospitals loaded
      </p>
    </div>

    <!-- Blogs - Lazy loaded for better performance -->
    <LazyBlogList />
  </main>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useHospitalListStore } from '~/stores/hospitallist'
import { useRoute, useRouter } from '#imports'
import Loader from '~/components/Loader.vue'

const store = useHospitalListStore()
const route = useRoute()
const router = useRouter()

// ✅ Initialize filters from query params or defaults
store.country_id = route.query.country_id ? String(route.query.country_id) : ''
store.city_id = route.query.city_id ? String(route.query.city_id) : ''
store.search = route.query.search ? String(route.query.search) : ''

// ✅ Optimized: Check cache first, then load in parallel
const needsCountries = store.countries.length === 0

// ✅ Load countries on client-side only (non-blocking, not critical for SEO)
// Use process.client for Nuxt 3 compatibility
if (process.client && needsCountries) {
  store.loadCountries().catch(() => {}) // Fire and forget
}

// ✅ Track if this is the very first load (not filter changes)
const isFirstLoad = ref(true)
const isFilterChanging = ref(false)

// ✅ SSR-friendly: Load hospitals with lazy option (doesn't block initial render)
// Use unique key based on filters for proper caching
const dataKey = `hospitals-${store.country_id || 'all'}-${store.city_id || 'all'}-${store.search || 'all'}`
const { pending } = await useAsyncData(dataKey, async () => {
  // Don't show loader for initial load (we use pending state instead)
  await store.list(1, false)
  
  // Mark that we've completed the first load
  if (isFirstLoad.value) {
    isFirstLoad.value = false
  }
  
  // Reset filter changing flag after load completes
  isFilterChanging.value = false
  
  // Load cities asynchronously (non-blocking) - don't await
  if (store.country_id) {
    store.loadCities(store.country_id).catch(() => {
      // Silently fail - cities are optional
    })
  }
}, {
  lazy: true, // Don't block initial render - page shows immediately
  default: () => null, // Provide default to prevent blocking
  server: true // Still fetch on server for SEO
})

// ✅ Options with default "Select ... "
const countryOptions = computed(() => [
  { label: 'Select Country', value: '' },
  ...store.countries.map(c => ({ label: c.country_name, value: String(c.id) }))
])

const cityOptions = computed(() => [
  { label: 'Select City', value: '' },
  ...store.cities.map(city => ({ label: city.name, value: String(city.id) }))
])

// ✅ Select models - computed properties that sync with store
const selectedCountry = computed<{ label: string; value: string } | null>({
  get: () => {
    const found = countryOptions.value.find(c => c.value === store.country_id)
    return found ?? null
  },
  set: (val: { label: string; value: string } | null | undefined) => {
    store.country_id = val?.value ?? ''
  }
})

const selectedCity = computed<{ label: string; value: string } | null>({
  get: () => {
    const found = cityOptions.value.find(c => c.value === store.city_id)
    return found ?? null
  },
  set: (val: { label: string; value: string } | null | undefined) => {
    store.city_id = val?.value ?? ''
  }
})

// ✅ Apply filters -> sync with URL and reload hospitals
const applyFilters = async () => {
  isFilterChanging.value = true
  const query: Record<string, string> = {}
  if (store.country_id) query.country_id = store.country_id
  if (store.city_id) query.city_id = store.city_id
  if (store.search) query.search = store.search

  await router.push({ path: '/hospitals', query })
  await store.list(1)
  isFilterChanging.value = false
}

// ✅ Watch for filter changes (search, country, city) to show loader
watch([() => store.search, () => store.country_id, () => store.city_id], ([newSearch, newCountry, newCity], [oldSearch, oldCountry, oldCity]) => {
  // Only trigger if filters actually changed (not initial setup)
  if (isFirstLoad.value) return
  
  const searchChanged = newSearch !== oldSearch
  const countryChanged = newCountry !== oldCountry
  const cityChanged = newCity !== oldCity
  
  if (searchChanged || countryChanged || cityChanged) {
    isFilterChanging.value = true
    // Reload hospitals when filters change
    store.list(1).finally(() => {
      isFilterChanging.value = false
    })
  }
})

// ✅ Watch country changes for loading cities
watch(() => store.country_id, (newCountryId, oldCountryId) => {
  // Reset city when country changes
  if (newCountryId !== oldCountryId) {
    store.city_id = ''
    selectedCity.value = null
  }
  
  // Load cities for new country (non-blocking)
  if (newCountryId) {
    store.loadCities(newCountryId).catch(err => {
      console.error('Failed to load cities:', err)
    })
  } else {
    store.cities = []
  }
})
</script>
