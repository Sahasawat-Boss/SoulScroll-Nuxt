<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }">
            <img :src="item.image" />
            <div class="content backdrop-blur-xs bg-black/15 p-3.5 rounded-xl">
                <p class="text-xs font-semibold text-white/50">Chapter:{{ item.id }}</p>
                <h2 class="text-4xl py-2.5">{{ item.title }}</h2>
                <p class="text-lg indent-[1.1rem] tracking-widest">{{ item.description }}</p>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps(['items', 'itemActive'])
</script>

<style scoped>
/* Base styles (desktop-first approach) */
.slider {
    height: 100vh;
    margin-top: -50px;
    position: relative;
}

.slider .list .item {
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s;
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
    background-image: linear-gradient(to top, #000 8%, transparent);
}

.slider .list .item .content {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 550px;
    max-width: 70%;
    z-index: 1;
    color: #fff;
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
    animation: showContent 0.5s 0.7s ease-in-out 1 forwards;
}

.slider .list .item.active h2 {
    animation-delay: 0.6s;
}

.slider .list .item.active p:nth-child(3) {
    animation-duration: 1.1s;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
    .slider .list .item .content {
        left: 5%;
        top: 15%;
        width: 90%;
    }

    .slider .list .item .content h2 {
        font-size: 28px;
    }

    .slider .list .item .content p:nth-child(1) {
        font-size: 12px;
        letter-spacing: 4px;
    }

    .slider .list .item .content p:nth-child(3) {
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    .slider {
        height: 100svh;
        /* safe viewport height */
    }

    .slider .list .item .content h2 {
        font-size: 24px;
    }

    .slider .list .item .content p:nth-child(3) {
        font-size: 13px;
    }
}
</style>