import { defineStore } from 'pinia'

interface Country {
  id: number | string
  country_name: string
  slug?: string
}

interface City {
  id: number | string
  name: string
  country_id?: number | string
}

export const useHospitalListStore = defineStore('hospitalList', {
  state: () => ({
    hospitals: [] as any[],
    totalHospitals: 0,
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    initialLoadCount: 0, // Track how many hospitals were loaded initially

    // filters
    search: '',
    country_id: '',
    city_id: '',
    category_id: '',
    treatment_id: '',
    loader: false,
    countries: [] as any[],
    cities: [] as any[],
    citiesCache: {} as Record<string | number, any[]>, // Cache cities by country ID
    id:'',
    hospital:Object
  }),

  actions: {
    // 🔹 Build query for API
    buildQuery(page: number) {
      const query: Record<string, string> = {}
      if (this.search) query.search = this.search
      if (this.country_id) query.country_id = String(this.country_id)
      if (this.city_id) query.city_id = String(this.city_id)
      if (this.category_id) query.procedure_id = this.category_id
      if (this.treatment_id) query.treatment_id = this.treatment_id

      query.page = String(page)
      query.per_page = String(this.perPage)

      return query
    },

    async list(page = 1, showLoader = true) {
      if (showLoader) this.loader = true
      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/hospital-listing`

      try {
        const data: any = await $fetch(api, { params: this.buildQuery(page) })

        this.hospitals = data.data ?? []
        this.totalHospitals = data.total_hospitals ?? 0
        this.currentPage = data.current_page ?? 1
        this.lastPage = data.last_page ?? 1
        // Track initial load count (first page only)
        if (page === 1) {
          this.initialLoadCount = this.hospitals.length
        }
      } catch (err) {
        console.error('❌ API Error:', err)
        this.hospitals = []
        this.totalHospitals = 0
        this.initialLoadCount = 0
      } finally {
        if (showLoader) this.loader = false
      }
    },

    async loadMore() {
      // Prevent loading if already loading or at last page
      if (this.loader || this.currentPage >= this.lastPage) {
        return
      }

      this.loader = true
      const nextPage = this.currentPage + 1
      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/hospital-listing`

      try {
        const data: any = await $fetch(api, { params: this.buildQuery(nextPage) })
        const newHospitals = data.data ?? []
        
        // Only append new hospitals (avoid duplicates)
        const existingIds = new Set(this.hospitals.map(h => h.id))
        const uniqueNewHospitals = newHospitals.filter((h: any) => !existingIds.has(h.id))
        
        this.hospitals.push(...uniqueNewHospitals)
        this.currentPage = data.current_page ?? nextPage
        this.lastPage = data.last_page ?? this.lastPage
      } catch (err) {
        console.error('❌ API Error:', err)
      } finally {
        this.loader = false
      }
    },

    loadLess() {
      // Only allow load less if we have more than the initial load
      if (this.hospitals.length <= this.initialLoadCount || this.currentPage <= 1) {
        return
      }

      // Remove the last page of hospitals (perPage items)
      this.hospitals = this.hospitals.slice(0, -this.perPage)
      this.currentPage = Math.max(1, this.currentPage - 1)
    },

    async loadPrevious() {
      if (this.currentPage > 1) {
        this.loader = true
        const prevPage = this.currentPage - 1
        const config = useRuntimeConfig()
        const api = `${config.public.baseUrl}/hospital-listing`

        try {
          const data: any = await $fetch(api, { params: this.buildQuery(prevPage) })
          this.hospitals = data.data ?? []
          this.currentPage = data.current_page ?? prevPage
        } catch (err) {
          console.error('❌ API Error:', err)
        } finally {
          this.loader = false
        }
      }
    },

    // Load countries
    async loadCountries() {
      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/countries`

      try {
        const response = await $fetch<{
          data?: Country[]
          status?: boolean
        } | Country[]>(api)

        if (Array.isArray(response)) {
          this.countries = response
        } else {
          this.countries = (response as { data?: Country[] }).data ?? []
        }
      } catch (err) {
        console.error('❌ Failed to load countries:', err)
      }
    },

    // Load cities by countries (with caching)
    async loadCities(countryId: string | number, forceRefresh = false) {
      if (!countryId) {
        this.cities = []
        return
      }

      // Check cache first
      if (!forceRefresh && this.citiesCache[countryId]) {
        this.cities = this.citiesCache[countryId]
        return
      }

      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/countries/${countryId}/cities`

      try {
        const response = await $fetch<{
          data?: City[]
          status?: boolean
        } | City[]>(api)
        
        const cities = Array.isArray(response) ? response : (response.data ?? [])
        this.cities = cities
        this.citiesCache[countryId] = cities // Cache the result
      } catch (err) {
        console.error('❌ Failed to load cities:', err)
        this.cities = []
      }
    },
    async details(id: string | number) {
      if (!id) {
        this.hospital = {} as any
        return
      }

      this.loader = true
      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/hospital/${id}`

      try {
        const response = await $fetch<{
          data?: any
          status?: boolean
        } | any>(api)
        
        if (response && typeof response === 'object' && 'data' in response) {
          this.hospital = (response as { data?: any }).data ?? {}
        } else {
          this.hospital = (response as any) ?? {}
        }
      } catch (err) {
        console.error('❌ Failed to load hospital details:', err)
        this.hospital = {} as any
      } finally {
        this.loader = false
      }
    }
  },
})
