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
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" @click="prevSlide" :disabled="currentIndex === 0">
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="slider-grid destination-grid slider-wrapper">
                           <div
            class="slider-track"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
          >
                    <!-- Destination Card 1 -->
                    <div v-for="destination in destinations" class="destination-card">
                        <img :src="destination.image_url??'https://flyhospitals.dev/dumy.jpg'"
                            alt="New York City Skyline">
                        <div class="card-content">
                            <p class="card-subtitle">Looking for medical in</p>
                            <div class="card-title-bar">
                                <h3>{{ destination.country_name }}</h3>
                                <span class="rating">4.5<span class="star">★</span></span>
                            </div>
                            <div class="card-details" >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 22H2" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                        <path
                                            d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                            stroke="black" stroke-width="1.5" />
                                        <path
                                            d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                <p class="m-b-0">
                                    
                                    {{ destination.hospitals_count }} Hospitals
                                  </p>
                                <span class="line"> | </span>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                            fill="black" />
                                    </svg>
                                <p class="m-b-0">
                                   
                                    42 Procedure
                                  </p>
                            </div>
                        </div>
                    </div>
                    <!-- Destination Card 2 -->
                           </div>
                </div>
                <button class="slider-arrow next-arrow next-des" @click="nextSlide"
          :disabled="currentIndex >= maxIndex">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <a href="#" class="view-all-btn">View all Destination</a>
        </div>
    </section>
</template>
<script setup>
import { computed } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
 const config = useRuntimeConfig()
// ✅ SSR-friendly call
await useAsyncData('destinations', () =>  store.fetchMedicalDestination())

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

.card-details .m-b-0 {
  margin-bottom: 0 !important;
}
</style>
