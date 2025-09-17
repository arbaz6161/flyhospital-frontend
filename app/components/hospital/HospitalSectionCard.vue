<template>
    <div class="hospital-card">
        <img :src="props.hospital.image_url" :alt="title">
        <div class="card-content">
            <h3>
                <NuxtLink :to="`/hospitals/${props.hospital.id}`" class="text-dark text-decoration-none">{{ title }}
                </NuxtLink>
                <span class="rating">{{ Number(hospital.average_rating).toFixed(1) }}<span class="star">★</span></span>
            </h3>
            <p class="location">
                <Icon name="material-symbols:location-on"></Icon>
                {{ shortAddress }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useCapitalize, useTruncateText } from '~/composables/useHelpers' // explicit import
const props = defineProps({
    hospital: Object,
})

const title = computed(() => useCapitalize(props.hospital?.title || ''))
const shortAddress = computed(() => useTruncateText(props.hospital?.address, 20))

</script>
