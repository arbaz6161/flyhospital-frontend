<template>
    <main class="container mt-4">
        <!-- Breadcrumb -->
        <Breadcrumb :items="[
            { label: 'Home', link: '/' },
            { label: title, active: true }
        ]" />

        <div v-if="loading" class="text-center py-5">
            <Loader />
        </div>

        <div v-else-if="error" class="text-center py-5">
            <div>no blogs</div>
            <NuxtLink to="/" class="btn btn-primary mt-3">Go Home</NuxtLink>
        </div>

        <div v-else-if="blog" class="row my-4">
            <div class="col-lg-8 mx-auto">
                <div class="blog-header mb-4">
                    <h1 class="mb-3">{{ blog.title }}</h1>
                    <div class="text-muted mb-3" v-if="blog.created_at">
                        {{ formatDate(blog.created_at) }}
                    </div>
                    <div class="text-muted mb-3" v-if="blog.tags">
                        {{ blog.tags }}
                    </div>
                </div>

                <div class="blog-image mb-4">
                    <img :src="blog.media?.[0]?.original_url || blog.image_url" :alt="blog.title"
                        class="img-fluid rounded" @error="handleImageError" />
                </div>

                <!-- Social Share -->
                <div class="share-section mt-5 border-top border-bottom py-4">
                    <p class="h5 mb-3">Share with your community!</p>
                    <div class="d-flex gap-3 social-buttons">
                        <a href="#" @click.prevent="shareOnFacebook" class="social-btn facebook"
                            title="Share on Facebook">
                            <Icon name="bi:facebook" />
                        </a>
                        <a href="#" @click.prevent="shareOnTwitter" class="social-btn twitter" title="Share on Twitter">
                            <Icon name="bi:twitter-x" />
                        </a>
                        <a href="#" @click.prevent="shareOnLinkedIn" class="social-btn linkedin"
                            title="Share on LinkedIn">
                            <Icon name="bi:linkedin" />
                        </a>
                    </div>
                </div>

                <div class="blog-content p-4">
                    <div v-html="blog.content"></div>
                </div>

                <!-- Social Share -->
                <div class="share-section mt-5 border-top border-bottom py-4">
                    <p class="h5 mb-3">Like what you see? Share it with your friends!</p>
                    <div class="d-flex gap-3 social-buttons">
                        <a href="#" @click.prevent="shareOnFacebook" class="social-btn facebook"
                            title="Share on Facebook">
                            <Icon name="bi:facebook" />
                        </a>
                        <a href="#" @click.prevent="shareOnTwitter" class="social-btn twitter" title="Share on Twitter">
                            <Icon name="bi:twitter-x" />
                        </a>
                        <a href="#" @click.prevent="shareOnLinkedIn" class="social-btn linkedin"
                            title="Share on LinkedIn">
                            <Icon name="bi:linkedin" />
                        </a>
                    </div>
                </div>

                <div class="mt-5 border-top pt-4" v-if="relatedBlogs.length > 0">
                    <p class="h5 mb-3">Related Blogs</p>
                    <div class="row g-3">
                        <div v-for="relatedBlog in relatedBlogs" :key="relatedBlog.id" class="col-6 col-md-3">
                            <NuxtLink :to="`/blogs/${relatedBlog.id}`" class="d-block text-decoration-none">
                                <img :src="relatedBlog.media?.[0]?.original_url || relatedBlog.image_url"
                                    :alt="relatedBlog.title" class="img-fluid rounded mb-2"
                                    style="width:100%; height:150px; object-fit:cover;" @error="handleImageError" />
                                <h6 class="text-dark small text-truncate">{{ relatedBlog.title }}</h6>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGeneralStore } from '~/stores/general'
import type { Blog } from '~/stores/general'
import Loader from '~/components/Loader.vue'

const route = useRoute()
const store = useGeneralStore()
const id = route.params.id as string

const blog = ref<Blog | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const title = computed(() => blog.value?.title || 'Blog Details')

const relatedBlogs = computed(() => {
    return store.blogs
        .filter(b => b.id !== (blog.value?.id || 0))
        .slice(0, 4)
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    })
}

const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement
    target.src = 'https://placehold.co/800x400?text=No+Image'
}

const getShareUrl = () => {
    if (process.client) {
        return window.location.href
    }
    return ''
}

const shareOnFacebook = () => {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const shareOnTwitter = () => {
    const url = encodeURIComponent(getShareUrl())
    const text = encodeURIComponent(title.value)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
}

// Fetch blog details
onMounted(async () => {
    if (!id) {
        error.value = 'Invalid blog identification'
        loading.value = false
        return
    }

    // Check if we already have it in store list (optimization)
    const existing = store.blogs.find(b => String(b.id) === String(id))
    if (existing) {
        blog.value = existing
        loading.value = false
        // No return here, so we can fetch related blogs below
    } else {
        // Otherwise fetch from API
        const fetchedBlog = await store.fetchBlogById(id)
        if (fetchedBlog) {
            blog.value = fetchedBlog
        } else {
            error.value = store.error || 'Blog not found'
        }
        loading.value = false
    }

    // Fetch related blogs if not already available or few
    if (store.blogs.length <= 1) { // <= 1 because we might only have the current one
        // Pass string id to fetch blogs safely
        await store.fetchBlogs(1)
    }
})

// Update head meta
useHead({
    title: () => blog.value?.title ? `${blog.value.title} - FlyHospital` : 'Blog Details',
    meta: [
        { name: 'description', content: () => blog.value?.content?.slice(0, 160) || '' }
    ]
})
</script>

<style scoped>
.blog-content :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
}

.blog-content :deep(p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #333;
}

.blog-content :deep(h2),
.blog-content :deep(h3) {
    color: #053862;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.section-base {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f8f9fa;
    color: #053862;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.social-btn:hover {
    transform: translateY(-3px);
    color: #fff;
}

.social-btn.facebook:hover {
    background: #1877f2;
}

.social-btn.twitter:hover {
    background: #000;
}

.social-btn.linkedin:hover {
    background: #0077b5;
}
</style>
