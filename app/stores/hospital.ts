// stores/hospital.ts
import { defineStore } from 'pinia'

export const useHospitalStore = defineStore('hospital', {
    state: () => ({
        hospitals: [] as any[],
        pagination: {
            current_page: 1,
            per_page: 5,
            total: 0,
            last_page: 1,
        },
    }),

    actions: {
        async index(page = 1, append = false) {

            const { data, error } = await useFetch(
                `http://flyhospital.test/api/hospitals?page=${page}&per_page=${this.pagination.per_page}`
            )

            if (error.value) {
                console.error('❌ API Error:', error.value)
                return
            }

            if (data.value) {
                // Append or Replace depending on load type
                this.hospitals = append
                    ? [...this.hospitals, ...data.value.data]
                    : data.value.data

                this.pagination = {
                    current_page: data.value.current_page,
                    per_page: data.value.per_page,
                    total: data.value.total,
                    last_page: data.value.last_page,
                }
            }
        },

        async loadMore() {
            if (this.pagination.current_page < this.pagination.last_page) {
                await this.index(this.pagination.current_page + 1, true)
            }
        },
    },
})
