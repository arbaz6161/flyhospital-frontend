// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true, // ✅ ensures SSR is enabled
  app: {
    head: {
      title: "Flyhospital",
      meta: [
        { name: "description", content: "A simple Nuxt SSR example with useHead" }
      ],
      link: [
      //   // ✅ Bootstrap CSS
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
         
        },
      //   // ✅ Google Fonts: Montserrat
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap",
      //   },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
        },
      //   // ✅ Google Fonts: Moulpali (loaded with print -> all trick)
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/css?family=Moulpali&display=swap",
      //     media: "print",
      //     onload: "this.media='all'",
      //   },
      //   // ✅ Font Awesome
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
      //   },
      // ],
      //    script: [
      //   // ✅ Bootstrap JS Bundle (with Popper)
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
      //     integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
      //     crossorigin: "anonymous",
      //     defer: true,
      //   },
      ],
    },
  },

   css: [
    '~/assets/css/style.css',
    '~/assets/css/start.css',
    '~/assets/css/partner.css',
    '~/assets/css/otp.css',
    '~/assets/css/modal.css',
    '~/assets/css/list.css',
    '~/assets/css/header.css',
    '~/assets/css/footer.css',
    '~/assets/css/details.css',
    '~/assets/css/contact.css',
    '~/assets/css/about.css',
    '~/assets/css/main.css'
  ],

   modules: [
    'usebootstrap',
    '@nuxt/eslint',
    'nuxt-link-checker',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],

  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: 'http://flyhospital.test/api',
      webUrl: 'http://localhost:3000',
    },
  },
})
