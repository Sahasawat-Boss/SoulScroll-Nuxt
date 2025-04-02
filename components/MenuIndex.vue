<template>
    <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6 fade-in">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide fade-in-up drop-shadow-xl"
            style="text-shadow: 2px 3px 6px rgba(0,0,0,0.8);">
            SoulScroll
        </h1>

        <p class="w-sm px-12 md:w-full md:text-lg opacity-85 fade-in-up2 tracking-wide"
        style="text-shadow: 2px 3px 6px rgba(0,0,0,0.4);">
            A journey through shadows, myth, and legend
        </p>

        <div class="flex flex-col items-center justify-center gap-5.5 mt-8">
            <div class="relative flex fade-in-right1 float-y hover2 shadow-lg">
                <NuxtLink to="/book/book1" class="menu-btn2">Book 1</NuxtLink>
                <span class="absolute -right-4.5 -bottom-1 float-x text-2xl text-blue-400">
                    <LuSword />
                </span>
            </div>
            <div class="relative flex fade-in-right1 float-y hover2 shadow-lg">
                <NuxtLink to="/book/book1map" class="menu-btn2">Book 1 Map</NuxtLink>
                <span class="absolute -right-2 -bottom-1 text-2xl text-white/50">
                    <LuScroll/>
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2 shadow-lg">
                <NuxtLink to="/book/book2" class="menu-btn">Book 2</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-lg text-yellow-400/30">
                    <BxSolidLock />
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2 shadow-xl">
                <NuxtLink to="/about" class="menu-btn">About</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-xl text-gray-300/70">
                    <FlQuestionCircle />
                </span>
            </div>
        </div>

        <!-- bossbsynth.com - External Link -->
        <a href="https://bossbsynth.com/"
            class="fixed bottom-5 text-xs md:text-sm text-white/65 hover italic mt-1 fade-in"
            style="text-shadow: 2px 3px 7px rgba(0,0,0,0.6);">
            bossbsynth.com
        </a>
    </div>
</template>

<script setup>
import { LuSword, BxSolidLock, FlQuestionCircle, LuScroll} from '@kalimahapps/vue-icons';

</script>