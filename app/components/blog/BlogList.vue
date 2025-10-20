<template>
  <section class="blogs-section">
    <div class="container">
      <div class="section-header">
        <h2>Blogs</h2>
        <p>
          Explore our top-rated procedure in neurology, plastic surgery,
          dentistry, and oncology, delivered with precision for the best outcomes.
        </p>
      </div>

      <div v-if="loading">Loading blogs...</div>
      <div v-else-if="error">{{ error }}</div>

      <div v-else class="blogs-grid">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
           <img :src="blog.image_url" :alt="blog.title" />
          <div class="blog-content">
            <h3>{{ blog.title }}</h3>
            <p class="truncate-lines">{{ blog.content }}</p>
            <!-- <NuxtLink :to="`/blogs/${blog.slug}`">Read More</NuxtLink> -->
            <NuxtLink >Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGeneralStore } from '~/stores/general'

const store = useGeneralStore()
 const config = useRuntimeConfig()
// ✅ SSR-friendly call
await useAsyncData('blogs', () => store.fetchBlogs())

const blogs = computed(() => store.blogs.slice(0, 4))
const loading = computed(() => store.loading)
const error = computed(() => store.error)
</script>
<style>
.truncate-lines {
  display: -webkit-box;
  -webkit-line-clamp: 4;   /* max lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>