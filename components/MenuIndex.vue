<template>
    <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6 fade-in">
        <h1 class="text-5xl md:text-6xl font-bold tracking-wide font-serif fade-in-up">SoulScroll</h1>
        <p class="text-base md:text-lg italic opacity-85 fade-in-up">
            A journey through shadows, myth, and legend
        </p>

        <div class="flex flex-col gap-4 mt-8">
            <NuxtLink to="/book1" class="menu-btn  fade-in-right1">Book 1</NuxtLink>
            <NuxtLink to="/book2" class="menu-btn  fade-in-right2">Book 2</NuxtLink>
            <NuxtLink to="/about" class="menu-btn  fade-in-right3">About</NuxtLink>
        </div>
    </div>
</template>