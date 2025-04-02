<template>
    <button @click="goBack"
        class="relative flex items-center gap-2 px-2 py-0.5 rounded text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-md transition fade-in hover2">
        <FlArrowLeft class="w-4 h-4" />
        <span class="text-xs">Back</span>
    </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { FlArrowLeft } from '@kalimahapps/vue-icons'

const router = useRouter()

const goBack = () => {
    router.back()
}
</script>