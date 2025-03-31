<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }">
            <img :src="item.image" />
            <div class="content">
                <p>Fantasy Landscape</p>
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['items', 'itemActive'])
</script>

<style scoped>
/* css slider */
.slider {
    height: 100vh;
    margin-top: -50px;
    position: relative;
}

.slider .list .item {
    position: absolute;
    inset: 0 0 0 0;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}

.slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider .list .item::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to top, #000 15%, transparent);
}

.slider .list .item .content {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 500px;
    max-width: 80%;
    z-index: 1;
}

.slider .list .item .content p:nth-child(1) {
    text-transform: uppercase;
    letter-spacing: 10px;
}

.slider .list .item .content h2 {
    font-size: 50px;
    margin: 0;
}

.slider .list .item.active {
    opacity: 1;
    z-index: 10;
}

@keyframes showContent {
    to {
        transform: translateY(0);
        filter: blur(0);
        opacity: 1;
    }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3) {
    transform: translateY(30px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s .7s ease-in-out 1 forwards;
}

.slider .list .item.active h2 {
    animation-delay: 1s;
}

.slider .list .item.active p:nth-child(3) {
    animation-duration: 1.3s;
}
</style>