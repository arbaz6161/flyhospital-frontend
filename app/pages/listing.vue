<template>
     <!-- Main Content -->
    <main class="container my-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                <a href="#">Treatment abroad</a>
                </li>

                <li class="breadcrumb-separator">
                <i class="bi bi-chevron-right"></i>
                </li>
                <li class="breadcrumb-item active" aria-current="page">All specialities</li>
            </ol>
        </nav>

        <!-- Filter Section -->
        <div class="filter-section mb-5">
            <div class="row g-3 align-items-center">
                <div class="col-lg-4">
                    <div class="input-group">
                       <span class="input-group-text bg-white">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;">
                            <path d="M42 42L33.028 33.012M38 21C38 25.5087 36.2089 29.8327 33.0208 33.0208C29.8327 36.2089 25.5087 38 21 38C16.4913 38 12.1673 36.2089 8.97919 33.0208C5.79107 29.8327 4 25.5087 4 21C4 16.4913 5.79107 12.1673 8.97919 8.97919C12.1673 5.79107 16.4913 4 21 4C25.5087 4 29.8327 5.79107 33.0208 8.97919C36.2089 12.1673 38 16.4913 38 21Z" stroke="#053862" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                       </span>
                       <input type="text" class="form-control" placeholder="Enter name, procedure, or condition">
                    </div>
                </div>
                <div class="col-lg-3">
                    <select class="form-select">
                        <option selected>Select a country</option>
                    </select>
                </div>
                <div class="col-lg-3">
                    <select class="form-select">
                        <option selected>Select a Price Range</option>
                    </select>
                </div>
                <div class="col-lg-2">
                    <button class="search-btn-icon">
                       <NuxtIcon name="bi:search" /> Search
                    </button>
                </div>
            </div>
             <div class="mt-3">
                <a href="#" class="advanced-search-link"><i class="bi bi-sliders"></i> Advanced Search</a>
            </div>
        </div>

        <!-- Hospital Listings -->
        <div class="listings-header mb-4">
            <h2>Best <span>1654 Verified</span> Hospitals in the World</h2>
            <p class="text-muted">FlyHospitals uses data science algorithms to deliver a trusted, transparent, and objective comparison based on patient demand, review scores, treatment updates, pricing, response speed, and clinic certifications.</p>
        </div>

        <div class="hospital-list">
            <!-- Hospital Card 1 -->
            <div class="card hospital-card mb-4">
                <div class="row g-0">
                    <div class="col-md-3 p-3">
                      <img src="/assets/img/card.png" class="img-fluid img-fit rounded" alt="Cleveland Clinic">
                    </div>
                    <div class="col-md-6 card-body">
                        <h5 class="card-title">Cleveland Clinic</h5>
                        <p class="card-text location"><i class="bi bi-geo-alt-fill"></i> Ohio, USA</p>
                        <p class="card-text description">clevelandclinic.com is the forefront of modern medicine, where its founding mission was to provide outstanding patient care.
                            clevelandclinic.com is the forefront of modern medicine, where its founding mission was to provide outstanding patient care. A non-profit s
                        A non-profit since 1921... <a href="#">Show more</a></p>
                        <div class="info-buttons">
                            <a href="#" class="btn btn-sm btn-light">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 9.625C12.1 9.625 11.125 9.475 10.3 9.175H10.075C9.85 9.175 9.7 9.25 9.55 9.4L7.9 11.05C5.8 9.925 4 8.2 2.95 6.1L4.6 4.45C4.825 4.225 4.9 3.925 4.75 3.7C4.525 2.875 4.375 1.9 4.375 1C4.375 0.625 4 0.25 3.625 0.25H1C0.625 0.25 0.25 0.625 0.25 1C0.25 8.05 5.95 13.75 13 13.75C13.375 13.75 13.75 13.375 13.75 13V10.375C13.75 10 13.375 9.625 13 9.625ZM1.75 1.75H2.875C2.95 2.425 3.1 3.1 3.25 3.7L2.35 4.6C2.05 3.7 1.825 2.725 1.75 1.75ZM12.25 12.25C11.275 12.175 10.3 11.95 9.4 11.65L10.3 10.75C10.9 10.9 11.575 11.05 12.25 11.05V12.25Z" fill="#053862"/>
                                </svg>
                            Call</a>
                            <a href="#" class="btn btn-sm btn-light">
                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1.5C5.4087 1.5 3.88258 2.13214 2.75736 3.25736C1.63214 4.38258 1 5.9087 1 7.5C1 8.919 1.3015 9.8475 2.125 10.875L7 16.5L11.875 10.875C12.6985 9.8475 13 8.919 13 7.5C13 5.9087 12.3679 4.38258 11.2426 3.25736C10.1174 2.13214 8.5913 1.5 7 1.5Z" stroke="#053862" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            Google Map</a>
                            <a href="#" class="btn btn-sm btn-light">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.125 9C1.125 11.0886 1.95469 13.0916 3.43153 14.5685C4.90838 16.0453 6.91142 16.875 9 16.875C11.0886 16.875 13.0916 16.0453 14.5685 14.5685C16.0453 13.0916 16.875 11.0886 16.875 9C16.875 6.91142 16.0453 4.90838 14.5685 3.43153C13.0916 1.95469 11.0886 1.125 9 1.125C6.91142 1.125 4.90838 1.95469 3.43153 3.43153C1.95469 4.90838 1.125 6.91142 1.125 9Z" stroke="#053862" stroke-width="1.125" stroke-linejoin="round"/>
                                    <path d="M5.625 9C5.625 6.91142 5.98058 4.90838 6.61351 3.43153C7.24645 1.95469 8.10489 1.125 9 1.125C9.89511 1.125 10.7535 1.95469 11.3865 3.43153C12.0194 4.90838 12.375 6.91142 12.375 9C12.375 11.0886 12.0194 13.0916 11.3865 14.5685C10.7535 16.0453 9.89511 16.875 9 16.875C8.10489 16.875 7.24645 16.0453 6.61351 14.5685C5.98058 13.0916 5.625 11.0886 5.625 9Z" stroke="#053862" stroke-width="1.125" stroke-linejoin="round"/>
                                    <path d="M1.6875 11.625H16.3125M1.6875 6.375H16.3125" stroke="#053862" stroke-width="1.125" stroke-linecap="round"/>
                                </svg>

                            Website</a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 card-body border-start-md">
                        <div class="rating d-flex align-items-center mb-3">
                            <div class="stars text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </div>
                            <span class="fw-bold ms-2 me-1 rating">4.8</span>
                            <span class="text-muted review">327 review</span>
                        </div>
                        <h6 class="treatment-title">TREATMENT</h6>
                        <ul class="treatment-list list-unstyled">
                            <li><i class="bi bi-check"></i> Treatment Name</li>
                            <li><i class="bi bi-check"></i> Treatment Name</li>
                            <li><i class="bi bi-check"></i> Treatment Name</li>
                          
                        </ul>
                        <a href="/details" class="btn btn-primary w-100 mt-3 details-btn">View Hospital Details</a>
                    </div>
                </div>
            </div>

            <!-- Hospital Card 2 -->
            <div class="card hospital-card mb-4">
                 <div class="row g-0">
                    <div class="col-md-3 p-3">
                       <img src="/assets/img/card.png" class="img-fluid rounded" alt="Mount Sinai Hospital">
                    </div>
                    <div class="col-md-6 card-body">
                        <h5 class="card-title">Mount Sinai Hospital</h5>
                        <p class="card-text location"><i class="bi bi-geo-alt-fill"></i> Ohio, USA</p>
                        <p class="card-text description">Mount Sinai Hospital is a prominent teaching hospital renowned for its compassionate patient care, innovative medical research, and commitment to the community... <a href="#">Show more</a></p>
                       <div class="info-buttons">
                            <a href="#" class="btn btn-sm btn-light">
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 9.625C12.1 9.625 11.125 9.475 10.3 9.175H10.075C9.85 9.175 9.7 9.25 9.55 9.4L7.9 11.05C5.8 9.925 4 8.2 2.95 6.1L4.6 4.45C4.825 4.225 4.9 3.925 4.75 3.7C4.525 2.875 4.375 1.9 4.375 1C4.375 0.625 4 0.25 3.625 0.25H1C0.625 0.25 0.25 0.625 0.25 1C0.25 8.05 5.95 13.75 13 13.75C13.375 13.75 13.75 13.375 13.75 13V10.375C13.75 10 13.375 9.625 13 9.625ZM1.75 1.75H2.875C2.95 2.425 3.1 3.1 3.25 3.7L2.35 4.6C2.05 3.7 1.825 2.725 1.75 1.75ZM12.25 12.25C11.275 12.175 10.3 11.95 9.4 11.65L10.3 10.75C10.9 10.9 11.575 11.05 12.25 11.05V12.25Z" fill="#053862"/>
                                </svg>
                            Call</a>
                            <a href="#" class="btn btn-sm btn-light">
                                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1.5C5.4087 1.5 3.88258 2.13214 2.75736 3.25736C1.63214 4.38258 1 5.9087 1 7.5C1 8.919 1.3015 9.8475 2.125 10.875L7 16.5L11.875 10.875C12.6985 9.8475 13 8.919 13 7.5C13 5.9087 12.3679 4.38258 11.2426 3.25736C10.1174 2.13214 8.5913 1.5 7 1.5Z" stroke="#053862" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            Google Map</a>
                            <a href="#" class="btn btn-sm btn-light">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.125 9C1.125 11.0886 1.95469 13.0916 3.43153 14.5685C4.90838 16.0453 6.91142 16.875 9 16.875C11.0886 16.875 13.0916 16.0453 14.5685 14.5685C16.0453 13.0916 16.875 11.0886 16.875 9C16.875 6.91142 16.0453 4.90838 14.5685 3.43153C13.0916 1.95469 11.0886 1.125 9 1.125C6.91142 1.125 4.90838 1.95469 3.43153 3.43153C1.95469 4.90838 1.125 6.91142 1.125 9Z" stroke="#053862" stroke-width="1.125" stroke-linejoin="round"/>
                                    <path d="M5.625 9C5.625 6.91142 5.98058 4.90838 6.61351 3.43153C7.24645 1.95469 8.10489 1.125 9 1.125C9.89511 1.125 10.7535 1.95469 11.3865 3.43153C12.0194 4.90838 12.375 6.91142 12.375 9C12.375 11.0886 12.0194 13.0916 11.3865 14.5685C10.7535 16.0453 9.89511 16.875 9 16.875C8.10489 16.875 7.24645 16.0453 6.61351 14.5685C5.98058 13.0916 5.625 11.0886 5.625 9Z" stroke="#053862" stroke-width="1.125" stroke-linejoin="round"/>
                                    <path d="M1.6875 11.625H16.3125M1.6875 6.375H16.3125" stroke="#053862" stroke-width="1.125" stroke-linecap="round"/>
                                </svg>

                            Website</a>
                        </div>
                    </div>
                    <div class="col-md-3 card-body border-start-md">
                        <div class="rating d-flex align-items-center mb-3">
                             <div class="stars text-warning">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
                            </div>
                            <span class="fw-bold ms-2 me-1 rating">4.7</span>
                            <span class="text-muted review">199 review</span>
                        </div>
                        <h6 class="treatment-title">TREATMENT</h6>
                        <ul class="treatment-list list-unstyled">
                            <li>
                                <i class="bi bi-check"></i> 
                            Treatment Name</li>
                            <li><i class="bi bi-check"></i> Treatment Name</li>
                            <li><i class="bi bi-check"></i> Treatment Name</li>
                        </ul>
                        <NuxtLink to="/details" class="btn btn-primary w-100 mt-3 details-btn">
                            View Hospital Details
                        </NuxtLink>

                    </div>
                </div>
            </div>

            <!-- Add more hospital cards as needed -->

        </div>

        <!-- Load More Section -->
        <div class="text-center mt-5">
            <p class="text-muted">You've viewed 5 of 1654 hospitals</p>
            <button class="btn btn-primary mt-3 details-btn" style="max-width: 321px; width:100%">Load More</button>
        </div>
          <!--=============== BLOGS SECTION ===============-->
        <section class="blogs-section">
            <div class="container">
                <div class="section-header">
                    <h2>Blogs</h2>
                    <p>Explore our top-rated treatments in neurology, plastic surgery, dentistry, and oncology, delivered with precision for the best outcomes.</p>
                </div>

                <div class="blogs-grid">
                    <!-- Blog Card 1 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Medical stethoscope and equipment">
                        <div class="blog-content">
                            <h3>Utilize Our Medical Templates!</h3>
                            <p>Lets embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <!-- Blog Card 2 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Scientist looking through a microscope">
                        <div class="blog-content">
                             <h3>Discover Our Medical Templates!</h3>
                            <p>Lets embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <!-- Blog Card 3 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Person taking a pill with a glass of water">
                        <div class="blog-content">
                            <h3>Check Out Our Medical Design Resources!</h3>
                            <p>Unlock creativity with our curated assets, and transform your vision into stunning realities.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                     <!-- Blog Card 4 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Patient in a dental chair">
                        <div class="blog-content">
                            <h3>Become Part of Our Medical Community!</h3>
                            <p>Connect with fellow innovators, share insights, and execute your design journey together.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>