<script setup lang="ts">
definePageMeta({
    layout: 'mtheme2'
})

import { SlideItems } from '~/data/Items'
const items = SlideItems
</script>

<template>
    <div class="px-4 py-22 max-w-4xl mx-auto text-white">
        <Nav />

        <h1 class="text-3xl font-bold mb-6 text-center">📜 Book 1 Timeline</h1>

        <div class="space-y-8 border-l border-white/20 pl-6 relative">
            <div v-for="item in items" :key="item.id"
                class="relative before:absolute before:-left-3 before:top-1 before:w-4 before:h-4 before:rounded-full before:bg-sky-400">
                <h2 class="text-xl font-semibold">{{ item.title }}</h2>
                <p class="text-sm opacity-70">{{ item.description }}</p>
                <img :src="item.image" :alt="item.title" class="w-[20%] mt-2 rounded shadow-md" />
            </div>

        </div>
    </div>
</template>
