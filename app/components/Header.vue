<template>
    <header class="container-fluid bg-white shadow-sm sticky-top">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand" active-class="active" exact-active-class="active">
                    <img 
                        src="~assets/img/logo.png" 
                        class="logo" 
                        alt="ClickHospital Logo"
                        loading="eager"
                        :class="{ 'image-loading': !imageLoaded }"
                        @load="imageLoaded = true"
                        @error="imageLoaded = true"
                    >
                    <span> ClickHospital </span>
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto align-items-center">
                        <li class="nav-item dropdown nav-item dropdown relative">
                            <Dropdown>
                                <DropdownToggle class="dropdown-toggle d-flex align-items-center nav-link">
                                    Destination
                                    <Icon name="carbon:chevron-down"></Icon>
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem v-for="destination in destinations" :key="destination.id">
                                    <NuxtLink :to="`/hospitals?country_id=${destination.id}`">
                                        {{ destination.country_name }}
                                    </NuxtLink>  
                                    </DropdownItem>
                                    <!-- <DropdownItem v-for="destination in destinations">{{ destination.name }}</DropdownItem> -->
                                   
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown">
                            <Dropdown>
                                <DropdownToggle class="dropdown-toggle d-flex align-items-center nav-link">
                                    Procedure
                                    <Icon name="carbon:chevron-down"></Icon>
                                </DropdownToggle>
                                <DropdownMenu>
                                 <DropdownItem v-for="treatment in treatments" :key="treatment.id">
                                    <NuxtLink 
                                        :to="`/subprocedure/${treatment.id}?name=${encodeURIComponent(treatment.name)}`">
                                        {{ treatment.name }}
                                    </NuxtLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/about" class="nav-link" active-class="active" exact-active-class="active">
                                About us
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/partner" class="nav-link" active-class="active" exact-active-class="active">
                                Become a Partner
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <div class="support-info me-3 text-end">
                            <span class="d-block d-flex align-items-center p-2"
                                style="background:#F5F5F5; border-radius:6px;">
                                Our 24/7 Support
                                <Icon name="carbon:arrow-right"></Icon>
                            </span>
                            <a href=" tel:+17344475890" class="text-decoration-none">+1(734)-447-5890</a>
                        </div>
                        <NuxtLink to="/contact" class="btn btn-primary contact-btn" active-class="active"
                            exact-active-class="active">
                            Contact Us
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
const config = useRuntimeConfig()
const imageLoaded = ref(false)

// ✅ Only fetch if data doesn't exist in store (prevents re-fetching on every page)
if (store.treatments.length === 0) {
	await useAsyncData('treatments', () => store.fetchTreatments())
}

if (store.destinations.length === 0) {
	await useAsyncData('destinations', () => store.fetchMedicalDestination())
}

// ✅ State
const treatments = computed(() => store.treatments)
const destinations = computed(() => store.destinations)
const loading = computed(() => store.loading)
const error = computed(() => store.error)
</script>
<style>
.dropdown-item a{
    text-decoration: none !important;
    color: #0d2d52;
}
</style>


