<template>
    <div class="hospital-card">
        <img :src="props.hospital.image_url" :alt="title">
        <div class="card-content">
            <h3>
                <NuxtLink :to="`/hospitals/${props.hospital.id}`">{{ title }}</NuxtLink>
                <span class="rating">4.6<span class="star">★</span></span>
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
