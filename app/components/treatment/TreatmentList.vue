<template>
    <section class="explore-treatment-section">
        <div class="container">
            <div class="section-header">
                <h2>Explore Procedure Type</h2>
                <p>Explore popular procedure and specialities across top hospitals. Find the right care tailored to
                    your medical needs.</p>
            </div>

            <div class="slider-container">
                <button class="slider-arrow prev-arrow prev-treatment">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                   <div v-if="loading">Loading blogs...</div>
                    <div v-else-if="error">{{ error }}</div>
                <div v-else class="slider-grid treatment-grid">
                    <!-- Treatment Card 1 -->
                    <div v-for="treatment in treatments" :key="treatment.id" class="treatment-card">
                        <img :src="config.public.ImageUrl +treatment.image_url"
                            alt="Knee Replacement Surgery">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Toronto, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>{{ treatment.name }}</h3>
                                <span class="rating">4.9<span class="star">★</span></span>
                            </div>
                            <p class="price">Starting from: ${{ treatment?.price??0 }}</p>
                        </div>
                    </div>
                   
                </div>
                <button class="slider-arrow next-arrow next-treatment">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <NuxtLink :to="viewAllLink" class="view-all-btn">View all Procedure</NuxtLink>
            <!-- <a href="#" class="view-all-btn">View all Treatments</a> -->
        </div>
    </section>
</template>

<script setup>
import { computed ,ref} from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
 const config = useRuntimeConfig()
 const  viewAllLink = ref('/procedure')
// ✅ SSR-friendly call
await useAsyncData('treatments', () =>  store.fetchTreatments())

const treatments = computed(() => store.treatments)
const loading = computed(() => store.loading)
const error = computed(() => store.error)
</script>
