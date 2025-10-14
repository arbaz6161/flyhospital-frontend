<template>
    <section class="hero-section ">
        <div class="hero-layout">
            <div class="hero-text">
                <h1>Find the Right Hospital Anywhere <span>in the World.</span></h1>
                <p>FlyHospitals helps you explore and connect with internationally accredited hospitals, based on
                    your
                    treatment needs, budget, and destination.</p>
                <div class="search-container">
                    <h3>Start Your Medical Search</h3>
                    <div class="search-bar">
                        <input type="text" placeholder="Search hospitals, treatments or countries...">
                        <a href="#">Search</a>
                    </div>
                    <div class="filters">
                        <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#priceRangeModal">
                            <Icon name="mdi:dollar" />
                            Filter by Price
                        </button>
                        <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#treatment">
                            <Icon name="streamline-pixel:interface-essential-setting-slide" />
                            Filter by Treatment
                        </button>
                        <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#destination">
                            <Icon name="uiw:map" />
                            Destination-Based Discovery
                        </button>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <img src="~/assets/img/banner.jpg" alt="Patients at a hospital reception" class="rounded-left-bottom">
            </div>
        </div>
    </section>
</template>
<script setup>
</script>