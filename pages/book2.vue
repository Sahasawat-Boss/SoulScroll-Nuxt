<template>
    <Nav />
    <div class="relative h-screen w-full bg-cover bg-center text-white"
        style="background-image: url('/images/book2/img9.jpg')">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

        <!-- Centered content -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 fade-in">
            <h1 class="text-3xl md:text-4xl font-bold font-serif">Book 2 Locked</h1>
            <p class="mt-1 text-base md:text-xl italic max-w-lg">
                To unlock Book 2, subscriber only
            </p>
            <p class="font-bold text-xl mt-14">Consider Subscription?</p>

            <!-- Contact Link -->
            <a href="https://bossbsynth.com" target="_blank"
                class="text-white text-lg my-3underline underline-offset-4 hover:text-blue-300 mb-14">
                <div class="flex hover">
                    <span class="text-blue-400 ">Contact: bossbsynth.com</span>
                    <span class="float-x mt-1.5 ml-1 text-xl text-blue-400">
                        <FlFilledCallOutbound/>
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