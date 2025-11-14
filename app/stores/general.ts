import { defineStore } from 'pinia'

export interface Blog {
  id: number
  title: string
  content: string
  image_url: string
  tags?: string
  created_at?: string
  updated_at?: string
  slug?: string
}

export interface Treatments {
  id: number
  name: string
  description: string
  image_url: string
  price?: string
  created_at?: string
  updated_at?: string
  slug?: string // Added slug for potential dynamic routing
}

interface PaginatedResponse<T> {
  current_page: number
  data: T[]
  last_page: number
  next_page_url: string | null
  prev_page_url: string | null
  total: number
}

interface ApiResponse<T> {
  status: boolean
  data: PaginatedResponse<T>
}

interface GeneralState {
  blogs: Blog[]
  treatments: Treatments[]
  subprocedures: Treatments[]
  destinations: []
  loading: boolean
  error: string | null
  pagination: {
    current_page: number
    last_page: number
    total: number
  }
  lastFetched: {
    blogs: number | null
    treatments: number | null
    destinations: number | null
  }
}

export const useGeneralStore = defineStore('general', {
  state: (): GeneralState => ({
    blogs: [],
    treatments: [],
    subprocedures: [],
    destinations: [],
    loading: false,
    error: null,
    pagination: {
      current_page: 1,
      last_page: 1,
      total: 0,
    },
    lastFetched: {
      blogs: null,
      treatments: null,
      destinations: null,
    },
  }),

  getters: {
    isStale: (state) => (key: 'blogs' | 'treatments' | 'destinations') => {
      if (!state.lastFetched[key]) return true
      // Consider data stale after 1 hour
      const oneHour = 60 * 60 * 1000
      return Date.now() - state.lastFetched[key]! > oneHour
    },
  },

  actions: {
    async fetchBlogs(page = 1): Promise<void> {
      try {
        this.loading = true
        this.error = null

        const config = useRuntimeConfig()
        const api = `${config.public.baseUrl}/blogs?page=${page}`

        const res = await $fetch<ApiResponse<Blog>>(api)

        this.blogs = res.data.data
        this.loading =false;
        this.pagination = {
          current_page: res.data.current_page,
          last_page: res.data.last_page,
          total: res.data.total,
        }
        this.lastFetched.blogs = Date.now()
      } catch (err: any) {
        this.error = err?.message ?? 'Failed to fetch blogs'
      } finally {
        this.loading = false
      }
    },

    async fetchTreatments(forceRefresh = false): Promise<void> {
    // If data exists and not forcing refresh, skip
    // Data will only refresh on hard refresh (F5) which clears the store
    if (!forceRefresh && this.treatments.length > 0) {
      return
    }

    try {
      this.loading = true
      this.error = null

      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/treatments`

      const res = await $fetch<{ status: boolean; data: Treatments[] }>(api)

      this.treatments = res.data   // ✅ directly assign array
      this.lastFetched.treatments = Date.now()
    } catch (err: any) {
      this.error = err?.message ?? 'Failed to fetch treatments'
    } finally {
      this.loading = false
    }
  },
  async fetchMedicalDestination(forceRefresh = false): Promise<void> {
      // If data exists and not forcing refresh, skip
      // Data will only refresh on hard refresh (F5) which clears the store
      if (!forceRefresh && this.destinations.length > 0) {
        return
      }

      try {
        this.loading = true
        this.error = null

        const config = useRuntimeConfig()
        const api = `${config.public.baseUrl}/destinations`

        const res = await $fetch(api)

        this.destinations = res.data  // ✅ directly assign array
        this.lastFetched.destinations = Date.now()
      } catch (err: any) {
        this.error = err?.message ?? 'Failed to fetch destinations'
      } finally {
        this.loading = false
      }
    },

    // Force refresh all data
    async refreshAll(): Promise<void> {
      this.treatments = []
      this.destinations = []
      this.blogs = []
      this.lastFetched = {
        blogs: null,
        treatments: null,
        destinations: null,
      }
      await Promise.all([
        this.fetchTreatments(true),
        this.fetchMedicalDestination(true),
      ])
    },
  async fetchSubProcedures(treatmentId: string | number): Promise<void> {
      try {
        this.loading = true
        this.error = null

        const config = useRuntimeConfig()
        // Example: /sub-treatments/123 or with query ?treatment_id=123
        const api = `${config.public.baseUrl}/sub-treatments?parent_id=${treatmentId}`
        const res = await $fetch(api)
        this.subprocedures = res.data  // ✅ directly assign array
      } catch (err: any) {
        this.error = err?.message ?? 'Failed to fetch subprocedures'
      } finally {
        this.loading = false
      }
    }

  },
})