<template>
    <div class="relative h-screen w-full bg-cover bg-center text-white"
        style="background-image: url('/images/about/about.jpg')">

        <Nav />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold font-serif">About SoulScroll</h1>
            <p class="max-w-2xl text-lg md:text-xl opacity-90 leading-relaxed">
                SoulScroll is a fantasy story experience told through immersive visuals, music, and text.
                Each chapter reveals part of a mythical world filled with ancient guardians, forgotten titans, and epic
                battles.
                Explore it like a living book, chapter by chapter.
            </p>
            <NuxtLink to="/" class="bg-white/20 px-5 py-2 rounded text-white text-lg hover:bg-white/40  fade-in-up2">
                ⟵ Back to Menu
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { Nav } from "#components";

</script>