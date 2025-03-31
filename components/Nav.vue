<template>
    <header
        class="z-50 px-4.5 md:px-6 py-3 fixed top-0 left-0 w-full backdrop-blur-xs bg-black/20 border-b border-white/15 shadow-md flex items-center justify-between">

        <!-- Logo -->
        <div class="text-2xl md:text-3xl font-bold text-white hover italic">
            SoulScroll
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex justify-center gap-6 font-semibold text-lg md:text-xl text-white">
            <li class="hover">Home</li>
            <li class="hover">Blog</li>
            <li class="hover">Info</li>
        </ul>

        <!-- External Link -->
        <a href="https://bossbsynth.com/" class="hidden md:block text-white hover italic">
            bossbsynth.com
        </a>

        <!-- Mobile Menu Icon -->
        <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isOpen"
        class="md:hidden fixed top-[60px] left-0 w-full bg-black/90 text-white text-lg font-semibold z-40">
        <ul class="flex flex-col items-center gap-4 py-4">
            <li class="hover">Home</li>
            <li class="hover">Blog</li>
            <li class="hover">Info</li>
            <li>
                <a href="https://bossbsynth.com/" class="hover italic">bossbsynth.com</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>