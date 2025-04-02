<template>
    <div>
        <!-- Audio Player -->
        <audio ref="bgm" :src="audioSrc" loop preload="auto"></audio>

        <!-- Click Sound -->
        <audio ref="clickSound" :src="clickSoundSrc" preload="auto"></audio>

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
import { FlFilledMusicNoteOff2, FlFilledMusicNote2 } from '@kalimahapps/vue-icons'

const audioSrc = '/audio/theme2.mp3'
const clickSoundSrc = '/audio/click-sound.mp3' // your click sound

const bgm = ref(null)
const clickSound = ref(null)
const isPlaying = ref(false)

const IconPlay = FlFilledMusicNote2
const IconPause = FlFilledMusicNoteOff2

const toggleAudio = () => {
    const audio = bgm.value
    if (!audio) return

    playClickSound()

    if (isPlaying.value) {
        audio.pause()
        isPlaying.value = false
    } else {
        audio.play().then(() => {
            isPlaying.value = true
        }).catch(err => {
            console.warn('Playback failed:', err)
        })
    }
}

const playClickSound = () => {
    if (!clickSound.value) return

    // Reset and play
    clickSound.value.currentTime = 0
    clickSound.value.play().catch(err => {
        console.warn('Click sound failed:', err)
    })
}

// Auto play BGM after first interaction
onMounted(() => {
    // Lower click sound volume
    if (clickSound.value) {
        clickSound.value.volume = 0.2     // Adjust ClickSound Volume Here
    }

    const tryPlay = () => {
        if (!isPlaying.value && bgm.value) {
            bgm.value.volume = 0                       // Start with volume at 0 (silent), so we can fade in smoothly
            bgm.value.play().then(() => {
                isPlaying.value = true 
                let vol = 0                            // Start a fade-in effect by gradually increasing the volume
                const targetVolume = 0.85 // 🔊 Set your desired base volume here

                const fadeIn = setInterval(() => {
                    vol += 0.8 // smaller steps = smoother fade
                    if (vol >= targetVolume) {                // If volume reaches or exceeds 1 (max), cap it at 1 and stop the fade
                        vol = targetVolume
                        clearInterval(fadeIn)
                    }
                    bgm.value.volume = vol
                }, 50 ) // Runs every 50 milliseconds
            }).catch(() => {
                console.warn('Autoplay blocked')
            })
        }

        // ✅ Pre-warm the click sound
        if (clickSound.value) {                     // Try to play the click sound silently — some mobile browsers need this
            clickSound.value.play().then(() => {    // This keeps it "ready" in memory without playing the sound
                clickSound.value.pause();           // Immediately pause the audio after it starts
                clickSound.value.currentTime = 0;   // Reset the playback time to the start (so it can play from the beginning later)
            }).catch(() => {
                console.warn('Click sound pre-warm failed');  // If the browser blocks autoplay (which can happen on mobile), log a warning but continue without crashing

            });
        }

        window.removeEventListener('click', tryPlay)
        window.removeEventListener('keydown', tryPlay)
        window.removeEventListener('touchstart', tryPlay)
    }

    // Listen for global click to trigger audio
    window.addEventListener('click', tryPlay)
    window.addEventListener('keydown', tryPlay)
    window.addEventListener('touchstart', tryPlay)

    // Also add global click sound effect
    window.addEventListener('click', playClickSound)
})

</script>