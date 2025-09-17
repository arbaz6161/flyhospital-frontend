<template>
    <!-- Main Content -->
    <main class="container my-5">
        <!-- Breadcrumb -->
        <Breadcrumb :items="[
            { label: 'Treatment abroad', link: '#' },
            { label: 'All specialities', active: true }
        ]" />

        <!-- Filter Section -->
        <div class="filter-section mb-5">
            <div class="row g-3 align-items-center">
                <div class="col-lg-4">
                    <div class="input-group">
                        <span class="input-group-text bg-white">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
                                <path
                                    d="M42 42L33.028 33.012M38 21C38 25.5087 36.2089 29.8327 33.0208 33.0208C29.8327 36.2089 25.5087 38 21 38C16.4913 38 12.1673 36.2089 8.97919 33.0208C5.79107 29.8327 4 25.5087 4 21C4 16.4913 5.79107 12.1673 8.97919 8.97919C12.1673 5.79107 16.4913 4 21 4C25.5087 4 29.8327 5.79107 33.0208 8.97919C36.2089 12.1673 38 16.4913 38 21Z"
                                    stroke="#053862" stroke-width="4" stroke-linecap="round" />
                            </svg>
                        </span>
                        <input type="text" class="form-control" placeholder="Enter name, procedure, or condition">
                    </div>
                </div>
                <div class="col-lg-3">
                    <select class="form-select">
                        <option selected>Select a country</option>
                    </select>
                </div>
                <div class="col-lg-3">
                    <select class="form-select">
                        <option selected>Select a Price Range</option>
                    </select>
                </div>
                <div class="col-lg-2">
                    <button class="search-btn-icon">
                        <NuxtIcon name="bi:search" /> Search
                    </button>
                </div>
            </div>
            <div class="mt-3">
                <a href="#" class="advanced-search-link"><i class="bi bi-sliders"></i> Advanced Search</a>
            </div>
        </div>

        <!-- Hospital Listings -->
        <div class="listings-header mb-4">
            <h2>Best <span>1654 Verified</span> Hospitals in the World</h2>
            <p class="text-muted">FlyHospitals uses data science algorithms to deliver a trusted, transparent, and
                objective comparison based on patient demand, review scores, treatment updates, pricing, response speed,
                and clinic certifications.</p>
        </div>

        <div class="hospital-list">
            <HospitalListCard v-for="hospital in store.hospitals" :key="hospital.id" :hospital="hospital" />
        </div>

        <!-- Load More Section -->
        <div class="text-center mt-5">
            <p class="text-muted">You've viewed 5 of 1654 hospitals</p>
            <button class="btn btn-primary mt-3 details-btn" style="max-width: 321px; width:100%">Load More</button>
        </div>

        <!--=============== BLOGS SECTION ===============-->
        <BlogList />

    </main>
</template>

<script setup lang="ts">
import { useHospitalStore } from '~/stores/hospital'

const store = useHospitalStore()
await store.index()
</script>