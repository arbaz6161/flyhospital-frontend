import { defineStore } from 'pinia'

/**
 * Interfaces for hospitals and destinations
 * (adjust fields based on your actual API response)
 */
export interface Hospital {
  id: number
  name: string
  image_url?: string
  description?: string
}

export interface Destination {
  id: number
  name: string
  image_url?: string
  description?: string
}

interface LandingPageResponse {
  hospitals: Hospital[]
  destinations: Destination[]
}

interface LandingPageState {
  hospitals: Hospital[]
  destinations: Destination[]
  lastFetched: number | null
}

export const useLandingPageStore = defineStore('landingPage', {
  state: (): LandingPageState => ({
    hospitals: [],
    destinations: [],
    lastFetched: null,
  }),

  getters: {
    isStale: (state) => {
      if (!state.lastFetched) return true
      // Consider data stale after 1 hour
      const oneHour = 60 * 60 * 1000
      return Date.now() - state.lastFetched > oneHour
    },
  },

  actions: {
    async index(forceRefresh = false): Promise<LandingPageResponse | null> {
      // If data exists and not forcing refresh, return cached
      // Data will only refresh on hard refresh (F5) which clears the store
      if (!forceRefresh && this.hospitals.length > 0 && this.destinations.length > 0) {
        return {
          hospitals: this.hospitals,
          destinations: this.destinations,
        }
      }

      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/landing-page`

      const { data, error } = await useFetch<LandingPageResponse>(api)

      if (error.value) {
        console.error(error.value)
        return null
      }

      this.hospitals = data.value?.hospitals ?? []
      this.destinations = data.value?.destinations ?? []
      this.lastFetched = Date.now()

      return {
        hospitals: this.hospitals,
        destinations: this.destinations,
      }
    },

    // Force refresh - clears cache and fetches fresh data
    async refresh(): Promise<LandingPageResponse | null> {
      this.hospitals = []
      this.destinations = []
      this.lastFetched = null
      return this.index(true)
    },
  },
})
