<template>
    <div>
        <Nav />

        <div class="slider">
            <Slider :items="items" :itemActive="itemActive" />

            <div class="arrows">
                <button @click="prevSlide">
                    Back </button>
                        <button @click="nextSlide"> Next</button>
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
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        image: '/images/SliderImage/img2.jpg',
        title: 'Slider 02',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        image: '/images/SliderImage/img3.jpg',
        title: 'Slider 03',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        image: '/images/SliderImage/img4.jpg',
        title: 'Slider 04',
        description: 'Lorem ipsum dolor sit amet...'
    },
    {
        image: '/images/SliderImage/img5.jpg',
        title: 'Slider 05',
        description: 'Lorem ipsum dolor sit amet...'
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