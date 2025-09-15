<template>
  <section class="px-4 md:px-20 py-16 bg-gray-50">
    <h1 class="text-4xl mt-10 font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h1>

    <div class="max-w-4xl mx-auto space-y-4">
      <div 
        v-for="(item, index) in faqs" 
        :key="index" 
        class="bg-white rounded-lg shadow p-4 cursor-pointer"
        @click="toggle(index)"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-medium text-gray-800">{{ item.question }}</h2>
          <span class="text-gray-500">
            <svg 
              v-if="activeIndex === index" 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 transform rotate-180 transition-transform duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg 
              v-else 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6 transition-transform duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <p v-if="activeIndex === index" class="mt-2 text-gray-600">{{ item.answer }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'What is Skin AI?',
    answer: 'Skin AI is a prediagnostic tool that helps detect skin lesions and monitor skin health using AI-driven image analysis.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes, all images and data are processed securely and never shared with third parties without consent.'
  },
  {
    question: 'How accurate is the prediction?',
    answer: 'Predictions depend on the AI model and training data. While it is highly informative, it does not replace a dermatologist consultation.'
  },
  {
    question: 'Can I use it on mobile?',
    answer: 'Yes, Skin AI is fully responsive and you can also download the app for easier access on mobile devices.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'Creating an account allows you to save your history and get personalized recommendations.'
  }
]

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

