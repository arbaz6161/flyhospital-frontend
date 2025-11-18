<template>
  <section class="explore-treatment-section">
    <div class="container">
      <div class="section-header">
        <h2>Explore Procedure Type</h2>
        <p>
          Explore popular procedure and specialities across top hospitals.
          Find the right care tailored to your medical needs.
        </p>
      </div>

      <div class="slider-container">
        <!-- Prev Button -->
        <button class="slider-arrow prev-arrow" @click="prevSlide" :disabled="currentIndex === 0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M18.75 23.75L10 15L18.75 6.25"
              stroke="#003D6F"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Treatments -->
        <div class="slider-wrapper">
          <div
            class="slider-track"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
          >
            <div
              v-for="treatment in treatments"
              :key="treatment.id"
              class="treatment-card"
            >
              <NuxtLink
                style="text-decoration: none; color: #053862;"
                :to="`/subprocedure/${treatment.id}?name=${encodeURIComponent(
                  treatment.name
                )}`"
              >
                <img 
                  :src="treatment.image_url??'https://flyhospitals.dev/dumy.jpg'" 
                  alt="Treatment" 
                  loading="lazy"
                  :class="{ 'image-loading': !imageLoaded[treatment.id] }"
                  @load="imageLoaded[treatment.id] = true"
                  @error="imageLoaded[treatment.id] = true"
                />
                <div class="card-content">
                  <p class="location">
                    <Icon
                      name="material-symbols:location-on-outline"
                      style="color:#053862; margin-right:5px; font-size: 18px;"
                    />
                    Toronto, Canada
                  </p>
                  <div class="card-title-bar">
                    <h3>{{ treatment.name }}</h3>
                    <span class="rating">4.9<span class="star">★</span></span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Next Button -->
        <button
          class="slider-arrow next-arrow"
          @click="nextSlide"
          :disabled="currentIndex >= maxIndex"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M11.25 23.75L20 15L11.25 6.25"
              stroke="#003D6F"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <NuxtLink :to="viewAllLink" class="view-all-btn">View all Procedure</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useGeneralStore } from "~/stores/general";

const store = useGeneralStore();
const viewAllLink = ref("/procedure");

// Track image loading state for blur effect
const imageLoaded = reactive({})

// ✅ Data is fetched centrally in index page
// This component just displays the data from the store
// No need to fetch here to avoid duplicate requests

const treatments = computed(() => store.treatments);
const loading = computed(() => store.loading);
const error = computed(() => store.error);

const currentIndex = ref(0);

// how many slides to show at once
const slidesPerView = 4; 
const slideWidth = 100 / slidesPerView; 

// Max index to prevent sliding too far
const maxIndex = computed(() =>
  Math.max(0, treatments.value.length - slidesPerView)
);

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
.slider-container {
  position: relative;
  display: flex;
  align-items: center;
}

.slider-wrapper {
  overflow: hidden;
  flex: 1;
}

.slider-track {
  display: flex;
  transition: transform 0.4s ease-in-out;
  gap:10px
}

.treatment-card {
  flex: 0 0 calc(100% / 4); /* 3 cards per view */
  
}

.slider-arrow {
  background: white;
  border: none;
  cursor: pointer;
  z-index: 10;
}

.slider-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
