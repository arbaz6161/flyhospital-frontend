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
  }),

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
      } catch (err: any) {
        this.error = err?.message ?? 'Failed to fetch blogs'
      } finally {
        this.loading = false
      }
    },

    async fetchTreatments(): Promise<void> {
    try {
      this.loading = true
      this.error = null

      const config = useRuntimeConfig()
      const api = `${config.public.baseUrl}/treatments`

      const res = await $fetch<{ status: boolean; data: Treatments[] }>(api)

      this.treatments = res.data   // ✅ directly assign array
    } catch (err: any) {
      this.error = err?.message ?? 'Failed to fetch treatments'
    } finally {
      this.loading = false
    }
  },
  async fetchMedicalDestination(): Promise<void> {
      try {
        this.loading = true
        this.error = null

        const config = useRuntimeConfig()
        const api = `${config.public.baseUrl}/destinations`

        const res = await $fetch(api)

        this.destinations = res.data  // ✅ directly assign array
      } catch (err: any) {
        this.error = err?.message ?? 'Failed to fetch destinations'
      } finally {
        this.loading = false
      }
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