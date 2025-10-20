<template>
  <section class="px-4 md:px-20 py-10 text-white bg-cyan-700">
    <div class="flex flex-col md:flex-row">
      <!-- Left Section -->
      <div class="md:w-1/4 justify-start">
        <p class="text-white">
          Skin AI is an educational tool for skin lesion analysis, not a medical diagnostic device. 
          Always consult healthcare professionals for medical diagnosis and treatment.
        </p>
        <p class="text-white mt-5">
          Developed by Abeselom Tesfay Gebremariam | Copyright © 2025
        </p>
      </div>

      <!-- Middle Section -->
      <div class="md:w-1/2 justify-center grid grid-cols-2">
        <div class="md:px-12 max-md:mt-5">
          <ul class="flex-col space-y-3 text-gray-300 font-medium">
            <li><a href="/#main" class="hover:text-cyan-300 transition-colors">Home</a></li>
            <li><a href="/#tech-stack" class="hover:text-cyan-300 transition-colors">Technical Details</a></li>
            <li><a href="/#how-to-use" class="hover:text-cyan-300 transition-colors">How It Works</a></li>
            <li><a href="/#ai" class="hover:text-cyan-300 transition-colors">AI Architecture</a></li>
            <li><a href="https://github.com/abeselom-tesfay/skin-lesion-detection" class="hover:text-cyan-300 transition-colors">Source Code</a></li>
          </ul>
        </div>
        <div class="max-md:mt-4 md:px-6">
          <ul class="md:flex-col space-y-3 text-gray-300 font-medium">
            <li><a href="/#features" class="hover:text-cyan-300 transition-colors">Features</a></li>
            <li><a href="/faq" class="hover:text-cyan-300 transition-colors">FAQ</a></li>
            <li><a href="#about" class="hover:text-cyan-300 transition-colors">Contact Developer</a></li>
          </ul>
        </div>
      </div>

      <!-- Right Section -->
      <div class="md:w-1/4 justify-center space-y-4 max-md:mt-6 md:px-6">
        <p class="text-white font-semibold">Collaboration & Contact</p>
        <p class="text-cyan-200">Open to research projects and AI collaborations</p>
        <p class="text-white">abeselomtesfay@gmail.com</p>

        <!-- Social Icons -->
        <div class="flex space-x-4 mt-4">
          <!-- GitHub -->
          <a href="https://github.com/abeselom-tesfay" class="hover:text-cyan-300 transition-colors" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/abeselom-tesfay/" class="hover:text-cyan-300 transition-colors" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.3 17V10.8H5.7V17H8.3M7 9.6A1.4 1.4 0 1 0 7 6.8A1.4 1.4 0 0 0 7 9.6M18.3 17V13.7C18.3 11.9 17.1 10.7 15.3 10.7C14.2 10.7 13.5 11.3 13.2 11.8V10.8H10.7V17H13.3V14.1C13.3 13.3 13.9 12.7 14.7 12.7C15.5 12.7 16.1 13.3 16.1 14.1V17H18.3Z" />
            </svg>
          </a>
          <!-- Twitter -->
          <a href="https://x.com/AbeselomTesfay" class="hover:text-cyan-300 transition-colors" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.9c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0 1.9-2.4c-.9.5-1.8.9-2.8 1.1A4.2 4.2 0 0 0 16.2 4c-2.4 0-4.3 2-4.3 4.3c0 .3 0 .6.1.9a12.1 12.1 0 0 1-8.8-4.4c-.3.6-.4 1.2-.4 1.9c0 1.5.8 2.8 2 3.6c-.7 0-1.3-.2-1.9-.5v.1c0 2.1 1.5 3.9 3.5 4.3c-.4.1-.8.2-1.3.2c-.3 0-.6 0-.9-.1c.6 1.8 2.3 3.1 4.2 3.1A8.6 8.6 0 0 1 2 19.5a12.1 12.1 0 0 0 6.6 1.9c7.9 0 12.2-6.6 12.2-12.2v-.6c.8-.5 1.5-1.2 2-2Z"/>
            </svg>
          </a>
          <!-- Email -->
          <a href="mailto:abeselomtesfay@gmail.com" class="hover:text-cyan-300 transition-colors" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>