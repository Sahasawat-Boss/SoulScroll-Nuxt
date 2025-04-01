<template>
    <div>
        <!-- header -->
        <header>
            <div class="logo">VSlide</div>
            <ul class="menu">
                <li>Home</li>
                <li>Blog</li>
                <li>Info</li>
            </ul>
            <div class="search">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
        </header>

        <!-- slider -->
        <div class="slider">
            <div class="list">
                <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }">
                    <img :src="item.image" />
                    <div class="content">
                        <p>design</p>
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>

            <!-- arrows -->
            <div class="arrows">
                <button @click="prevSlide">
                </button>
                <button @click="nextSlide">></button>
            </div>

            <!-- thumbnails -->
            <div class="thumbnail">
                <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }"
                    @click="goToSlide(index)">
                    <img :src="item.image" />
                    <div class="content">Name Slider</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = [
    {
        image: '/images/SliderImage/img1.png',
        title: 'Slider 01',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
        image: '/images/SliderImage/img2.jpg',
        title: 'Slider 02',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
        image: '/images/SliderImage/img3.jpg',
        title: 'Slider 03',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
        image: '/images/SliderImage/img4.jpg',
        title: 'Slider 04',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
    },
    {
        image: '/images/SliderImage/img5.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
    },
]

const itemActive = ref(0)
let interval

const showSlider = () => {
    scrollThumbnailIntoView()
    clearInterval(interval)
    interval = setInterval(nextSlide, 5000)
}

const nextSlide = () => {
    itemActive.value = (itemActive.value + 1) % items.length
    showSlider()
}

const prevSlide = () => {
    itemActive.value = (itemActive.value - 1 + items.length) % items.length
    showSlider()
}

const goToSlide = (index) => {
    itemActive.value = index
    showSlider()
}

const scrollThumbnailIntoView = () => {
    const activeThumbnail = document.querySelector('.thumbnail .item.active')
    if (activeThumbnail) {
        const rect = activeThumbnail.getBoundingClientRect()
        if (rect.left < 0 || rect.right > window.innerWidth) {
            activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' })
        }
    }
}

onMounted(() => {
    interval = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
    clearInterval(interval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    font-family: Poppins;
    margin: 0;
    background-color: #010101;
    color: #eee;
}

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
    background-image: linear-gradient(to top, #000 40%, transparent);
}

.slider .list .item .content {
    position: absolute;
    left: 10%;
    top: 20%;
    width: 500px;
    max-width: 80%;
    z-index: 1;
}

.slider .list .item .content p:nth-child(1) {
    text-transform: uppercase;
    letter-spacing: 10px;
}

.slider .list .item .content h2 {
    font-size: 100px;
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

.arrows {
    position: absolute;
    top: 30%;
    right: 50px;
    z-index: 100;
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
    transition: .5s;
}

.arrows button:hover {
    background-color: #eee;
    color: black;
}

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
    height: 220px;
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

    .arrows {
        top: 10%;
    }
}
</style>