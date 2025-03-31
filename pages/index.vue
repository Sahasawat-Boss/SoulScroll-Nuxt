<script setup>
import { SlideItems } from '~/data/Items'
import { Nav, Thumbnail, Slider } from '#components'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = SlideItems
const itemActive = ref(0)
let interval

const showSlider = () => {
    scrollThumbnailIntoView()
    clearInterval(interval)
    interval = setInterval(nextSlide, 12000)
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

<!--?======== Template ==========================================================-->
<template>
    <div>
        <Nav />

        <div class="slider">
            <Slider :items="items" :itemActive="itemActive" />

            <Thumbnail :items="items" :itemActive="itemActive" @slideTo="goToSlide" @prev="prevSlide"
                @next="nextSlide" />
        </div>
    </div>
</template>
<!--?======== Template ==========================================================-->

<style scoped></style>