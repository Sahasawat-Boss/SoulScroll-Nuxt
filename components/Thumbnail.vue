<template>
    <div class="thumbnail-container">
        <!-- Arrows Above -->
        <div class="flex gap-3 justify-center w-full md:scale-110 mb-4 fade-in-up">

            <button @click="$emit('prev')" title="Previous"
                class="w-7.5 h-7.5  rounded bg-white/30 text-white text-xl font-mono hover:bg-white hover:text-black hover">
                ‹
            </button>
            <h2 class="mt-1.5 text-sm"> Select Chapter </h2>
            <button @click="$emit('next')" title="Next"
                class="w-7.5 h-7.5 rounded bg-white/30 text-white text-xl font-mono hover:bg-white hover:text-black hover">
                ›
            </button>
            
        </div>



        <!-- Thumbnail List -->
        <div class="thumbnail fade-in-up w-[100%]">
            <div v-for="(item, index) in items" :key="index" class="item hover:cursor-pointer"
                :class="{ active: index === itemActive }" @click="$emit('slideTo', index)">
                <img :src="item.image" />
                <div
                    class="absolute bottom-2 left-2 right-2 text-sm md:text-md text-white text-center pointer-events-none">
                    Chapter: {{ item.id }}
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['items', 'itemActive'])
defineEmits(['slideTo', 'prev', 'next'])
</script>

<style scoped>
.thumbnail-container {
    position: absolute;
    bottom: 30px;
    width: 100%;
    z-index: 11;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 0 1rem;
    box-sizing: border-box;
}

/* Thumbnail container */
.thumbnail {
    display: flex;
    gap: 10px;
    padding: 0 10px;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: center;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

.thumbnail::-webkit-scrollbar {
    width: 0;
}

/* Each item */
.thumbnail .item {
    width: 130px;
    height: 180px;
    filter: brightness(0.5);
    transition: 0.5s;
    flex-shrink: 0;
    position: relative;
}

.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.thumbnail .item.active {
    filter: brightness(1.5);
}

/* Mobile Responsive Adjustments */
@media screen and (max-width: 768px) {
    .thumbnail {
        justify-content: flex-start;
        height: 220px;
    }

    .thumbnail .item {
        width: 110px;
        height: 160px;
    }
}

@media screen and (max-width: 480px) {
    .thumbnail-container {
        bottom: 15px;
        gap: 8px;
    }

    .thumbnail {
        height: 180px;
        padding: 0 6px;
    }

    .thumbnail .item {
        width: 100px;
        height: 150px;
    }
}
</style>