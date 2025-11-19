<template>
    <div class="main-content">
        <div class="registration-panel">
            <div class="row g-0">
                <!-- Left Column -->
                <div class="col-lg-5">
                    <div class="left-column">
                        <h1>Welcome to ClickHospitals Partnership Registration!</h1>
                        <p>Create an account to become our partner and list your clinic on ClickHospitals in 4 simple
                            steps.</p>
                        <img src="~/assets/img/map.png" alt="World map with location pins">
                    </div>
                </div>

                <!-- Right Column -->
                <div class="col-lg-7">
                    <div class="right-column">
                        <!-- Stepper -->
                        <ul class="stepper-nav">
                            <li class="step active"><a href="#">1. Profile</a></li>
                            <li class="step"><a href="#">2. Contact</a></li>
                            <li class="step"><a href="#">3. Step form</a></li>
                            <li class="step"><a href="#">4. Step form</a></li>
                        </ul>

                        <!-- Registration Form -->
                        <form>
                            <div class="row g-4">
                                <div class="col-md-6"><label for="name" class="form-label">Name</label><input
                                        type="text" class="form-control" id="name" value="Alex White"></div>
                                <div class="col-md-6"><label for="email" class="form-label">Email</label><input
                                        type="email" class="form-control" id="email" value="example@gmail.com"></div>
                                <div class="col-md-6"><label for="phone" class="form-label">Phone</label>
                                    <div class="input-group phone-input-group"><button class="btn dropdown-toggle"
                                            type="button">🇨🇦</button><input type="tel" class="form-control"
                                            id="phone"></div>
                                </div>
                                <div class="col-md-6"><label for="category" class="form-label">Category</label><select
                                        class="form-select" id="category">
                                        <option selected>General</option>
                                    </select></div>
                                <div class="col-12"><label for="subject" class="form-label">Subject</label><input
                                        type="text" class="form-control" id="subject" placeholder="Type subject here">
                                </div>
                                <div class="col-12"><label for="message" class="form-label">Message</label><textarea
                                        class="form-control" id="message"
                                        placeholder="Type your message here..."></textarea></div>
                                <div class="col-12 mt-4">
                                    <NuxtLink to="/auth/otp" type="submit" class="btn btn-primary btn-continue">
                                        Continue
                                    </NuxtLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})
</script>