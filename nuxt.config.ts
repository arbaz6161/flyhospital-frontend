// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'usebootstrap',
    '@nuxt/eslint',
    'nuxt-link-checker',
    '@nuxt/icon',
    'nuxt-swiper'
  ],
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
      }
    }
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
    '~/assets/css/about.css'
  ]
})