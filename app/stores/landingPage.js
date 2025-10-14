import { defineStore } from 'pinia'

export const useLandingPageStore = defineStore('landingPage', {
  state: () => ({
    hospitals: [],
    destinations: [],
  }),
  actions: {
    async index() {
      const { data, error } = await useFetch('https://flyhospitals.dev/api/landing-page')

      if (error.value) {
        console.error(error.value)
        return null
      }

      this.hospitals = data.value?.hospitals ?? []
      this.destinations = data.value?.destinations ?? []

      return {
        hospitals: this.hospitals,
        destinations: this.destinations
      }
    }
  }
})
