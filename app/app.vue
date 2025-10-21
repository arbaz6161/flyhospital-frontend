<template>
    <Loader v-if="loading">

    </Loader>
  <NuxtLayout  v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000) 
})
</script>