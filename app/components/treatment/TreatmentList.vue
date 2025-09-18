<template>
    <section class="explore-treatment-section">
        <div class="container">
            <div class="section-header">
                <h2>Explore Treatment Type</h2>
                <p>Explore popular treatments and specialities across top hospitals. Find the right care tailored to
                    your medical needs.</p>
            </div>

            <div class="slider-container">
                <button class="slider-arrow prev-arrow prev-treatment">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="slider-grid treatment-grid">
                    <!-- Treatment Card 1 -->
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Knee Replacement Surgery">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Toronto, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Knee Replacement</h3>
                                <span class="rating">4.9<span class="star">★</span></span>
                            </div>
                            <p class="price">Starting from: $4800</p>
                        </div>
                    </div>
                    <!-- Treatment Card 2 -->
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Dialysis">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Toronto, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Dialysis</h3>
                                <span class="rating">4.9<span class="start">★</span></span>
                            </div>
                            <p class="price">Starting from: $4500</p>
                        </div>
                    </div>
                    <!-- Treatment Card 3 -->
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Antibiotic Therapy">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Vancouver, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Antibiotic Therapy</h3>
                                <span class="rating">5.0<span class="star">★</span></span>
                            </div>
                            <p class="price">Starting from: $4500</p>
                        </div>
                    </div>
                    <!-- Treatment Card 4 -->
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Organ Transplant">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Montreal, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Organ Transplant</h3>
                                <span class="rating">4.8<span class="star">★</span></span>
                            </div>
                            <p class="price">Starting from: $4200</p>
                        </div>
                    </div>
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Organ Transplant">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Montreal, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Organ Transplant</h3>
                                <span class="rating">4.8<span class="star">★</span></span>
                            </div>
                            <p class="price">Starting from: $4200</p>
                        </div>
                    </div>
                    <div class="treatment-card">
                        <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Dialysis">
                        <div class="card-content">
                            <p class="location">
                                <Icon name="material-symbols:location-on-outline" style="color:#053862; margin-right:5px; font-size: 18px;"/>
                                Toronto, Canada
                            </p>
                            <div class="card-title-bar">
                                <h3>Dialysis</h3>
                                <span class="rating">4.9<span class="start">★</span></span>
                            </div>
                            <p class="price">Starting from: $4500</p>
                        </div>
                    </div>
                </div>
                <button class="slider-arrow next-arrow next-treatment">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <a href="#" class="view-all-btn">View all Treatments</a>
        </div>
    </section>
</template>