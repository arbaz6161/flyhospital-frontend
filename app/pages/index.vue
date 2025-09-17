<template>
    <div>
        <!--=============== HERO / BANNER  ===============-->
        <HeroSection />

        <!--=============== ABOUT  ===============-->
        <AboutSection />

        <!--=============== TREATMENT SERVICES ===============-->
        <TreatmentServices />

        <!--=============== HOW IT WORKS ===============-->
        <HowItWorks />

        <!--=============== TOP DESTINATIONS ===============-->
        <DestinationList />

        <!--=============== EXPLORE TREATMENT ===============-->
        <TreatmentList />

        <!--=============== POPULAR HOSPITALS ===============-->
        <HospitalSection :hospitals="data.hospitals" />

        <!--=============== BLOGS =============== -->
        <BlogList />

        <!-- MODALS -->
        <!--=============== 1. Modal: PRICE RANGE ===============-->
        <div class="modal fade" id="priceRangeModal" tabindex="-1" aria-labelledby="priceRangeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Select Your Price Range</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div class="col">
                                <label for="minPrice" class="form-label mb-0">From ($)</label>
                                <input type="number" class="form-control" id="minPrice" value="500">
                            </div>
                            <div class="col">
                                <label for="maxPrice" class="form-label mb-0">To ($)</label>
                                <input type="number" class="form-control" id="maxPrice" value="1500">
                            </div>
                        </div>

                        <div class="range-slider-container mb-4">
                            <input type="range" class="form-range custom-range" id="priceRangeMin" min="0" max="100000"
                                value="500">
                            <input type="range" class="form-range custom-range" id="priceRangeMax" min="0" max="100000"
                                value="1500">
                            <div class="range-track"></div>
                            <div class="range-fill"></div>
                            <div class="range-labels">
                                <span class="min-label">$500</span>
                                <span class="max-label">$1,500</span>
                            </div>
                            <div class="range-min-value">$0</div>
                            <div class="range-max-value">$100,000</div>
                        </div>

                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <!--=============== 2. Modal: TREATMENT ===============-->
        <div class="modal fade" id="treatment" tabindex="-1" aria-labelledby="priceRangeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Filter Treatment Type</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div>
                                <label for="">Select Categroy</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select category</option>
                                </select>
                            </div>
                            <div>
                                <label for="">Select Treatment</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select treatment</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <!--=============== 3. Modal: DESTINATION ===============-->
        <div class="modal fade" id="destination" tabindex="-1" aria-labelledby="priceRangeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Destination-Based Discovery</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div>
                                <label for="">Select Country</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select category</option>
                                </select>
                            </div>
                            <div>
                                <label for="">Select City</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select treatment</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HospitalSection from '~/components/hospital/HospitalSection.vue';
import AboutSection from '~/components/landingPage/AboutSection.vue';
import HeroSection from '~/components/landingPage/HeroSection.vue';
import HowItWorks from '~/components/landingPage/HowItWorks.vue';
import TreatmentServices from '~/components/landingPage/TreatmentServices.vue';

const data = useLandingPageStore()
await data.fetchLandingPageData()
</script>
