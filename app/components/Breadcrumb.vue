<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: item.active }">
                <template v-if="!item.active">
                    <a :href="item.link">{{ item.label }}</a>
                    <span class="breadcrumb-separator mx-1">
                        <i class="bi bi-chevron-right"></i>
                    </span>
                </template>
                <template v-else>
                    {{ item.label }}
                </template>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    items: { label: string; link?: string; active?: boolean }[]
}>()
</script>
