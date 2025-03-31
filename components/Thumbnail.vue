<template>
    <div class="thumbnail-container">
        <!-- Arrows Above -->
        <div class="arrows fade-in-up">
            <button @click="$emit('prev')" title="Previous" class="hover">‹</button>
            <button @click="$emit('next')" title="Next" class="hover">›</button>
        </div>

        <!-- Thumbnail List -->
        <div class="thumbnail fade-in">
            <div v-for="(item, index) in items" :key="index" class="item hover:cursor-pointer"
                :class="{ active: index === itemActive }" @click="$emit('slideTo', index)">
                <img :src="item.image" />
                <div class="content">SoulScroll</div>
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
    bottom: 20px;
    width: 100%;
    z-index: 11;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0 1rem;
    box-sizing: border-box;
}

/* Arrows */
.arrows {
    display: flex;
    gap: 12px;
    justify-content: center;
    width: 100%;
}

.arrows button {
    background-color: #eee5;
    border: none;
    font-family: monospace;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: x-large;
    color: #eee;
    transition: 0.5s;
}

.arrows button:hover {
    background-color: #eee;
    color: black;
}

/* Thumbnail container */
.thumbnail {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 220px;
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

.thumbnail .item .content {
    position: absolute;
    inset: auto 10px 10px 10px;
    font-size: 0.75rem;
    color: white;
    text-align: center;
    pointer-events: none;
}

/* Mobile Responsive Adjustments */
@media screen and (max-width: 768px) {
    .thumbnail {
        justify-content: flex-start;
        height: 200px;
    }

    .thumbnail .item {
        width: 110px;
        height: 160px;
    }

    .arrows {
        gap: 8px;
    }

    .arrows button {
        width: 35px;
        height: 35px;
        font-size: large;
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

    .thumbnail .item .content {
        font-size: 0.7rem;
    }
}
</style>