<template>
    <div class="relative h-screen w-full bg-cover bg-center text-white"
        style="background-image: url('/images/about/about.jpg')">

        <Nav />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 fade-in">
            <h1 class="text-4xl md:text-5xl font-bold font-serif mb-8">About SoulScroll</h1>
            <p class="w-[26rem] md:w-xl text-base md:text-lg opacity-90 leading-relaxed mb-6">
                <span class="font-bold text-lg">SoulScroll </span> is a fantasy story experience told through immersive visuals, music, and text.
                Each chapter reveals part of a mythical world filled with ancient guardians, forgotten titans, and epic
                battles.
                Explore it like a living book, chapter by chapter.
            </p>

            <p class="font-bold text-lg">Consider Subscription?</p>
            <a href="https://bossbsynth.com" target="_blank"
                class="text-white text-lg my-3underline underline-offset-4 hover:text-blue-300 mb-10">
                <div class="flex hover">
                    <span class="text-blue-400 ">Contact: bossbsynth.com</span>
                    <span class="float-x mt-1.5 ml-1 text-xl text-blue-400">
                        <FlFilledCallOutbound />
                    </span>
                </div>
            </a>
            <NuxtLink to="/"
                class="bg-white/20 px-5 py-2 rounded text-white text-lg hover:bg-white/40  fade-in-up2">
                ⟵ Back to Menu
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { Nav } from "#components";
import { FlFilledCallOutbound } from '@kalimahapps/vue-icons';
</script>