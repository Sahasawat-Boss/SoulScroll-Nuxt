<template>
    <Nav/>
    <div class="relative h-screen w-full bg-cover bg-center text-white"
        style="background-image: url('/images/book2/img9.jpg')">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

        <!-- Centered content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 fade-in">
            <h1 class="text-3xl md:text-5xl font-bold font-serif">Book 2 Locked</h1>
            <p class="mt-10 text-base md:text-xl italic max-w-lg">
                To unlock Book 2, subscribe for only
            </p>
            <p class="font-bold text-xl mt-4">$1/month</p>

            <NuxtLink to="/"
                class="mt-8 px-6 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition backdrop-blur-sm">
                ← Back to Menu
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { Nav } from "#components";
</script>