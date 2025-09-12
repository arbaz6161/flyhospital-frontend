<template>
    <section class="popular-hospitals-section">
        <div class="container">
            <!-- Header -->
            <div class="section-header">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>

            <!-- Slider -->
            <div class="slider-container">
                <button class="slider-arrow prev-arrow prev-sss" aria-label="Previous slide">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <div class="slider-grid hospital-grid">
                    <HospitalCard v-for="hospital in hospitals" :key="hospital.id" :hospital="hospital" />
                </div>

                <button class="slider-arrow next-arrow next-sss" aria-label="Next slide">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <!-- View all link -->
            <NuxtLink :to="viewAllLink" class="view-all-btn">View all Hospitals</NuxtLink>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    hospitals: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: "Explore Popular Hospitals and Clinics"
    },
    description: {
        type: String,
        default: "Discover our most sought-after treatments in neurology, plastic surgery, dentistry, and oncology expertly performed for optimal care and results."
    },
    viewAllLink: {
        type: String,
        default: "/hospitals"
    }
})
</script>
