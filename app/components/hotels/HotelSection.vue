<template>
    <section class="popular-hotels-section">
        <div class="container">
            <div class="section-header">
                <h2>Explore Nearby Hotels</h2>
                <p>
                    Explore nearby hotels that offer comfort and convenience during
                    your stay. Enjoy a restful retreat just minutes away from our
                    premier medical facilities.
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

                <!-- Dynamic Hotel Cards -->
                <div class="slider-grid">
                    <div v-for="(hotel, index) in visibleHotels" :key="index" class="hotel-card">
                        <img :src="hotel.image" :alt="hotel.name" />
                        <div class="card-content">
                            <h3>
                                {{ useTruncateText(hotel?.name || "", 20) }}
                                <span class="rating">
                                    {{ hotel.rating }}
                                    <span class="star">★</span>
                                </span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 
                                           9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 
                                           2.5-2.5 2.5 1.12 2.5 2.5-1.12 
                                           2.5-2.5 2.5z" />
                                </svg>
                                {{ hotel.location }}
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

            <a href="#" class="view-all-btn">View all Hotels</a>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue"

const hotels = ref([
    {
        name: "Fairmont Royal York",
        rating: 4.8,
        location: "Toronto, Canada",
        image: "https://media.istockphoto.com/id/1026316974/photo/famous-landmark-fairmont-royal-york-hotel-in-toronto-facing-ontario-lake-harbor.jpg?s=612x612&w=0&k=20&c=cEmMShxZYz4Eq_GlKK-_aKH9eZe-UEJdd3lW51DJM54="
    },
    {
        name: "Toronto Marriott City Centre Hotel",
        rating: 4.5,
        location: "Toronto, Canada",
        image: "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/187/11/40/mc-yyzcc-hotel-exterior--11401_Classic-Hor_O.jpg?tr=w-360%2Ch-379%2Cfo-auto"
    },
    {
        name: "Chelsea Hotel, Toronto",
        rating: 4.6,
        location: "Toronto, Canada",
        image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/chelsea-exterior-night:Medium?wid=674&hei=379"
    },
    {
        name: "Hotel X Toronto, A Destination By Hyatt",
        rating: 4.9,
        location: "Toronto, Canada",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/675364162.jpg?k=f1d0f0701ca32ed28fcccf20909dd69754f84bd3676d3e002ded67e6e94b6e03&o=&hp=1"
    }
])

const currentIndex = ref(0)
const itemsPerPage = 4

const visibleHotels = computed(() => {
    return hotels.value.slice(currentIndex.value, currentIndex.value + itemsPerPage)
})

function nextSlide() {
    if (currentIndex.value + itemsPerPage < hotels.value.length) {
        currentIndex.value++
    }
}

function prevSlide() {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}
</script>