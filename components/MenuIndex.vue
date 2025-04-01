<template>
    <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6 fade-in">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide fade-in-up drop-shadow-xl"
            style="text-shadow: 2px 3px 6px rgba(0,0,0,0.8);">
            SoulScroll
        </h1>

        <p class="w-sm px-12 md:w-full md:text-lg opacity-85 fade-in-up2 tracking-wide">
            A journey through shadows, myth, and legend
        </p>

        <div class="flex flex-col gap-5.5 mt-8">
            <div class="relative flex fade-in-right1 float-y hover2">
                <NuxtLink to="/book1" class="menu-btn2">Book 1</NuxtLink>
                <span class="absolute -right-4 -bottom-1 float-x text-2xl text-blue-400">
                    <LuSword />
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2">
                <NuxtLink to="/book2" class="menu-btn">Book 2</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-xl text-yellow-400/30">
                    <BxSolidLock />
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2">
                <NuxtLink to="/about" class="menu-btn">About</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-xl text-gray-300/60">
                    <FlQuestionCircle />
                </span>
            </div>
        </div>

        <!-- bossbsynth.com - External Link -->
        <a href="https://bossbsynth.com/"
            class="fixed bottom-8 text-xs md:text-sm text-white/65 hover italic mt-1 fade-in"
            style="text-shadow: 2px 3px 7px rgba(0,0,0,0.6);">
            bossbsynth.com
        </a>
    </div>
</template>

<script setup>
import { LuSword, BxSolidLock, FlQuestionCircle } from '@kalimahapps/vue-icons';

</script>