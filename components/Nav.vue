<template>
    <header
        class="z-50 px-4.5 md:px-6 py-3 fixed top-0 left-0 w-full backdrop-blur-xs bg-black/20 border-b border-white/15 shadow-md flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex text-2xl md:text-3xl font-bold text-white hover italic fade-in">
            SoulScroll
        </NuxtLink>

        <!-- External Link -->
        <a href="https://bossbsynth.com/" class="hidden text-sm md:block text-white hover italic mt-1 fade-in">
            bossbsynth.com
        </a>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex justify-center gap-5 lg:gap-10 font-semibold md:text-lg text-white fade-in">
            <li>
                <NuxtLink to="/" class="hover">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book1" class="hover">Book1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book2" class="hover">Book2</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="hover">About</NuxtLink>
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
        class="md:hidden fixed top-[55px] left-0 w-full h-full bg-black/85 text-white text-lg font-semibold z-40">
        <ul class="flex flex-col items-center gap-6 py-6">
            <li>
                <NuxtLink to="/" class="hover">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book1" class="hover opacity-60">Book1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/book2" class="hover opacity-60">Book2</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about" class="hover opacity-60">About</NuxtLink>
            </li>
        </ul>
        <div class="flex justify-center items-center mt-7">
            <a href="https://bossbsynth.com/" class="hover italic">bossbsynth.com</a>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

import { LiMenuCircle } from '@kalimahapps/vue-icons';
</script>

<style scoped>

</style>