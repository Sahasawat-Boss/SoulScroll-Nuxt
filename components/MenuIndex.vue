<template>
    <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6 fade-in">
        <h1 class="text-5xl md:text-6xl font-bold tracking-wide font-serif fade-in-up">SoulScroll</h1>
        <p class="text-base md:text-lg tracking-wide opacity-85 fade-in-up">
            A journey through shadows, myth, and legend
        </p>

        <div class="flex flex-col gap-4 mt-8">
            <div class="relative flex fade-in-right1 float-y hover2">
                <NuxtLink to="/book1" class="menu-btn2">Book 1</NuxtLink>
                <span class="absolute -right-3 -bottom-1 float-x text-2xl text-blue-400">
                    <LuSword />
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2">
                <NuxtLink to="/book2" class="menu-btn">Book 2</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-xl text-yellow-400/30">
                    <BxSolidLock/>
                </span>
            </div>
            <div class="relative flex fade-in-right2 hover2">
                <NuxtLink to="/about" class="menu-btn">About</NuxtLink>
                <span class="absolute -right-1 -bottom-1 text-xl text-gray-400/80">
                    <FlQuestionCircle/>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { LuSword, BxSolidLock, FlQuestionCircle } from '@kalimahapps/vue-icons';

</script>