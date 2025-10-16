<template>
  <main class="container my-5">
    <!-- Breadcrumb -->
    <Breadcrumb
      :items="[
        { label: 'Home', link: '/' },
        { label: 'All Procedure', link: '/procedure' },
        { label: slug, active: true },
      ]"
    />

    <!-- Hospital Listings -->
    <div class="listings-header mb-4">
      <h2>{{ slug }}</h2>
      <p class="text-muted">
        The FlyHospitals is based on data science algorithms, providing a
        trusted, transparent, and objective comparison. It takes into account
        patient demand, review scores (both positive and negative), the
        frequency of updates to procedure options and prices, response speed,
        and clinic certifications.
      </p>
    </div>

    <!-- Filter Section -->
    <div class="mb-5">
      <div class="row g-3 align-items-center">
        <div class="col-lg-3">
          <USelectMenu
            v-model="selectedCountry"
            :items="countryOptions"
            placeholder="Select a country"
            class="w-full rounded h-12"
          />
        </div>
      </div>
    </div>

    <!-- Hospital List -->
    <div class="hospital-list">
      <div v-if="Hotelstore.isLoading" class="text-center py-5">
        Loading hospitals...
      </div>
      <div v-else-if="Hotelstore.error" class="text-center text-danger py-5">
        {{ Hotelstore.error }}
      </div>
      <div
        v-else-if="Hotelstore.hospitals.length === 0"
        class="text-center text-muted py-5"
      >
        No hospitals found.
      </div>
      <div v-else>
        <HospitalListCard
          v-for="hospital in Hotelstore.hospitals"
          :key="hospital.id"
          :hospital="hospital"
        />
      </div>
    </div>

    <!-- Load More Section -->
    <div class="text-center mt-5">
      <button
        v-if="Hotelstore.hospitals.length < Hotelstore.totalHospitals"
        class="btn btn-primary mt-3 details-btn"
        style="max-width: 321px; width: 100%"
        @click="loadMore"
        :disabled="Hotelstore.isLoading"
      >
        {{ Hotelstore.isLoading ? "Loading..." : "Load More" }}
      </button>
    </div>

    <!-- Blogs Section -->
    <BlogList />
  </main>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useHospitalStore } from "~/stores/hospital";
import { useFilterHospitalStore } from "~/stores/filterhospital";

// Route and stores
const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));
const store = useHospitalStore();
const Hotelstore = useFilterHospitalStore();

// Country options
const countryOptions = computed(() =>
  store.countries.map((country) => ({
    label: country.country_name,
    value: country.id, // or country.slug if the API expects a slug
  }))
);

// Selected country
const selectedCountry = ref<{ label: string; value: string | number } | null>(
  null
);

// Fetch countries and initialize selectedCountry
await useAsyncData("countries", async () => {
  await store.loadCountries();
  // Preselect country if countryslug is in query
  const countryslug = route.query.countryslug as string;
  if (countryslug) {
    const country = store.countries.find(
      (c) => c.slug === countryslug || c.id === countryslug
    );
    if (country) {
      selectedCountry.value = {
        label: country.country_name,
        value: country.id,
      };
      store.country_id = country.id;
    }
  }
});

// Fetch hospitals
const fetchHospitals = async () => {
  const countryslug =
    selectedCountry.value?.value || route.query.countryslug || "";
  await Hotelstore.fetchHospitals(countryslug as string, slug.value);
};

// Initial fetch
await fetchHospitals();

// Watch for country changes
watch(selectedCountry, async (newVal) => {
  store.country_id = newVal?.value || "";
  store.city_id = "";
  if (newVal?.value) {
    await store.loadCities(newVal.value);
  }
  await fetchHospitals();
});

// Watch for slug changes (if user navigates to a different procedure)
watch(slug, async () => {
  await fetchHospitals();
});

// Reset store on unmount
onUnmounted(() => {
  Hotelstore.reset();
});

// Load more hospitals (pagination)
const loadMore = async () => {
  // Assuming API supports pagination with a page parameter
  const nextPage = Math.ceil(Hotelstore.hospitals.length / 10) + 1; // Adjust based on API pagination
  const countryslug =
    selectedCountry.value?.value || route.query.countryslug || "";
  await Hotelstore.fetchHospitals(countryslug as string, slug.value);
};
</script>
