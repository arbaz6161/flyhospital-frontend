<template>
    <main class="contact-wrapper">
        <div class="container">
            <div class="row g-5 align-items-start">
                <!-- Left Column -->
                <div class="col-lg-5 ">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="contact-card">
                                <Icon name="mdi:envelope-outline"></Icon>
                                <div>
                                    <h6>Email</h6>
                                    <NuxtLink to="mailto:contact@flyhospitals.com">
                                        contact@flyhospitals.com
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="contact-card">
                                <Icon name="mdi:telephone"></Icon>
                                <div>
                                    <h6>Call us</h6>
                                    <NuxtLink to="tel:+17344475890">
                                        +1(734)-447-5890
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="~/assets/img/contact.png" alt="Patients at reception" class="contact-image mt-3">
                </div>

                <!-- Right Column -->
                <div class="col-lg-7">
                    <div class="contact-form-section">
                        <h1>We're here to help you find your treatment worldwide</h1>
                        <p>Have a question? We look forward to hearing from you. Or are you a medical provider looking
                            to list with us? Just click the Add Your Clinic button in the top-right corner, to create
                            your profile today.</p>

                        <form action="#" method="POST">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Alex White">
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Phone</label>

                                    <div class="input-group phone-input-group" data-flag-input-wrapper>
                                        <input type="hidden" name="tour[pricing][phone_dial_code]"
                                            data-flag-input-dial-code value="971">
                                        <input type="hidden" name="tour[pricing][phone_country_code]"
                                            data-flag-input-country-code value="ae">
                                        <input class="form-control field flag-input" type="text"
                                            name="tour[pricing][phone_number]" data-flag-input value=""
                                            placeholder="Phone" data-error="phone" inputmode="numeric" pattern="[0-9]*"
                                            oninput="this.value = this.value.replace(/[^0-9]/g, '');" maxlength="15">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="category" class="form-label">Category</label>
                                    <select class="form-select" id="category" name="category">
                                        <option selected disabled>Select a category</option>
                                        <option value="general">General</option>
                                        <option value="dental">Dental</option>
                                        <option value="cosmetic">Cosmetic</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="orthopedic">Orthopedic</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="urology">Urology</option>
                                        <option value="dermatology">Dermatology</option>
                                        <option value="ent">ENT</option>
                                        <option value="psychiatry">Psychiatry</option>
                                        <option value="oncology">Oncology</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="subject"
                                        placeholder="Type subject here">
                                </div>
                                <div class="col-12">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message"
                                        placeholder="Type your message here..."></textarea>
                                </div>
                                <div class="col-12 mt-5">
                                    <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
