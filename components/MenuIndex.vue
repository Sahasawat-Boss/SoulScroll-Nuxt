<template>
    <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-6 fade-in">
        <h1 class="text-4xl md:text-6xl font-bold tracking-wide font-serif">SoulScroll</h1>
        <p class="text-sm md:text-lg italic opacity-70">
            A journey through shadows, myth, and legend
        </p>

        <div class="flex flex-col gap-4 mt-8">
            <NuxtLink to="/book1" class="menu-btn">Book 1</NuxtLink>
            <NuxtLink to="/book2" class="menu-btn">Book 2</NuxtLink>
            <NuxtLink to="/about" class="menu-btn">About</NuxtLink>
        </div>
    </div>
</template>