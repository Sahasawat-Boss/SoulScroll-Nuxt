<template>
    <div>
        <Nav />

        <div class="slider">
            <Slider :items="items" :itemActive="itemActive" />

            <div class="arrows">
                <button @click="prevSlide">
                    B </button>
                <button @click="nextSlide"> N</button>
            </div>

            <Thumbnail :items="items" :itemActive="itemActive" @slideTo="goToSlide" />
        </div>
    </div>
</template>

<script setup>
import { Nav, Thumbnail, Slider } from '#components'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = [
    {
        image: '/images/SliderImage/img1.png',
        title: 'Slider 01',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img2.jpg',
        title: 'Slider 02',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img3.jpg',
        title: 'Slider 03',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img4.jpg',
        title: 'Slider 04',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img5.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img6.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img7.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img8.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
    },
    {
        image: '/images/SliderImage/img9.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet ipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum dipsum dipsum ipsum d '
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
</style>