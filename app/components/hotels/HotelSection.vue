<template>
    <section class="popular-hotels-section">
        <div class="container">
            <div class="section-header">
                <h2>Explore Nearby Restaurants</h2>
                <p>
                    Discover the best dining spots just around the corner. Savor local
                    flavors and unique cuisines that await you!
                </p>
            </div>

            <div class="slider-container">
                <button class="slider-arrow prev-arrow">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>

                <div class="slider-grid">
                    <!-- Hotel Card 1 -->
                    <div class="hotel-card">
                        <img src="https://images.pexels.com/photos/2611028/pexels-photo-2611028.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="The Ritz-Carlton Toronto" />
                        <div class="card-content">
                            <h3>
                                The Ritz-Carlton...
                                <span class="rating">4.8<span class="star">★</span></span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                Toronto, Canada
                            </p>
                        </div>
                    </div>

                    <!-- Hotel Card 2 -->
                    <div class="hotel-card">
                        <img src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Hotel Indigo Baltimore" />
                        <div class="card-content">
                            <h3>
                                Hotel Indigo...
                                <span class="rating">4.5<span class="star">★</span></span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                Maryland, USA
                            </p>
                        </div>
                    </div>

                    <!-- Hotel Card 3 -->
                    <div class="hotel-card">
                        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Hilton Cleveland Downtown" />
                        <div class="card-content">
                            <h3>
                                Hilton Cleveland...
                                <span class="rating">4.6<span class="star">★</span></span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                Ohio, USA
                            </p>
                        </div>
                    </div>

                    <!-- Hotel Card 4 -->
                    <div class="hotel-card">
                        <img src="https://images.pexels.com/photos/1617636/pexels-photo-1617636.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Four Seasons Boston" />
                        <div class="card-content">
                            <h3>
                                Four Seasons Bos...
                                <span class="rating">4.9<span class="star">★</span></span>
                            </h3>
                            <p class="location">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                Massachusetts, USA
                            </p>
                        </div>
                    </div>
                </div>

                <button class="slider-arrow next-arrow">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <a href="#" class="view-all-btn">View all resturants</a>
        </div>
    </section>
</template>