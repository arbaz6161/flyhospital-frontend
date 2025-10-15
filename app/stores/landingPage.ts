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
}

export const useLandingPageStore = defineStore('landingPage', {
  state: (): LandingPageState => ({
    hospitals: [],
    destinations: [],
  }),

  actions: {
    async index(): Promise<LandingPageResponse | null> {
      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/landing-page`

      const { data, error } = await useFetch<LandingPageResponse>(api)

      if (error.value) {
        console.error(error.value)
        return null
      }

      this.hospitals = data.value?.hospitals ?? []
      this.destinations = data.value?.destinations ?? []

      return {
        hospitals: this.hospitals,
        destinations: this.destinations,
      }
    },
  },
})
