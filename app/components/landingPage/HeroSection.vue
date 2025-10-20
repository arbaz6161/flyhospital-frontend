<template>
  <section class="hero-section">
    <div class="hero-layout">
      <div class="hero-text">
        <h1>
          Find the Right Hospital Anywhere <span>in the World.</span>
        </h1>
        <p>
          FlyHospitals helps you explore and connect with internationally accredited hospitals,
          based on your procedure needs, budget, and destination.
        </p>

        <!-- Search -->
        <div class="search-container">
          <h3>Start Your Medical Search</h3>
          <div class="search-bar">
            <input
              type="text"
              v-model="store.search"
              placeholder="Search hospitals, treatments or countries..."
            />
            <a href="#" @click.prevent="submitSearch">Search</a>
          </div>

          <!-- Active Filters Chips -->
          <div class="active-filters" v-if="hasActiveFilters">
            <!-- Treatment -->
            <div class="filter-chip" v-if="store.treatment_id">
              {{ getTreatmentName(store.treatment_id) }}
              <button class="chip-close" @click="clearTreatment">×</button>
            </div>

            <!-- Category -->
            <div class="filter-chip" v-if="store.category_id">
              {{ getCategoryName(store.category_id) }}
              <button class="chip-close" @click="clearCategory">×</button>
            </div>

            <!-- Destination -->
            <div class="filter-chip" v-if="store.country_id || store.city_id">
              {{ getDestinationName(store.country_id, store.city_id) }}
              <button class="chip-close" @click="clearDestination">×</button>
            </div>
          </div>

          <!-- Filter buttons -->
          <div class="filters">
            <button class="filter-btn" @click="showTreatmentModal = true">
              <Icon name="streamline-pixel:interface-essential-setting-slide" /> Filter by Procedure
            </button>
            <button class="filter-btn" @click="showDestinationModal = true">
              <Icon name="uiw:map" /> Destination-Based Discovery
            </button>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img
          src="~/assets/img/banner.jpg"
          alt="Patients at a hospital reception"
          class="rounded-left-bottom"
        />
      </div>
    </div>
  </section>

  <!-- ================= Treatment Modal ================= -->
  <div v-if="showTreatmentModal" class="modal-backdrop">
    <div class="modal-dialog modal-dialog-centered card herocard">
      <div class="modal-content card-body">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title">Filter Procedure Type</h5>
          <button type="button" class="btn-close" @click="showTreatmentModal = false"></button>
        </div>
        <div class="modal-body pt-0">
          <div class="row g-2 align-items-center mb-3">
            <div>
              <label>Procedure</label>
              <br>
              <select class="form-control" v-model="selectedCategoryId">
                <option value="">Select procedure</option>
                <option v-for="cat in categoryOptions" :key="cat.value" :value="cat.value">
                  {{ cat.label }}
                </option>
              </select>
            </div>
            <div>
              <label>Procedure Type</label>
              <select class="form-control" v-model="selectedTreatmentId">
                <option value="">Select procedure type</option>
                <option v-for="tr in treatmentOptions" :key="tr.value" :value="tr.value">
                  {{ tr.label }}
                </option>
              </select>
            </div>
          </div>
          <button type="button" class="btn btn-primary w-100" @click="applyTreatmentFilter">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= Destination Modal ================= -->
  <div v-if="showDestinationModal" class="modal-backdrop">
    <div class="modal-dialog modal-dialog-centered card herocard">
      <div class="modal-content card-body">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title mb-1">Destination-Based Discovery</h5>
          <button type="button" class="btn-close" @click="showDestinationModal = false"></button>
        </div>
        <div class="modal-body pt-0">
          <div class="row g-2 align-items-center mb-3">
            <div>
              <label>Country</label>
              <select class="form-control" v-model="selectedCountryId">
                <option value="">Select country</option>
                <option v-for="c in countryOptions" :key="c.value" :value="c.value">
                  {{ c.label }}
                </option>
              </select>
            </div>
            <div>
              <label>City</label>
              <select class="form-control" v-model="selectedCityId">
                <option value="">Select city</option>
                <option v-for="city in cityOptions" :key="city.value" :value="city.value">
                  {{ city.label }}
                </option>
              </select>
            </div>
          </div>
          <button type="button" class="btn btn-primary w-100" @click="applyDestinationFilter">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useHospitalStore } from "~/stores/hospital";

const router = useRouter();
const store = useHospitalStore();

const showTreatmentModal = ref(false);
const showDestinationModal = ref(false);

// Treatment state (use only ID instead of object)
const selectedCategoryId = ref<string | number | "">("");
const selectedTreatmentId = ref<string | number | "">("");

// Destination state (use only ID instead of object)
const selectedCountryId = ref<string | number | "">("");
const selectedCityId = ref<string | number | "">("");

// ===== Country & City Options =====
await store.loadCountries();
const countryOptions = computed(() =>
  store.countries.map((country) => ({ label: country.country_name, value: country.id }))
);

const cityOptions = computed(() =>
  store.cities.map((city) => ({ label: city.name, value: city.id }))
);

// ===== Category & Treatment Options =====
await store.loadprocedure();
const categoryOptions = computed(() =>
  store.procedure.map((cat) => ({ label: cat.name, value: cat.id }))
);
const treatmentOptions = computed(() =>
  store.subprocedure.map((t) => ({ label: t.name, value: t.id }))
);

// ===== Watchers =====

// Country → Load Cities
watch(selectedCountryId, async (newVal) => {
  store.country_id = newVal || "";
  store.city_id = "";
  selectedCityId.value = "";
  if (newVal) await store.loadCities(newVal);
});

// City
watch(selectedCityId, (newVal) => {
  store.city_id = newVal || "";
});

// Category → Load Treatments
watch(selectedCategoryId, async (newVal) => {
  store.category_id = newVal || "";
  store.treatment_id = "";
  selectedTreatmentId.value = "";
  if (newVal) await store.loadSubprocedure(newVal);
});

// Treatment
watch(selectedTreatmentId, (newVal) => {
  store.treatment_id = newVal || "";
});

// ===== Apply Filters =====
const applyTreatmentFilter = () => {
  showTreatmentModal.value = false;
};
const applyDestinationFilter = () => {
  showDestinationModal.value = false;
};

const clearTreatment = () => {
  store.treatment_id = null;
  selectedTreatmentId.value = "";
};
const clearCategory = () => {
  store.category_id = null;
  selectedCategoryId.value = "";
  selectedTreatmentId.value = "";
};
const clearDestination = () => {
  store.country_id = null;
  store.city_id = null;
  selectedCountryId.value = "";
  selectedCityId.value = "";
};

// ===== Helpers =====
const getTreatmentName = (id: string | null) => {
  const tr = treatmentOptions.value.find((t) => t.value == id);
  return tr ? tr.label : "Treatment";
};
const getCategoryName = (id: string | null) => {
  const cat = categoryOptions.value.find((c) => c.value == id);
  return cat ? cat.label : "Category";
};
const getDestinationName = (country: string | null, city: string | null) => {
  const c = countryOptions.value.find((cc) => cc.value == country);
  const ct = cityOptions.value.find((ci) => ci.value == city);
  if (c && ct) return `${ct.label}, ${c.label}`;
  if (c) return c.label;
  return "Destination";
};

const hasActiveFilters = computed(() => {
  return store.category_id || store.treatment_id || store.country_id || store.city_id;
});

// ===== Submit Search =====
const submitSearch = () => {
  const query: Record<string, any> = {};
  if (store.search) query.search = store.search;
  if (store.country_id) query.country_id = store.country_id;
  if (store.city_id) query.city_id = store.city_id;
  if (store.category_id) query.category_id = store.category_id;
  if (store.treatment_id) query.treatment_id = store.treatment_id;

  router.push({ path: "/hospitals", query });
};
</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;
}
.filter-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #f0f4f8;
  border-radius: 6px;
  font-size: 14px;
}
.chip-close {
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
}
.herocard {
    width: 40% !important;
}
</style>
