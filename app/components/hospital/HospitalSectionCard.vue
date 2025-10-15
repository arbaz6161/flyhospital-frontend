<template>
    <div class="hospital-card">
        <img :src="config.public.ImageUrl + hospital.image_urls[0]" :alt="title">
        <div class="card-content">
            <h3>
                <NuxtLink :to="`/hospitals/${hospital.id}`" class="text-dark text-decoration-none">{{ title }}
                </NuxtLink>
                <span class="rating">{{ Number(hospital.average_rating).toFixed(1) }}<span class="star">★</span></span>
            </h3>
            <p class="location">
                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                {{ shortAddress }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useCapitalize, useTruncateText } from '~/composables/useHelpers' // explicit import
 const config = useRuntimeConfig()
const props = defineProps({
    hospital: Object,
})

const title = computed(() => useCapitalize(props.hospital?.title || ''))
const shortAddress = computed(() => useTruncateText(props.hospital?.address, 20))

</script>
