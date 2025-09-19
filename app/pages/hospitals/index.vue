<template>
    <!-- Main Content -->
    <main class="container my-5">
        <!-- Breadcrumb -->
        <Breadcrumb :items="[
            { label: 'Home', link: '/' },
            { label: 'Hospitals', active: true }
        ]" />

        <!-- Filter Section -->
        <div class="filter-section mb-5">
            <div class="row g-3 align-items-center">
                <div class="col-lg-4">
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
                                <path
                                    d="M42 42L33.028 33.012M38 21C38 25.5087 36.2089 29.8327 33.0208 33.0208C29.8327 36.2089 25.5087 38 21 38C16.4913 38 12.1673 36.2089 8.97919 33.0208C5.79107 29.8327 4 25.5087 4 21C4 16.4913 5.79107 12.1673 8.97919 8.97919C12.1673 5.79107 16.4913 4 21 4C25.5087 4 29.8327 5.79107 33.0208 8.97919C36.2089 12.1673 38 16.4913 38 21Z"
                                    stroke="#053862" stroke-width="4" stroke-linecap="round" />
                            </svg>
                        </span>
                        <input type="text" class="form-control" v-model="store.search"
                            placeholder="Enter Hospital Name">
                    </div>
                </div>
                <div class="col-lg-3">
                    <USelectMenu v-model="selectedCountry" :items="countryOptions" placeholder="Select a country"
                        class="w-full rounded h-12 " />
                </div>

                <div class="col-lg-3">
                    <USelectMenu v-model="selectedCity" :items="cityOptions" placeholder="Select city"
                        class="w-full rounded h-12" />
                </div>

                <div class="col-lg-2">
                    <button @click="store.index()" class="search-btn-icon">
                        <Icon name="bi:search" class="text-[#ffffff] w-5 h-5" />Search
                    </button>
                </div>
            </div>
            <!-- <div class="mt-3">
                <NuxtLink to="/advanced-search" class="advanced-search-link d-inline-flex align-items-center">
                    <Icon name="bi:sliders" class="text-[#053862] w-5 h-5" style="margin-right: 5px;" />
                    Advanced Search
                </NuxtLink>
            </div> -->
        </div>

        <!-- Hospital Listings -->
        <div class="listings-header mb-4">
            <h2>Best <span>{{ store.totalHospitals }} Verified</span> Hospitals in the World</h2>
            <p class="text-muted">FlyHospitals uses data science algorithms to deliver a trusted, transparent, and
                objective comparison based on patient demand, review scores, treatment updates, pricing, response speed,
                and clinic certifications.</p>
        </div>

        <div class="hospital-list">
            <template v-if="store.hospitals.length > 0">
                <HospitalListCard v-for="hospital in store.hospitals" :key="hospital.id" :hospital="hospital" />
            </template>
            <div v-else class="text-center text-muted py-5">
                No hospitals found.
            </div>
        </div>

        <!-- Load More Section -->
        <div class="text-center mt-5">
            <p class="text-muted">You've viewed 5 of {{ store.totalHospitals }} hospitals</p>
            <button class="btn btn-primary mt-3 details-btn" style="max-width: 321px; width:100%">Load More</button>
        </div>

        <!--=============== BLOGS SECTION ===============-->
        <BlogList />

    </main>
</template>

<script setup lang="ts">
import { useHospitalStore } from '~/stores/hospital'

const store = useHospitalStore()
await store.loadCountries()
await store.index()

const countryOptions = computed(() =>
    store.countries.map(country => ({ label: country.country_name, value: country.id }))
)

const cityOptions = computed(() =>
    store.cities.map(city => ({ label: city.name, value: city.id }))
)

const selectedCountry = ref<{ label: string; value: any } | null>(
    countryOptions.value.find(c => c.value === store.country_id) || null
)

const selectedCity = ref<{ label: string; value: any } | null>(
    cityOptions.value.find(c => c.value === store.city_id) || null
)

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
