<template>
    <header class="container-fluid bg-white shadow-sm sticky-top">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand" active-class="active" exact-active-class="active">
                    <img src="~assets/img/logo.png" class="logo" alt="FlyHospitals Logo">
                    <span> FlyHospitals </span>
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto align-items-center">
                        <li class="nav-item dropdown nav-item dropdown relative">
                            <Dropdown>
                                <DropdownToggle class="dropdown-toggle d-flex align-items-center nav-link">
                                    Locations
                                    <Icon name="carbon:chevron-down"></Icon>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/">
                                        New York
                                    </DropdownItem>
                                    <DropdownItem to="/">Los Angeles</DropdownItem>
                                    <DropdownItem to="/">Chicago</DropdownItem>
                                    <DropdownItem to="/">Houston</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li class="nav-item dropdown">
                            <Dropdown>
                                <DropdownToggle class="dropdown-toggle d-flex align-items-center nav-link">
                                    Treatments
                                    <Icon name="carbon:chevron-down"></Icon>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/">Dental Care</DropdownItem>
                                    <DropdownItem to="/">Cosmetic Surgery</DropdownItem>
                                    <DropdownItem to="/">Physiotherapy</DropdownItem>
                                    <DropdownItem to="/">Cardiology</DropdownItem>
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
