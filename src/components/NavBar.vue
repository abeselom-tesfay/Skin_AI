<template>
  <nav class="fixed w-full top-0 left-0 z-50 bg-blue-900 px-4 md:px-20 py-3 flex justify-between items-center">
    <div class="">
      <img src="@/assets/logo.svg" alt="Logo" class="h-30 w-30"/>
    </div>

    <ul class="hidden md:flex space-x-6 text-white font-medium">
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Main</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Risks Detection</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Features</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">How it works</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Artificial Intelligence</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">FAQ</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Register</a></li>
      <li><a href="#" class="hover:text-blue-500 transition-colors underline">Log In</a></li>
    </ul>

    <button 
      class="md:hidden text-white focus:outline-none"
      @click="isOpen = !isOpen"
    >
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div 
      v-if="isOpen"
      class="absolute top-36 left-0 w-full bg-blue-900 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden text-white"
    >
      <a href="#" class="hover:text-blue-500 underline">Main</a>
      <a href="#" class="hover:text-blue-500 underline">Risks</a>
      <a href="#" class="hover:text-blue-500 underline">Detection Features</a>
      <a href="#" class="hover:text-blue-500 underline">How it works</a>
      <a href="#" class="hover:text-blue-500 underline">Artificial Intelligence</a>
      <a href="#" class="hover:text-blue-500 underline">FAQ</a>
      <a href="#" class="hover:text-blue-500 bg-red-600 rounded-full px-8 py-2">Register</a>
      <a href="#" class="border border-white hover:text-blue-500 px-9 py-2 rounded-full">Log In</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>
