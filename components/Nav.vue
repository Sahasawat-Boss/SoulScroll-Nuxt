<template>
    <header
        class="z-50 px-4.5 md:px-6 py-3 fixed top-0 left-0 w-full backdrop-blur-xs bg-black/20 border-b border-white/15 shadow-md flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex text-2xl md:text-3xl text-white hover italic fade-in font-semibold"
            style="text-shadow: 2px 3px 6px rgba(0,0,0,0.4);">
            SoulScroll
        </NuxtLink>


        <!-- bossbsynth.com - External Link -->
        <a href="https://bossbsynth.com/" class="hidden md:block text-[10px] md:text-sm text-white hover italic mt-1 fade-in
            " style="text-shadow: 2px 3px 7px rgba(0,0,0,0.6);">
            bossbsynth.com
        </a>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex justify-center gap-3.5 lg:gap-7 md:text-base font-medium text-white fade-in"
            style="text-shadow: 2px 1px 8px rgba(0,0,0,0.6);">
            <li>
                <NuxtLink to="/" class="hover:underline underline-offset-4" active-class="text-blue-400">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book1" class="hover:underline underline-offset-4" active-class="text-blue-400">Book1
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book2" class="hover:underline underline-offset-4" active-class="text-blue-400">Book2
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="hover:underline underline-offset-4" active-class="text-blue-400">About
                </NuxtLink>
            </li>
        </ul>

        <!-- Mobile Menu Icon -->
        <div class="md:hidden fade-in">
            <button @click="isOpen = !isOpen"
                class="text-white focus:outline-none hover hover:text-blue-400 fixed right-5 top-3.5">
                <LiMenuCircle class="text-[27px]" />
            </button>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isOpen"
        class="md:hidden fixed top-[55px] left-0 w-full h-[70vh] bg-black text-white text-2xl z-50 py-10 fade-in-right">
        <ul class="flex flex-col items-center gap-6 py-6">
            <li>
                <NuxtLink to="/" class="hover:cursor-pointer hover:underline underline-offset-4"
                    active-class="text-blue-400">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book1" class="hover:cursor-pointer hover:underline underline-offset-4"
                    active-class="text-blue-400">Book 1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book2" class="hover:cursor-pointer hover:underline underline-offset-4"
                    active-class="text-blue-400">Book 2</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="hover:cursor-pointer hover:underline underline-offset-4"
                    active-class="text-blue-400">About</NuxtLink>
            </li>
        </ul>
        <div class="flex justify-center items-center mt-7">
            <a href="https://bossbsynth.com/"
                class="hover:cursor-pointer italic hover:underline underline-offset-4">bossbsynth.com</a>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

import { LiMenuCircle } from '@kalimahapps/vue-icons';
</script>

<style scoped></style>