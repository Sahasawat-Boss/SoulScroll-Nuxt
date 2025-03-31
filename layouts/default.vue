<template>
    <div>
        <!-- Audio Player -->
        <audio ref="bgm" :src="audioSrc" loop preload="auto"></audio>

        <!-- Play/Pause Button -->
        <button @click="toggleAudio"
            class="fixed top-11 left-11 md:left-18 z-[999] bg-white/20 text-white text-sm px-2 py-1 rounded hover:bg-white/30 backdrop-blur-sm">
            {{ isPlaying ? 'Pause Music' : 'Play Music' }}
        </button>

        <!-- Your page content -->
        <NuxtPage />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const audioSrc = '/audio/theme.mp3'
const bgm = ref(null)
const isPlaying = ref(false)

const toggleAudio = () => {
    const audio = bgm.value
    if (!audio) return

    if (isPlaying.value) {
        audio.pause()
        isPlaying.value = false // ✅ make sure to update state
    } else {
        audio
            .play()
            .then(() => {
                isPlaying.value = true
            })
            .catch((err) => {
                console.warn('Playback failed:', err)
            })
    }
}

// Optional: auto-trigger audio after user clicks anywhere
onMounted(() => {
    const tryPlay = () => {
        if (!isPlaying.value && bgm.value) {
            bgm.value.play().then(() => {
                isPlaying.value = true
            }).catch(() => {
                console.warn('Autoplay blocked')
            })
        }
        window.removeEventListener('click', tryPlay)
    }

    window.addEventListener('click', tryPlay)
})

</script>