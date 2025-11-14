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
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AboutSection from '~/components/landingPage/AboutSection.vue';
import HeroSection from '~/components/landingPage/HeroSection.vue';
import HowItWorks from '~/components/landingPage/HowItWorks.vue';
import TreatmentServices from '~/components/landingPage/TreatmentServices.vue';
import { useLandingPageStore } from '~/stores/landingPage';

const store = useLandingPageStore()

// ✅ Fetch in background (non-blocking) - only if data doesn't exist
// Data will refresh only on hard refresh (F5 or Ctrl+R)
onMounted(() => {
	if (store.hospitals.length === 0 || store.destinations.length === 0) {
		store.index().catch(err => {
			console.error('Failed to fetch landing page data:', err);
		});
	}
});
</script>
