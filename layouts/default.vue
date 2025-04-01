<template>
    <div>
        <!-- Audio Player -->
        <audio ref="bgm" :src="audioSrc" loop preload="auto"></audio>

        <!-- Play/Pause Button -->
        <div>
            <button @click="toggleAudio"
                class="fixed top-3.5 left-46 md:left-58 z-[999] bg-white/20 text-white text-sm px-1.5 py-1 rounded hover backdrop-blur-sm  pulse-opacity">
                <component :is="isPlaying ? IconPlay : IconPause" class="w-5 h-5 md:w-6 md:h-6 fade-in2" />
            </button>
        </div>

        <!-- Your page content -->
        <NuxtPage />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const audioSrc = '/audio/theme.mp3'
const bgm = ref(null)
const isPlaying = ref(false)

const IconPlay = FlFilledMusicNote2
const IconPause = FlFilledMusicNoteOff2

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
            bgm.value.volume = 0 // start muted
            bgm.value.play().then(() => {
                isPlaying.value = true

                // slowly fade in audio
                let vol = 0
                const fadeIn = setInterval(() => {
                    vol += 0.5
                    if (vol >= 1) {
                        vol = 1
                        clearInterval(fadeIn)
                    }
                    bgm.value.volume = vol
                }, 200)
            }).catch(() => {
                console.warn('Autoplay blocked')
            })
        }

        window.removeEventListener('click', tryPlay)
        window.removeEventListener('keydown', tryPlay)
        window.removeEventListener('touchstart', tryPlay)
    }

    window.addEventListener('click', tryPlay)
    window.addEventListener('keydown', tryPlay)
    window.addEventListener('touchstart', tryPlay)
})


// Import Icon
import { FlFilledMusicNoteOff2, FlFilledMusicNote2 } from '@kalimahapps/vue-icons';
</script>