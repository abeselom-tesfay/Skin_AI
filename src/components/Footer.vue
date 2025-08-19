<template>
  <section class="px-4 md:px-20 py-10 text-white bg-blue-900">
    <div class="flex flex-col md:flex-row">
      <!-- Left Section -->
      <div class="md:w-1/4 justify-start">
        <p class="text-gray-200">
          AI Dermatologust is not intended to perform diagnosis, but rather to provide users the ability to image, track, and better understand their moles.
        </p>
        <p class="text-gray-500 mt-5">
          Ai Dermatologist | All Rights Reserved. Copyright © 2025
        </p>
      </div>

      <!-- Middle Section -->
      <div class="md:w-1/2 justify-center grid grid-cols-2">
        <div class="md:px-12 max-md:mt-5">
          <ul class="flex-col space-y-3 text-gray-300 font-medium">
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Main</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Early Detection</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">How it works</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Artificial Intelligence</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Install App</a></li>
          </ul>
        </div>
        <div class="max-md:mt-4 md:px-6">
          <ul class="md:flex-col space-y-3 text-gray-300 font-medium">
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Features</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">FAQ</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Terms of use</a></li>
            <li><a href="#" class="hover:text-blue-500 transition-colors underline">Cancel Subscription</a></li>
          </ul>
        </div>
      </div>

      <!-- Right Section -->
      <div class="md:w-1/4 justify-center space-y-6 max-md:mt-4 md:px-6">
        <p class="text-gray-500">If you have any question about our AI system - contact with us through email:</p>
        <p class="text-white">abeselomtesfay@gmail.com</p>

        <!-- HERE --- Social Icons -->
        <div class="flex space-x-4 mt-4">
          <!-- Facebook -->
          <a href="#" class="hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.3 17V10.8H5.7V17H8.3M7 9.6A1.4 1.4 0 1 0 7 6.8A1.4 1.4 0 0 0 7 9.6M18.3 17V13.7C18.3 11.9 17.1 10.7 15.3 10.7C14.2 10.7 13.5 11.3 13.2 11.8V10.8H10.7V17H13.3V14.1C13.3 13.3 13.9 12.7 14.7 12.7C15.5 12.7 16.1 13.3 16.1 14.1V17H18.3Z" />
            </svg>
          </a>
          <!-- Twitter -->
          <a href="#" class="hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.9c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4c-.9.5-1.8.9-2.8 1.1A4.2 4.2 0 0 0 16.2 4c-2.4 0-4.3 2-4.3 4.3c0 .3 0 .6.1.9a12.1 12.1 0 0 1-8.8-4.4c-.3.6-.4 1.2-.4 1.9c0 1.5.8 2.8 2 3.6c-.7 0-1.3-.2-1.9-.5v.1c0 2.1 1.5 3.9 3.5 4.3c-.4.1-.8.2-1.3.2c-.3 0-.6 0-.9-.1c.6 1.8 2.3 3.1 4.2 3.1A8.6 8.6 0 0 1 2 19.5a12.1 12.1 0 0 0 6.6 1.9c7.9 0 12.2-6.6 12.2-12.2v-.6c.8-.5 1.5-1.2 2-2Z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="#" class="hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7V17C2 19.8 4.2 22 7 22H17C19.8 22 22 19.8 22 17V7C22 4.2 19.8 2 17 2H7M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M18 6.2A1.2 1.2 0 0 1 19.2 7.4A1.2 1.2 0 0 1 18 8.6A1.2 1.2 0 0 1 16.8 7.4A1.2 1.2 0 0 1 18 6.2Z"/>
            </svg>
          </a>
          <!-- Telegram -->
          <a href="#" class="hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.8 18.4l.5-4.5l8.2-7.3c.4-.4-.1-.6-.6-.4l-10.2 6.5l-4.4-1.4c-1-.3-1-.9.2-1.3l16.9-6.5c.8-.3 1.5.2 1.2 1.3l-2.9 13.7c-.2 1-.8 1.2-1.7.7l-4.7-3.5l-2.3 2.2c-.2.2-.5.4-.9.3Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
