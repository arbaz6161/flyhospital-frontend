import { defineStore } from 'pinia'

export const useLandingPageStore = defineStore('landingPage', {
    state: () => ({
        hospitals: [] as any[],
        destinations: [] as any[],
        totalHospitals: 1654,
        selectedHospital: null as any | null,
    }),
    actions: {
        async fetchLandingPageData() {
            const { data, error } = await useFetch('http://flyhospital.test/api/')

            if (error.value) {
                console.error('❌ API Error:', error.value)
                return
            }

            this.hospitals = data.value?.hospitals ?? []
            this.destinations = data.value?.destinations ?? []
        },

        setSelectedHospital(hospital: any) {
            this.selectedHospital = hospital
        },
    }
})
