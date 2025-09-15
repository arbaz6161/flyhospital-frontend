<template>
    <div>
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
                            <a href="/listing">Search</a>
                        </div>
                        <div class="filters">
                            <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#priceRangeModal">$ Filter
                                by
                                Price</button>
                            <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#treatment">⚕️ Filter by
                                Treatment</button>
                            <button class="filter-btn" data-bs-toggle="modal" data-bs-target="#destination">🗺️
                                Destination-Based Discovery</button>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="~/assets/img/banner.jpg" alt="Patients at a hospital reception"
                        class="rounded-left-bottom">
                </div>
            </div>
        </section>

        <section class="info-section">
            <div class="container info-content">
                <div class="info-icon">
                    <img src="~/assets/img/globe.png" alt="Globe with heart icon">
                </div>
                <div class="info-text">
                    <h2><span>FlyHospitals</span> is an international platform for hospital search and treatment
                        arrangement
                    </h2>
                </div>
                <div class="info-description">
                    <p>We designed FlyHospitals to simplify global medical discovery. Whether you're seeking advanced
                        treatment, lower costs, or expert care in another country, our platform connects you with
                        verified
                        hospitals worldwide.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </section>

        <section class="treatment-services container">
            <div class="section-header">
                <h2>Explore 180+ Treatment Services</h2>
                <p>From specialized surgeries to advanced therapies — browse our top medical departments offering expert
                    care and proven results.</p>
            </div>
            <div class="treatments-grid">
                <a href="#" class="treatment-tag">Weight Loss Surgery</a>
                <a href="#" class="treatment-tag">Aesthetic Surgery</a>
                <a href="#" class="treatment-tag">Cardiology</a>
                <a href="#" class="treatment-tag">Dermatology</a>
                <a href="#" class="treatment-tag">Endocrinology</a>
                <a href="#" class="treatment-tag">Gastroenterology</a>
                <a href="#" class="treatment-tag">Hematology</a>
                <a href="#" class="treatment-tag">Infectious Disease</a>
                <a href="#" class="treatment-tag">Neurology</a>
                <a href="#" class="treatment-tag">Cardiology</a>
                <a href="#" class="treatment-tag">Pediatrics</a>
                <a href="#" class="treatment-tag">Obstetrics</a>
                <a href="#" class="treatment-tag">Oncology</a>
                <a href="#" class="treatment-tag">Orthopedics</a>
                <a href="#" class="treatment-tag">Psychiatry & Mental Health</a>
                <a href="#" class="treatment-tag">Psychiatry</a>
            </div>
        </section>

        <!--=============== HOW IT WORKS SECTION ===============-->
        <section class="how-it-works-section">
            <div class="container">
                <div class="how-it-works-container">
                    <div class="how-it-works-header">
                        <div class="header-text">
                            <h2>How FlyHospitals Works</h2>
                            <p>Whether you're seeking affordable treatment, advanced medical care, or a specific
                                specialty,
                                FlyHospitals helps you find, compare, and connect with trusted hospitals around the
                                world in
                                just a few clicks.</p>
                        </div>
                        <NuxtLink to="/about" class="learn-more-btn">Learn More</NuxtLink>
                    </div>
                    <div class="process-grid">
                        <!-- Process Card 1: Search -->
                        <div class="process-card">
                            <div class="process-icon">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42 42L34 34M38 22C38 26.2435 36.3143 30.3131 33.3137 33.3137C30.3131 36.3143 26.2435 38 22 38C17.7565 38 13.6869 36.3143 10.6863 33.3137C7.68571 30.3131 6 26.2435 6 22C6 17.7565 7.68571 13.6869 10.6863 10.6863C13.6869 7.68571 17.7565 6 22 6C26.2435 6 30.3131 7.68571 33.3137 10.6863C36.3143 13.6869 38 17.7565 38 22Z"
                                        stroke="#053862" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3>Search</h3>
                            <p>Use our smart filters to search by treatment, specialty, or destination. Easily explore
                                hospitals based on what matters most to you.</p>
                        </div>
                        <!-- Process Card 2: Compare -->
                        <div class="process-card">
                            <div class="process-icon">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.896 2.5H26.104C27.902 2.5 29.4 2.5 30.588 2.66C31.844 2.828 32.978 3.2 33.888 4.11C34.8 5.022 35.172 6.156 35.34 7.41C35.3867 7.75 35.42 8.11333 35.44 8.5C36.62 8.5 37.616 8.508 38.438 8.592C39.384 8.688 40.264 8.898 41.056 9.426C41.656 9.828 42.172 10.344 42.574 10.946C43.102 11.736 43.312 12.616 43.408 13.562C43.5 14.466 43.5 15.584 43.5 16.922V42.5H44C44.3978 42.5 44.7794 42.658 45.0607 42.9393C45.342 43.2206 45.5 43.6022 45.5 44C45.5 44.3978 45.342 44.7794 45.0607 45.0607C44.7794 45.342 44.3978 45.5 44 45.5H4C3.60218 45.5 3.22064 45.342 2.93934 45.0607C2.65804 44.7794 2.5 44.3978 2.5 44C2.5 43.6022 2.65804 43.2206 2.93934 42.9393C3.22064 42.658 3.60218 42.5 4 42.5H4.5V16.924C4.5 15.584 4.5 14.466 4.592 13.562C4.688 12.616 4.898 11.736 5.426 10.944C5.828 10.344 6.344 9.828 6.946 9.426C7.736 8.898 8.616 8.688 9.562 8.592C10.382 8.508 11.38 8.5 12.558 8.5C12.5807 8.11333 12.614 7.75067 12.658 7.412C12.828 6.156 13.2 5.022 14.11 4.112C15.022 3.2 16.156 2.828 17.41 2.66C18.6 2.5 20.1 2.5 21.896 2.5ZM12.5 11.5C11.334 11.5 10.512 11.51 9.866 11.576C9.156 11.648 8.828 11.776 8.612 11.922C8.34051 12.1064 8.10639 12.3405 7.922 12.612C7.776 12.828 7.648 13.156 7.576 13.866C7.502 14.6 7.5 15.566 7.5 17V42.5H12.5V29.5H11C10.6022 29.5 10.2206 29.342 9.93934 29.0607C9.65804 28.7794 9.5 28.3978 9.5 28C9.5 27.6022 9.65804 27.2206 9.93934 26.9393C10.2206 26.658 10.6022 26.5 11 26.5H12.5V23.5H11C10.6022 23.5 10.2206 23.342 9.93934 23.0607C9.65804 22.7794 9.5 22.3978 9.5 22C9.5 21.6022 9.65804 21.2206 9.93934 20.9393C10.2206 20.658 10.6022 20.5 11 20.5H12.5V17.5H11C10.6022 17.5 10.2206 17.342 9.93934 17.0607C9.65804 16.7794 9.5 16.3978 9.5 16C9.5 15.6022 9.65804 15.2206 9.93934 14.9393C10.2206 14.658 10.6022 14.5 11 14.5H12.5V11.5ZM15.5 42.5H22.5V38C22.5 37.6022 22.658 37.2206 22.9393 36.9393C23.2206 36.658 23.6022 36.5 24 36.5C24.3978 36.5 24.7794 36.658 25.0607 36.9393C25.342 37.2206 25.5 37.6022 25.5 38V42.5H32.5V12C32.5 10.072 32.496 8.776 32.366 7.81C32.242 6.888 32.028 6.492 31.766 6.232C31.504 5.972 31.112 5.758 30.19 5.632C29.224 5.504 27.928 5.5 26 5.5H22C20.072 5.5 18.776 5.504 17.81 5.634C16.888 5.758 16.492 5.972 16.232 6.234C15.972 6.496 15.758 6.888 15.632 7.81C15.506 8.776 15.5 10.072 15.5 12V42.5ZM35.5 17.5H37C37.3978 17.5 37.7794 17.342 38.0607 17.0607C38.342 16.7794 38.5 16.3978 38.5 16C38.5 15.6022 38.342 15.2206 38.0607 14.9393C37.7794 14.658 37.3978 14.5 37 14.5H35.5V11.5C36.666 11.5 37.488 11.51 38.134 11.576C38.844 11.648 39.172 11.776 39.39 11.922C39.662 12.102 39.896 12.338 40.078 12.612C40.224 12.828 40.352 13.156 40.424 13.866C40.498 14.6 40.5 15.566 40.5 17V42.5H35.5V29.5H37C37.3978 29.5 37.7794 29.342 38.0607 29.0607C38.342 28.7794 38.5 28.3978 38.5 28C38.5 27.6022 38.342 27.2206 38.0607 26.9393C37.7794 26.658 37.3978 26.5 37 26.5H35.5V23.5H37C37.3978 23.5 37.7794 23.342 38.0607 23.0607C38.342 22.7794 38.5 22.3978 38.5 22C38.5 21.6022 38.342 21.2206 38.0607 20.9393C37.7794 20.658 37.3978 20.5 37 20.5H35.5V17.5ZM24 8.5C24.3978 8.5 24.7794 8.65804 25.0607 8.93934C25.342 9.22064 25.5 9.60218 25.5 10V12.5H28C28.3978 12.5 28.7794 12.658 29.0607 12.9393C29.342 13.2206 29.5 13.6022 29.5 14C29.5 14.3978 29.342 14.7794 29.0607 15.0607C28.7794 15.342 28.3978 15.5 28 15.5H25.5V18C25.5 18.3978 25.342 18.7794 25.0607 19.0607C24.7794 19.342 24.3978 19.5 24 19.5C23.6022 19.5 23.2206 19.342 22.9393 19.0607C22.658 18.7794 22.5 18.3978 22.5 18V15.5H20C19.6022 15.5 19.2206 15.342 18.9393 15.0607C18.658 14.7794 18.5 14.3978 18.5 14C18.5 13.6022 18.658 13.2206 18.9393 12.9393C19.2206 12.658 19.6022 12.5 20 12.5H22.5V10C22.5 9.60218 22.658 9.22064 22.9393 8.93934C23.2206 8.65804 23.6022 8.5 24 8.5ZM18.5 24C18.5 23.6022 18.658 23.2206 18.9393 22.9393C19.2206 22.658 19.6022 22.5 20 22.5H28C28.3978 22.5 28.7794 22.658 29.0607 22.9393C29.342 23.2206 29.5 23.6022 29.5 24C29.5 24.3978 29.342 24.7794 29.0607 25.0607C28.7794 25.342 28.3978 25.5 28 25.5H20C19.6022 25.5 19.2206 25.342 18.9393 25.0607C18.658 24.7794 18.5 24.3978 18.5 24ZM18.5 30C18.5 29.6022 18.658 29.2206 18.9393 28.9393C19.2206 28.658 19.6022 28.5 20 28.5H28C28.3978 28.5 28.7794 28.658 29.0607 28.9393C29.342 29.2206 29.5 29.6022 29.5 30C29.5 30.3978 29.342 30.7794 29.0607 31.0607C28.7794 31.342 28.3978 31.5 28 31.5H20C19.6022 31.5 19.2206 31.342 18.9393 31.0607C18.658 30.7794 18.5 30.3978 18.5 30Z"
                                        fill="#053862" />
                                </svg>
                            </div>
                            <h3>Compare</h3>
                            <p>View hospital profiles with complete details—services, accreditations, amenities, and
                                more.
                                Compare options side-by-side to make an informed decision.</p>
                        </div>
                        <!-- Process Card 3: Connect -->
                        <div class="process-card">
                            <div class="process-icon">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 12C9.06087 12 10.0783 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4C6.93913 4 5.92172 4.42143 5.17157 5.17157C4.42143 5.92172 4 6.93913 4 8C4 9.06087 4.42143 10.0783 5.17157 10.8284C5.92172 11.5786 6.93913 12 8 12ZM10 42C11.5913 42 13.1174 41.3679 14.2426 40.2426C15.3679 39.1174 16 37.5913 16 36C16 34.4087 15.3679 32.8826 14.2426 31.7574C13.1174 30.6321 11.5913 30 10 30C8.4087 30 6.88258 30.6321 5.75736 31.7574C4.63214 32.8826 4 34.4087 4 36C4 37.5913 4.63214 39.1174 5.75736 40.2426C6.88258 41.3679 8.4087 42 10 42ZM38 44C39.5913 44 41.1174 43.3679 42.2426 42.2426C43.3679 41.1174 44 39.5913 44 38C44 36.4087 43.3679 34.8826 42.2426 33.7574C41.1174 32.6321 39.5913 32 38 32C36.4087 32 34.8826 32.6321 33.7574 33.7574C32.6321 34.8826 32 36.4087 32 38C32 39.5913 32.6321 41.1174 33.7574 42.2426C34.8826 43.3679 36.4087 44 38 44ZM22 28C24.1217 28 26.1566 27.1571 27.6569 25.6569C29.1571 24.1566 30 22.1217 30 20C30 17.8783 29.1571 15.8434 27.6569 14.3431C26.1566 12.8429 24.1217 12 22 12C19.8783 12 17.8434 12.8429 16.3431 14.3431C14.8429 15.8434 14 17.8783 14 20C14 22.1217 14.8429 24.1566 16.3431 25.6569C17.8434 27.1571 19.8783 28 22 28ZM34 12C35.0609 12 36.0783 11.5786 36.8284 10.8284C37.5786 10.0783 38 9.06087 38 8C38 6.93913 37.5786 5.92172 36.8284 5.17157C36.0783 4.42143 35.0609 4 34 4C32.9391 4 31.9217 4.42143 31.1716 5.17157C30.4214 5.92172 30 6.93913 30 8C30 9.06087 30.4214 10.0783 31.1716 10.8284C31.9217 11.5786 32.9391 12 34 12Z"
                                        stroke="#053862" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M11 11L15 15M30 12L28 14M34 33.5L28 26M14 31L18 27" stroke="#053862"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3>Connect</h3>
                            <p>Get redirected to the hospital's website, map location, or contact info. Reach out
                                directly
                                or plan your medical journey.</p>
                        </div>
                        <!-- Process Card 4: Plan -->
                        <div class="process-card">
                            <div class="process-icon">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 19H43M5 19V41C5 41.5304 5.21071 42.0391 5.58579 42.4142C5.96086 42.7893 6.46957 43 7 43H41C41.5304 43 42.0391 42.7893 42.4142 42.4142C42.7893 42.0391 43 41.5304 43 41V19M5 19V10C5 9.46957 5.21071 8.96086 5.58579 8.58579C5.96086 8.21071 6.46957 8 7 8H41C41.5304 8 42.0391 8.21071 42.4142 8.58579C42.7893 8.96086 43 9.46957 43 10V19"
                                        stroke="#053862" stroke-width="3" stroke-linejoin="round" />
                                    <path d="M16 31L22 37L34 25" stroke="#053862" stroke-width="3"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 5V13M32 5V13" stroke="#053862" stroke-width="3"
                                        stroke-linecap="round" />
                                </svg>
                            </div>
                            <h3>Plan Your Visit</h3>
                            <p>See nearby hotels, restaurants, and travel options—all in one place. We make medical
                                travel
                                smoother and stress-free.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--=============== TOP DESTINATIONS SECTION ===============-->
        <section class="destinations-section">
            <div class="container">
                <div class="section-header">
                    <h2>Top Medical Tourism Destinations</h2>
                    <p>Discover the world's leading destinations for quality medical care. Trusted by thousands seeking
                        expert treatment and peace of mind.</p>
                </div>

                <div class="slider-container">
                    <button class="slider-arrow prev-arrow prev-des">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="slider-grid destination-grid">
                        <!-- Destination Card 1 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="New York City Skyline">
                            <div class="card-content">
                                <p class="card-subtitle">Looking for medical in</p>
                                <div class="card-title-bar">
                                    <h3>United States of Am...</h3>
                                    <span class="rating">4.5<span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        45 Hospitals</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        42 Clinics</span>
                                </div>
                            </div>
                        </div>
                        <!-- Destination Card 2 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/208722/pexels-photo-208722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="London, United Kingdom">
                            <div class="card-content">
                                <p class="card-subtitle">Looking for pediatric care in</p>
                                <div class="card-title-bar">
                                    <h3>United Kingdom</h3>
                                    <span class="rating">4.6<span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        25 Clinics</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        16 Hospitals</span>
                                </div>
                            </div>
                        </div>
                        <!-- Destination Card 3 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/4090332/pexels-photo-4090332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Sydney, Australia">
                            <div class="card-content">
                                <p class="card-subtitle">Seeking mental health services in</p>
                                <div class="card-title-bar">
                                    <h3>Australia</h3>
                                    <span class="rating">4.8 <span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        15 Clinics</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        18 Hospitals</span>
                                </div>
                            </div>
                        </div>
                        <!-- Destination Card 4 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/4090332/pexels-photo-4090332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Toronto, Canada">
                            <div class="card-content">
                                <p class="card-subtitle">Searching for dental care in</p>
                                <div class="card-title-bar">
                                    <h3>Canada</h3>
                                    <span class="rating">4.7<span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        36 Clinics</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        29 Hospitals</span>
                                </div>
                            </div>
                        </div>
                        <!-- Destination Card 5 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/4090332/pexels-photo-4090332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Toronto, Canada">
                            <div class="card-content">
                                <p class="card-subtitle">Searching for dental care in</p>
                                <div class="card-title-bar">
                                    <h3>Canada</h3>
                                    <span class="rating">4.7<span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        36 Clinics</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        29 Hospitals</span>
                                </div>
                            </div>
                        </div>
                        <!-- Destination Card 6 -->
                        <div class="destination-card">
                            <img src="https://images.pexels.com/photos/4090332/pexels-photo-4090332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Toronto, Canada">
                            <div class="card-content">
                                <p class="card-subtitle">Searching for dental care in</p>
                                <div class="card-title-bar">
                                    <h3>Canada</h3>
                                    <span class="rating">4.7<span class="star">★</span></span>
                                </div>
                                <div class="card-details">
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 22H2" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" />
                                            <path
                                                d="M17 22V6C17 4.114 17 3.172 16.414 2.586C15.828 2 14.886 2 13 2H11C9.114 2 8.172 2 7.586 2.586C7 3.172 7 4.114 7 6V22M21 22V8.5C21 7.096 21 6.393 20.663 5.889C20.517 5.67053 20.3295 5.48296 20.111 5.337C19.607 5 18.904 5 17.5 5M3 22V8.5C3 7.096 3 6.393 3.337 5.889C3.48296 5.67053 3.67053 5.48296 3.889 5.337C4.393 5 5.096 5 6.5 5"
                                                stroke="black" stroke-width="1.5" />
                                            <path
                                                d="M12 22V19M10 12H14M5.5 11H7M5.5 14H7M17 11H18.5M17 14H18.5M5.5 8H7M17 8H18.5M10 15H14"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M12 9V5M14 7H10" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        36 Clinics</span>
                                    <span class="line"> | </span>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z"
                                                fill="black" />
                                        </svg>
                                        29 Hospitals</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="slider-arrow next-arrow next-des">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <a href="#" class="view-all-btn">View all Destination</a>
            </div>
        </section>

        <!--=============== EXPLORE TREATMENT SECTION ===============-->
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
                            <path d="M18.75 23.75L10 15L18.75 6.25" stroke="#003D6F" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="slider-grid treatment-grid">
                        <!-- Treatment Card 1 -->
                        <div class="treatment-card">
                            <img src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Knee Replacement Surgery">
                            <div class="card-content">
                                <p class="location">Toronto, Canada</p>
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
                                <p class="location">Toronto, Canada</p>
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
                                <p class="location">Vancouver, Canada</p>
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
                                <p class="location">Montreal, Canada</p>
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
                                <p class="location">Montreal, Canada</p>
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
                                <p class="location">Toronto, Canada</p>
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
                            <path d="M11.25 23.75L20 15L11.25 6.25" stroke="#003D6F" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <a href="#" class="view-all-btn">View all Treatments</a>
            </div>
        </section>

        <!--=============== POPULAR HOSPITALS SECTION ===============-->
        <HospitalList :hospitals="hospitals" />

        <!--=============== BLOGS SECTION =============== -->
        <section class=" blogs-section">
            <div class="container">
                <div class="section-header">
                    <h2>Blogs</h2>
                    <p>Explore our top-rated treatments in neurology, plastic surgery, dentistry, and oncology,
                        delivered
                        with precision for the best outcomes.</p>
                </div>

                <div class="blogs-grid">
                    <!-- Blog Card 1 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Medical stethoscope and equipment">
                        <div class="blog-content">
                            <h3>Utilize Our Medical Templates!</h3>
                            <p>Lets embody your beautiful ideas together, simplify the way you visualize your next big
                                things.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <!-- Blog Card 2 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Scientist looking through a microscope">
                        <div class="blog-content">
                            <h3>Discover Our Medical Templates!</h3>
                            <p>Lets embody your beautiful ideas together, simplify the way you visualize your next big
                                things.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <!-- Blog Card 3 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Person taking a pill with a glass of water">
                        <div class="blog-content">
                            <h3>Check Out Our Medical Design Resources!</h3>
                            <p>Unlock creativity with our curated assets, and transform your vision into stunning
                                realities.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <!-- Blog Card 4 -->
                    <div class="blog-card">
                        <img src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Patient in a dental chair">
                        <div class="blog-content">
                            <h3>Become Part of Our Medical Community!</h3>
                            <p>Connect with fellow innovators, share insights, and execute your design journey together.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--=============== Modals ===============-->
        <div class="modal fade" id="priceRangeModal" tabindex="-1" aria-labelledby="priceRangeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Select Your Price Range</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div class="col">
                                <label for="minPrice" class="form-label mb-0">From ($)</label>
                                <input type="number" class="form-control" id="minPrice" value="500">
                            </div>
                            <div class="col">
                                <label for="maxPrice" class="form-label mb-0">To ($)</label>
                                <input type="number" class="form-control" id="maxPrice" value="1500">
                            </div>
                        </div>

                        <div class="range-slider-container mb-4">
                            <input type="range" class="form-range custom-range" id="priceRangeMin" min="0" max="100000"
                                value="500">
                            <input type="range" class="form-range custom-range" id="priceRangeMax" min="0" max="100000"
                                value="1500">
                            <div class="range-track"></div>
                            <div class="range-fill"></div>
                            <div class="range-labels">
                                <span class="min-label">$500</span>
                                <span class="max-label">$1,500</span>
                            </div>
                            <div class="range-min-value">$0</div>
                            <div class="range-max-value">$100,000</div>
                        </div>

                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="treatment" tabindex="-1" aria-labelledby="priceRangeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Filter Treatment Type</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div>
                                <label for="">Select Categroy</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select category</option>
                                </select>
                            </div>
                            <div>
                                <label for="">Select Treatment</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select treatment</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="destination" tabindex="-1" aria-labelledby="priceRangeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title" id="priceRangeModalLabel">Destination-Based Discovery</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0">
                        <div class="row g-2 align-items-center mb-3">
                            <div>
                                <label for="">Select Country</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select category</option>
                                </select>
                            </div>
                            <div>
                                <label for="">Select City</label>
                                <select name="" class="form-control" id="">
                                    <option value="">select treatment</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HospitalList from '~/components/hospital/HospitalList.vue';


const { data, pending, error } = await useFetch('http://flyhospital.test/api/')

const hospitals = computed(() => data.value?.hospitals ?? [])
const destinations = computed(() => data.value?.destinations ?? [])

</script>
