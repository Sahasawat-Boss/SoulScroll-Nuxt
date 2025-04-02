<script setup lang="ts">
definePageMeta({
    layout: 'mtheme2'
})

import { SlideItems } from '~/data/Items'
const items = SlideItems
</script>

<template>
    <div class="relative w-full h-full py-20 px-6 md:px-12 xl:px-20 bg-cover bg-center"
        style="background-image: url('/images/book1/map/book1map.jpg')">
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black/75 backdrop-blur-[10px] z-0"></div>

        <!-- Foreground content -->
        <div class="relative z-10">
            <Nav />

            <h1 class="text-2xl md:text-3xl font-semibold mb-8 text-center text-white"
                style="text-shadow: 2px 3px 8px rgba(0,0,0,0.2);">📜 Book 1 Timeline</h1>

            <div class="max-w-lg mx-auto border-l border-white/30 pl-4 sm:pl-6 text-white space-y-6">
                <div v-for="item in items" :key="item.id"
                    class="hover:bg-white/10 transition rounded-xl p-4 sm:p-5 relative">
                    <h2 class="text-lg md:text-xl font-semibold">{{ item.title }}</h2>
                    <p class="indent-4 text-sm md:text-base opacity-70">{{ item.description }}</p>
                    <img :src="item.image" :alt="item.title" class="mt-3 rounded shadow-md w-1/2 md:w-1/3" />
                    <NuxtLink to="/book/book1">
                        <button class="mt-3 px-2 py-1.5 text-white text-sm md:text-base bg-white/16 hover:bg-white/25 backdrop-blur-sm rounded-lg transition hover">
                            📖 Read Book 1
                        </button>
                    </NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>
