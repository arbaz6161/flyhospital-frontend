import { defineStore } from 'pinia'

export const useLandingPageStore = defineStore('landingPage', {
    state: () => ({
        hospitals: [] as any[],
        destinations: [] as any[],
    }),
    actions: {
        async index() {
            const { data, error } = await useFetch('https://flyhospitals.dev/api/landing-page')

            console.log(data);

            if (error.value) {
                console.error('❌ API Error:', error.value)
                return
            }

            this.hospitals = data.value?.hospitals ?? []
            this.destinations = data.value?.destinations ?? []
        }
    }
})
