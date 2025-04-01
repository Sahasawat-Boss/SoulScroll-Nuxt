<template>
    <div class="relative h-screen w-full bg-cover bg-center" style="background-image: url('/images/menu/knight0.png')">
        <Nav />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/10 backdrop-blur-xs"></div>

        <!-- Centered Menu -->
        <MenuIndex />
    </div>
</template>

<script setup>
import { MenuIndex } from "#components";
</script>