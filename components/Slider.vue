<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }">
            <img :src="item.image" />
            <div class="content backdrop-blur-xs bg-black/15 p-3.5 rounded-xl">
                <p class="text-xs font-semibold text-white/50">
                    Chapter: {{ item.id }}
                </p>
                <h2 class="text-4xl py-2.5">{{ item.title }}</h2>
                <p class="text-lg indent-[1.1rem] tracking-widest">
                    {{ item.description }}
                </p>

                <!-- Only animate the active button -->
                <button v-if="index === itemActive" ref="readButton"
                    class="read-btn-animate mt-4 px-5 py-2.5 text-white text-sm md:text-base font-semibold bg-white/10 hover:bg-white/25 backdrop-blur-sm rounded-lg transition duration-300 hover"
                    @click="openModal(item)">
                    📖 Read Chapter
                </button>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div class="bg-white text-black rounded-lg w-[90vw] md:w-lg h-[400px] overflow-y-auto py-8 px-8 relative">
                <h3 class="text-3xl font-bold mb-4">
                    Chapter {{ selectedChapter.id }}: {{ selectedChapter.title }}
                </h3>

                <p class="mb-6 text-base md:text-lg indent-4 tracking-wider whitespace-pre-line">
                    {{ selectedChapter.fullText }}
                </p>

                <button @click="closeModal"
                    class="absolute -top-1 right-3 text-black hover:text-red-500 text-5xl font-semibold">
                    &times;
                </button>

                <div class="flex justify-center">
                    <button @click="closeModal"
                        class="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition hover">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
import { ref, watch, nextTick } from 'vue'
import { chapterDetails } from '~/data/chapterDetails'


const props = defineProps(['items', 'itemActive'])

const showModal = ref(false)
const selectedChapter = ref({})
const readButton = ref(null)

function openModal(item) {
    selectedChapter.value = {
        ...item,
        fullText: chapterDetails[item.id]?.fullText || 'No additional content available.'
    }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
}

// Re-trigger animation when itemActive changes
watch(() => props.itemActive, async () => {
    await nextTick()
    const btn = readButton.value
    if (btn) {
        btn.classList.remove('read-btn-animate')
        void btn.offsetWidth // Force reflow
        btn.classList.add('read-btn-animate')
    }
})
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

/*==== Animation for the Read button ====================*/
@keyframes fadeInUp {
    from {
        transform: translateY(35px);
        opacity: 0;
        filter: blur(15px);
    }

    to {
        transform: translateY(0);
        opacity: 1;
        filter: blur(0);
    }
}

.read-btn-animate {
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
    animation-fill-mode: both;
}
</style>
