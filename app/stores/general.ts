import { defineStore } from 'pinia'

export interface Blog {
  id: number
  title: string
  content: string
  image_url: string
  tags?: string
  created_at?: string
  updated_at?: string
  slug?: string // if backend adds slug
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

        // ✅ Match API structure
        const res = await $fetch<ApiResponse<Blog>>(api)

        this.blogs = res.data.data
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
  },
})
