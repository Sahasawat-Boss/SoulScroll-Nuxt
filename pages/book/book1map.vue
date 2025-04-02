<template>
    <div class="relative w-full h-full py-20 px-6 md:px-12 xl:px-20 bg-cover bg-center"
        style="background-image: url('/images/map/map2.jpg')">
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black/65 backdrop-blur-[10px] z-0"></div>

        <!-- Foreground content -->
        <div class="relative z-10">
            <Nav />

            <BackButton/>

            <h1 class="text-2xl md:text-3xl font-semibold mb-1 -mt-3 text-center text-white fade-in"
                style="text-shadow: 2px 3px 8px rgba(0,0,0,0.8);">Map📜</h1>

            <div class="max-w-lg mx-auto border-l border-white/30 pl-3 sm:pl-6 text-white fade-in">

                <h1 class="text-xl md:text-2xl font-semibold text-white"
                    style="text-shadow: 2px 3px 8px rgba(0,0,0,0.5);">Book 1</h1>

                <div v-for="item in items" :key="item.id"
                    class="hover:bg-white/10 transition rounded-xl px-4 py-2 sm:p-5 relative">

                    <div class="absolute -left-5.5 top-3.5 md:-left-8.5 md:top-6">
                        <AkDoubleSword class="text-lg md:text-xl text-white/65" />
                    </div>

                    <h2 class="text-lg md:text-xl font-semibold">{{ item.title }}</h2>

                    <p class="indent-4 text-BASE md:text-LG opacity-70">{{ item.description }}</p>

                    <img :src="item.image" :alt="item.title" class="mt-3 rounded-2xl shadow-md w-[45%] md:w-1/2" />

                    <div class="flex gap-2 fade-in-right">
                        <NuxtLink to="/book/book1">
                            <button
                                class="mt-3 px-2 py-1.5 text-white text-sm md:text-base bg-white/16 hover:bg-white/25 backdrop-blur-sm rounded-lg transition hover">
                                📖 Read Book 1
                            </button>
                        </NuxtLink>
                        <NuxtLink to="/inventory/book1">
                            <button
                                class="mt-3 px-2 py-1.5 text-white text-sm md:text-base bg-white/16 hover:bg-white/25 backdrop-blur-sm rounded-lg transition hover flex items-center gap-2">
                                <CaInventoryManagement class="w-4 h-4" />
                                Inventory
                            </button>
                        </NuxtLink>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BackButton from '~/components/BackButton.vue';
import { SlideItems } from '~/data/Items'
const items = SlideItems

import { AkDoubleSword, CaInventoryManagement } from '@kalimahapps/vue-icons';
</script>