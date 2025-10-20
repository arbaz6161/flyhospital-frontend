<template>
  <section class="popular-hotels-section">
    <div class="container">
      <div class="section-header">
        <h2>Explore Nearby Restaurants</h2>
        <p>
          Discover the best dining spots just around the corner. Savor local
          flavors and unique cuisines that await you!
        </p>
      </div>

      <div class="slider-container">
        <!-- Prev Button -->
        <button class="slider-arrow prev-arrow" @click="prevSlide">
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

        <!-- Dynamic Restaurant Cards -->
        <div class="slider-grid">
          <div
            v-for="(restaurant, index) in visibleRestaurants"
            :key="index"
            class="hotel-card"
          >
            <img :src="restaurant.image_url??'https://flyhospitals.dev/dumy.jpg'" :alt="restaurant.name" />
            <div class="card-content">
              <h3>
                {{ useTruncateText(restaurant?.name || "", 20) }}
                <span class="rating">
                  {{ restaurant.rating }}
                  <span class="star">★</span>
                </span>
              </h3>
               <a
                :key="restaurant.id" 
                            :href="restaurant.google_map_location"
                            class="btn btn-sm btn-light mt-2">
                            <Icon name="material-symbols:location-on-outline"
                                style="color:#053862; margin-right:5px; font-size: 18px;" />
                            Google Map
                    </a>
                
            </div>
          </div>
        </div>

        <!-- Next Button -->
        <button class="slider-arrow next-arrow" @click="nextSlide">
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
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue"

// ✅ use defineProps
const props = defineProps({
  restaurants: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const itemsPerPage = 5

// ✅ use props.restaurants instead of restaurants.value
const visibleRestaurants = computed(() => {
  return props.restaurants.slice(
    currentIndex.value,
    currentIndex.value + itemsPerPage
  )
})

function nextSlide() {
  if (currentIndex.value + itemsPerPage < props.restaurants.length) {
    currentIndex.value++
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
