<template>
  <section class="destinations-section">
    <div class="container">
      <div class="section-header">
        <h2>Top Medical Tourism Destinations</h2>
        <p>Discover the world's leading destinations for quality medical care. Trusted by thousands seeking
          expert procedures and peace of mind.</p>
      </div>

      <div class="slider-container">
        <button class="slider-arrow prev-arrow prev-des">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
            @click="prevSlide" :disabled="currentIndex === 0">
            <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="slider-grid destination-grid slider-wrapper">
          <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }">
            <div v-for="destination in destinations" class="destination-card">
              <img :src="destination.image_url ?? 'https://flyhospitals.dev/dumy.jpg'" alt="New York City Skyline"
                loading="lazy" :class="{ 'image-loading': !imageLoaded[destination.id] }"
                @load="imageLoaded[destination.id] = true" @error="imageLoaded[destination.id] = true">
              <div class="card-content">
                <p class="card-subtitle">Looking for medical in</p>
                <div class="card-title-bar">
                  <h3>
                    <NuxtLink style="text-decoration: none;color: #053862;"
                      :to="`/hospitals?country_id=${destination.id}`">
                      {{ destination.country_name }}
                    </NuxtLink>
                  </h3>
                  <span class="rating">4.5<span class="star">★</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="slider-arrow next-arrow next-des" @click="nextSlide" :disabled="currentIndex >= maxIndex">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <NuxtLink to="/destinations" class="view-all-btn">View all Destination</NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
const config = useRuntimeConfig()

// Track image loading state for blur effect
const imageLoaded = reactive({})

// ✅ Data is fetched centrally in index page
// This component just displays the data from the store
// No need to fetch here to avoid duplicate requests

const destinations = computed(() => store.destinations)
const loading = computed(() => store.loading)
const error = computed(() => store.error)


const currentIndex = ref(0);

// how many slides to show at once
const slidesPerView = 4;
const slideWidth = 100 / slidesPerView;

// Max index to prevent sliding too far
const maxIndex = computed(() =>
  Math.max(0, destinations.value.length - slidesPerView)
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
  gap: 10px
}

.treatment-card {
  flex: 0 0 calc(100% / 4);
  /* 3 cards per view */

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

.card-details .m-b-0 {
  margin-bottom: 0 !important;
}
</style>
