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
            <a href="#" v-for="treatment in treatments" :key="treatment.id" class="treatment-tag">{{ treatment.name }}</a>
           <a href="#" class="treatment-tag">Aesthetic Surgery</a>
        </div>
    </section>
</template>
<script setup>
import { computed } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
 const config = useRuntimeConfig()
// ✅ SSR-friendly call
await useAsyncData('treatments', () =>  store.fetchTreatments())

const treatments = computed(() => store.treatments)
const loading = computed(() => store.loading)
const error = computed(() => store.error)
</script>
