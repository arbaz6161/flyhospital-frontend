// stores/hospital.ts
import { defineStore } from 'pinia'

export const useHospitalStore = defineStore('hospital', {
    state: () => ({
        hospitals: [] as any[],
        totalHospitals: 0,
        countries: [] as any[],
        cities: [] as any[],
        search: '' as string,
        country_id: '' as string | number,
        city_id: '' as string | number,
    }),

    actions: {
        async index() {
            const query = new URLSearchParams()

            if (this.search) query.append('search', this.search)
            if (this.country_id) query.append('country_id', String(this.country_id))
            if (this.city_id) query.append('city_id', String(this.city_id))

            const { data, error } = await useFetch(
                `https://flyhospitals.dev/api/hospitals?${query.toString()}`
            )

            if (error.value) {
                console.error('❌ API Error:', error.value)
                return
            }

            if (data.value) {
                this.hospitals = data.value.data ?? data.value
                this.totalHospitals = data.value.total_hospitals ?? 0
            }
        },

        // Load countries
        async loadCountries() {
            const { data, error } = await useFetch(
                'https://flyhospitals.dev/api/countries'
            )

            if (error.value) {
                console.error('❌ API Error:', error.value)
                return
            }

            if (data.value) {
                this.countries = data.value.data ?? data.value
            }
        },

        // Load cities by countries
        async loadCities(countryId: string | number) {
            if (!countryId) {
                this.cities = []
                return
            }

            const { data, error } = await useFetch(`https://flyhospitals.dev/api/countries/${countryId}/cities`)
            if (error.value) return console.error(error.value)
            this.cities = data.value.data ?? data.value
        }
    },
})
