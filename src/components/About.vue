<template>
  <section class="px-4 md:px-20">
    <div class="items-start">
      <h2 class="text-xl text-gray-900 md:text-3xl font-bold mt-10">
        Why should you use AI Dermatologist?
      </h2>
      <p class="text-gray-900 py-2">
        Developed with dermatologists and powered by artificial intelligence.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 items-start">
      
      <!-- First Column -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p>Detects 58+ skin diseases, including melanoma and skin cancer</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p>Over 97% accuracy, based on AI and clinical database</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p>Result within 1 minute</p>
        </div>
      </div>

      <!-- Second Column -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p>Enables instant at-home screening</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p>24/7 personal AI Consultant</p>
        </div>
      </div>

      <!-- Third Column (ISO image) -->
      <div class="flex flex-col justify-start">
        <img src="@/assets/images/iso.png" alt="ISO Certification" class="w-40 h-auto" />
      </div>
    </div>

    <!-- Carousel -->
     <div class="mt-5 my-10">
      <div class="relative">
        <img
          :src="images[currentIndex]"
          :alt="`Carousel Image ${currentIndex + 1}`"
          class="w-full h-full object-cover rounded-lg"
        />

        <div class="flex justify-center gap-2 mt-4">
          <button
            v-for="(img, index) in images"
            :key="index"
            class="w-3 h-3 rounded-full"
            :class="index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'"
            @click="currentIndex = index"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>

import { ref } from "vue";

const images = [
  new URL('../assets/images/banner-1.png', import.meta.url).href,
  new URL('../assets/images/banner-2.png', import.meta.url).href
];

const currentIndex = ref(0);
</script>
