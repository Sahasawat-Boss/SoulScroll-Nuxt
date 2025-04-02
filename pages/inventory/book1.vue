<template>
    <div class="relative w-full h-screen py-20 px-6 md:px-12 xl:px-20 bg-cover bg-center"
        style="background-image: url('/images/inventory/bag.jpg')">

        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-[10px] z-0"></div>

        <!-- Foreground content -->
        <div class="relative z-10">
            <Nav />

            <BackButton />

            <main class="flex flex-col justify-center items-center">
                <h1 class="text-2xl md:text-3xl font-semibold mb-8 -mt-3 text-center text-white fade-in-up"
                    style="text-shadow: 2px 3px 5px rgba(0,0,0,0.8)">
                    Inventory
                </h1>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-10 fade-in-up1">
                    <!-- Card 1: Sword -->
                    <div class="bg-white/10 rounded-2xl p-4 text-center text-white hover:bg-white/20 transition hover">
                        <LuSword class="w-10 h-10 mx-auto mb-2" />
                        <h2 class="text-base">Sword</h2>
                    </div>

                    <!-- Card 2: Shield -->
                    <div class="bg-white/10 rounded-2xl p-4 text-center text-white hover:bg-white/20 transition hover">
                        <BxShieldQuarter class="w-10 h-10 mx-auto mb-2" />
                        <h2 class="text-base">Shield</h2>
                    </div>

                    <!-- Card 3: Potion -->
                    <div class="bg-white/10 rounded-2xl p-4 text-center text-white hover:bg-white/20 transition hover">
                        <UnFlaskPotion class="w-10 h-10 mx-auto mb-2" />
                        <h2 class="text-base">Potion</h2>
                    </div>

                    <!-- Card 4: Map -->
                    <div class="bg-white/10 rounded-2xl p-4 text-center text-white hover:bg-white/20 transition hover">
                        <BsMapFill class="w-10 h-10 mx-auto mb-2" />
                        <h2 class="text-base">Map</h2>
                    </div>

                    <!-- Card 5: Empty -->
                    <div class="bg-white/5 rounded-2xl p-4 text-center text-white border border-dashed border-white/30">
                        <span class="text-sm opacity-50">Empty Slot</span>
                    </div>

                    <!-- Card 6: Empty -->
                    <div class="bg-white/5 rounded-2xl p-4 text-center text-white border border-dashed border-white/30">
                        <span class="text-sm opacity-50">Empty Slot</span>
                    </div>
                </div>

                <NuxtLink to="/"
                    class="bg-white/20 px-4 py-1 mt-10 rounded-lg text-white text-base hover:bg-white/40  fade-in-up2">
                    ⟵ Back to Menu
                </NuxtLink>
            </main>

            <div class="flex justify-center items-center">
                <a href="https://bossbsynth.com/"
                    class="fixed bottom-5 text-xsmd:text-sm text-white/65 hover italic mt-1 fade-in"
                    style="text-shadow: 2px 3px 7px rgba(0,0,0,0.6);">
                    bossbsynth.com
                </a>
            </div>
        </div>

    </div>
</template>

<script setup>
import BackButton from '~/components/BackButton.vue';
import { LuSword, BxShieldQuarter, UnFlaskPotion, BsMapFill } from '@kalimahapps/vue-icons';
</script>