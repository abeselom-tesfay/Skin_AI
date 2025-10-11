<template>
  <section class="px-4 md:px-20 py-20 flex justify-center">
    <div class="w-full max-w-2xl">
      <!-- Show slider only if !showUpload -->
      <div v-if="!showUpload" class="mt-10 rounded-2xl bg-slate-100 p-8 flex flex-col items-center relative">
        <h1 class="text-gray-800 mb-4 font-bold text-2xl text-center leading-snug">
          Before you start - learn<br>
          how to make a suitable photo
        </h1>

        <!-- Image with arrows -->
        <div class="flex items-center justify-center relative w-full">
          <button @click="prevStep" class="absolute left-2 md:left-0 text-3xl font-bold text-cyan-700 hover:text-cyan-900">&lt;
          </button>
          <img :src="currentStep.icon" alt="Step Image" class="w-60 h-60 md:w-80 md:h-72 rounded-xl"/>
          <button @click="nextStep" class="absolute right-2 md:right-0 text-3xl font-bold text-cyan-700 hover:text-cyan-900">&gt;            
          </button>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(step, index) in steps"
            :key="index"
            class="w-3 h-3 rounded-full"
            :class="index === currentIndex ? 'bg-cyan-900' : 'bg-gray-300'"
            @click="currentIndex = index"
          ></button>
        </div>

        <!-- Got It button -->
        <button 
          class="mt-6 bg-cyan-600 text-white px-8 py-2 rounded-full hover:bg-cyan-700"
          @click="showUpload = true"
        >
          Got It
        </button>
      </div>

      <!-- <SkinUpload v-else /> -->
      <SkinUpload v-else />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SkinUpload from '../components/SkinUpload.vue'

const steps = [
  { icon: new URL("@/assets/slider-1.svg", import.meta.url).href },
  { icon: new URL("@/assets/slider-2.svg", import.meta.url).href },
  { icon: new URL("@/assets/slider-3.svg", import.meta.url).href },
]

const currentIndex = ref(0)
const currentStep = computed(() => steps[currentIndex.value])

const showUpload = ref(false) // Controls whether to show SkinUpload

const prevStep = () => {
  currentIndex.value = (currentIndex.value - 1 + steps.length) % steps.length
}

const nextStep = () => {
  currentIndex.value = (currentIndex.value + 1) % steps.length
}
</script>
