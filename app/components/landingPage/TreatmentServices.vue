<template>
    <section class="treatment-services container">
        <div class="section-header">
            <h2>Explore {{ treatments.length }}+ Procedure Services</h2>
            <p>From specialized surgeries to advanced therapies — browse our top medical departments offering expert
                care and proven results.</p>
        </div>
         <div v-if="loading">Loading blogs...</div>
      <div v-else-if="error">{{ error }}</div>
        <div v-else class="treatments-grid">
                <NuxtLink class="treatment-tag"  v-for="treatment in treatments" :key="treatment.id"  style="text-decoration: none; color: #053862;" :to="`/subprocedure/${treatment.id}?name=${encodeURIComponent(treatment.name)}`">
                {{ treatment.name }}
                </NuxtLink>   
        </div>
    </section>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
const config = useRuntimeConfig()

// ✅ Only fetch if data doesn't exist (non-blocking)
// Data will refresh only on hard refresh (F5 or Ctrl+R)
onMounted(() => {
	if (store.treatments.length === 0) {
		store.fetchTreatments().catch(err => {
			console.error('Failed to fetch treatments:', err);
		});
	}
});

const treatments = computed(() => store.treatments)
const loading = computed(() => store.loading)
const error = computed(() => store.error)
</script>
