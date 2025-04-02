<template>
    <div class="relative w-full h-screen py-20 px-6 md:px-12 xl:px-20 bg-cover bg-center"
        style="background-image: url('/images/inventory/bg.jpg')">

        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black/58 backdrop-blur-[10px] z-0"></div>

        <!-- Foreground content -->
        <div class="relative z-10">
            <Nav />

            <BackButton />

            <main class="flex flex-col justify-center items-center">
                <h1 class="text-2xl md:text-3xl font-semibold mb-8 -mt-3 text-center text-white fade-in-up"
                    style="text-shadow: 2px 3px 5px rgba(0,0,0,0.8)">
                    Inventory
                </h1>
                <div class="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto px-5 fade-in-up1">

                    <!-- Sword -->
                    <div @click="openModal('sword')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <LuSword class="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 float-y" />
                        <h2 class="text-base">Sword</h2>
                    </div>

                    <!-- Card 2: Shield -->
                    <div @click="openModal('shield')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <BxShieldQuarter class="w-8 h-8 md:w-10 md:h-10  mx-auto mb-2 float-y" />
                        <h2 class="text-base">Shield</h2>
                    </div>

                    <!-- Card 3: Potion -->
                    <div @click="openModal('potion')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <UnFlaskPotion class="w-8 h-8 md:w-10 md:h-10  mx-auto mb-2 float-y" />
                        <h2 class="text-base">Potion</h2>
                    </div>

                    <!-- Card 4: Map -->
                    <div @click="openModal('map')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <BsMapFill class="w-8 h-8 md:w-10 md:h-10  mx-auto mb-2 float-y" />
                        <h2 class="text-base">Map</h2>
                    </div>
                    <!-- Card 5: Food -->
                    <div @click="openModal('food')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <IoFastFood class="w-8 h-8 md:w-10 md:h-10  mx-auto mb-2 float-y" />
                        <h2 class="text-base">Food</h2>
                    </div>
                    <!-- Card 6: Gold Bag -->
                    <div @click="openModal('gold')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <HeFilledMoneyBag class="w-8 h-8 md:w-10 md:h-10  mx-auto mb-2 float-y" />
                        <h2 class="text-base">Gold</h2>
                    </div>

                    <!-- Card: Empty -->
                    <div @click="openModal('empty')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <span class="text-sm opacity-50">Empty Slot</span>
                    </div>

                    <!-- Card: Empty -->
                    <div @click="openModal('empty')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3.5 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <span class="text-sm opacity-50">Empty Slot</span>
                    </div>

                    <!-- Card: Empty -->
                    <div @click="openModal('empty')"
                        class="cursor-pointer bg-white/10 rounded-2xl p-3 md:p-5 text-center text-white hover:bg-white/20 transition hover">
                        <span class="text-sm opacity-50">Empty Slot</span>
                    </div>
                </div>
                <NuxtLink to="/"
                    class="bg-white/20 mt-10 px-4 py-1 rounded-lg text-white text-sm hover:bg-white/40  fade-in-up2">
                    ⟵ Back to Menu
                </NuxtLink>
            </main>

            <div class="flex justify-center items-center">
                <a href="https://bossbsynth.com/"
                    class="fixed bottom-5 text-xs md:text-sm text-white/65 hover italic mt-1 fade-in"
                    style="text-shadow: 2px 3px 7px rgba(0,0,0,0.6);">
                    bossbsynth.com
                </a>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedItem"
            class="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            @click.self="closeModal">
            <div class="bg-white/10 text-white border border-white/25 p-6 rounded-xl max-w-md shadow-lg text-center">
                <h2 class="text-xl font-semibold mb-2 float-y">{{ selectedItem.title }}</h2>
                <p class="text-base opacity-80">{{ selectedItem.description }}</p>
                <button class="mt-4 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded transition text-sm hover"
                    @click="closeModal">
                    Close
                </button>
            </div>
        </div>


    </div>
</template>

<script setup>
import { LuSword, BxShieldQuarter, UnFlaskPotion, BsMapFill, IoFastFood, HeFilledMoneyBag } from '@kalimahapps/vue-icons'
const selectedItem = ref(null)

const openModal = (key) => {
    selectedItem.value = inventoryDetails[key]
}

const closeModal = () => {
    selectedItem.value = null
}

const inventoryDetails = {
    sword: {
        title: "Sword",
        description:
            "A finely forged blade, balanced for swift strikes and defensive parries. Whether you're facing beasts or bandits, this weapon is the trusted companion of seasoned warriors and brave wanderers alike."
    },
    shield: {
        title: "Shield",
        description:
            "A sturdy shield crafted from reinforced iron and oak. Though heavy, it provides unmatched protection in the heat of battle, allowing its bearer to withstand devastating blows and guard allies with honor."
    },
    potion: {
        title: "Potion",
        description:
            "A glass vial glowing with a faint red hue. This healing potion quickly restores vitality and closes minor wounds. A must-have for adventurers venturing into dangerous lands or deep dungeons."
    },
    map: {
        title: "Map",
        description:
            "An aged parchment map marked with trails, hidden ruins, and ancient waypoints. It guides the explorer through unknown territories, offering both orientation and hints of legendary secrets long forgotten."
    },
    food: {
        title: "Food",
        description:
            "A hearty ration wrapped in cloth, filled with dried meat, bread, and fruit. Not only does it replenish your stamina, but it reminds you of home — a moment of comfort in a harsh world."
    },
    gold: {
        title: "Gold",
        description:
            "A leather pouch filled with glimmering coins. Gold is the lifeblood of every kingdom — used for trade, bribery, or unlocking opportunities that can't be gained through strength alone."
    },
    empty: {
        title: "Empty Slot",
        description:
            "This slot is currently empty, but not for long. Seek out rare treasures, powerful gear, or enchanted relics to fill this space. The journey ahead holds countless rewards."
    }
}


</script>