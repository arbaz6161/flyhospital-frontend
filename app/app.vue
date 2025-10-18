<template>
  <NuxtLayout>
     <div v-if="loading" class="loader-screen">
      <h1>Loading...</h1>
    </div>
 
    <NuxtPage  v-else/>
  </NuxtLayout>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  // wait until store loads
  setTimeout(() => {
    loading.value = false
  }, 1000) // simulate async
})
</script>