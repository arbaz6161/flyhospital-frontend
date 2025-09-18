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
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <!-- Dynamic Restaurant Cards -->
                <div class="slider-grid">
                    <div v-for="(restaurant, index) in visibleRestaurants" :key="index" class="hotel-card">
                        <img :src="restaurant.image" :alt="restaurant.name" />
                        <div class="card-content">
                            <h3>
                                {{ useTruncateText(restaurant?.name || "", 20) }}
                                <span class="rating">
                                    {{ restaurant.rating }}
                                    <span class="star">★</span>
                                </span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 
                       13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                       9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 
                       2.5-2.5 2.5 1.12 2.5 2.5-1.12 
                       2.5-2.5 2.5z" />
                                </svg>
                                {{ restaurant.location }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Next Button -->
                <button class="slider-arrow next-arrow" @click="nextSlide">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <a href="#" class="view-all-btn">View all restaurants</a>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue"

const restaurants = ref([
    {
        name: "Alo Restaurant",
        rating: 4.7,
        location: "Toronto, Canada",
        image: "https://alofoodgroup.com/wp-content/uploads/2025/07/10yearsofalo.png",
    },
    {
        name: "Tiflisi, Toronto",
        rating: 4.6,
        location: "Toronto, Canada",
        image: "https://globaltorontoeats.com/wp-content/uploads/2022/05/PXL_20210530_200908941-1024x768.jpg",
    },
    {
        name: "Conejo Negro",
        rating: 4.8,
        location: "Toronto, Canada",
        image: "https://torontolife.mblycdn.com/tl/resized/2024/05/w1280/14_conejo_FINAL02.jpg",
    },
    {
        name: "Estiatorio Milos Toronto",
        rating: 4.9,
        location: "Toronto, Canada",
        image: "https://torontolife.mblycdn.com/uploads/tl/2024/09/toronto-restaurants-milos-greek-financial-district-exterior.jpg",
    },
])

const currentIndex = ref(0)
const itemsPerPage = 5

const visibleRestaurants = computed(() => {
    return restaurants.value.slice(
        currentIndex.value,
        currentIndex.value + itemsPerPage
    )
})

function nextSlide() {
    if (currentIndex.value + itemsPerPage < restaurants.value.length) {
        currentIndex.value++
    }
}

function prevSlide() {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}
</script>
