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
        <HospitalSection :hospitals="store.hospitals" />

        <!--=============== BLOGS =============== -->
        <BlogList />

      
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
import {  useAsyncData  } from "#imports";
import AboutSection from '~/components/landingPage/AboutSection.vue';
import HeroSection from '~/components/landingPage/HeroSection.vue';
import HowItWorks from '~/components/landingPage/HowItWorks.vue';
import TreatmentServices from '~/components/landingPage/TreatmentServices.vue';
import { useLandingPageStore } from '~/stores/landingPage';

const store = useLandingPageStore()

const { data } = await useAsyncData('landingPage', () => store.index())
</script>
