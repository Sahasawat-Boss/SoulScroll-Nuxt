<template>
    <div class="thumbnail ">
        <div v-for="(item, index) in items" :key="index" class="item hover:cursor-pointer" :class="{ active: index === itemActive }"
            @click="$emit('slideTo', index)">
            <img :src="item.image" />
            <div class="content">Name Slider</div>
        </div>
    </div>
</template>

<script setup>
defineProps(['items', 'itemActive'])
defineEmits(['slideTo'])
</script>

<style scoped>
.thumbnail {
    position: absolute;
    bottom: 50px;
    z-index: 11;
    display: flex;
    gap: 10px;
    width: 100%;
    height: 250px;
    padding: 0 50px;
    box-sizing: border-box;
    overflow: auto;
    justify-content: center;
}

.thumbnail::-webkit-scrollbar {
    width: 0;
}

.thumbnail .item {
    width: 150px;
    height: 180px;
    filter: brightness(.5);
    transition: .5s;
    flex-shrink: 0;
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
}

@media screen and (max-width: 678px) {
    .thumbnail {
        justify-content: start;
    }

    .slider .list .item .content h2 {
        font-size: 60px;
    }
}
</style>