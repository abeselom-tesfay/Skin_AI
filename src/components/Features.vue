<template>
  <section class="px-4 md:px-40">
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

  </section>

  <!-- Carousel -->
  <section class="py-10 px-4 md:px-20">
        <div class="relative">
                <div class="flex flex-col justify-start max-md:hidden">
                  <img src="@/assets/images/test.png" alt="ISO Certification" class="w-70 h-auto" />
                </div>
          
            <img
              :src="images[currentIndex]"
              :alt="`Carousel Image ${currentIndex + 1}`"
              class="w-full h-auto object-cover rounded-lg"
            />

            <!-- Dots -->
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
  </section>

  <!-- What do you know section -->
   <section class="px-4 md:px-20">
    <div class="items-start">
      <h2 class="text-xl text-gray-900 md:text-3xl font-bold mt-5">
        What do you know about your skin?
      </h2>
      <p class="text-gray-900 py-2">
        AI Dermatologist is a personal AI consultant that helps you understand your skin better.
      </p>

    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2 items-start">
      <!-- First Column -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
        <div class="flex flex-col">
          <p class="font-bold text-gray-900">Skin cancer</p>
          <span>(melanoma, BKK, BCC, etc.)</span>
        </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
          <p class="font-bold text-gray-900">Precancerous lesions</p>
          <span>(blue and dysplastic nevus, etc.)</span>
          </div>

        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="font-bold text-gray-900">6 types of acne</p>
        </div>
      </div>

      <!--Second Column-->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div>
           <p class="font-bold text-gray-900">Benign formations</p>
          <span>(moles, angeoma, dermatofibroma, etc.)</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Papilloma virus</p>
            <span>(warts, papillomas, mollusks, etc.)</span>
          </div>
        </div>
      </div>
       <div class="flex rounded-md max-md:hidden bg-cyan-400 p-4">
         <p class="text-white">AI Dermatologist is based on Artificial Intelligence technologies</p>
           <img src="@/assets/images/icon.png"/>
       </div>
    </div>
        <div class="items-start mb-5">
        <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 mt-5 px-16 rounded-full">
          TRY NOW
        </button>
      </div>

   </section>

    <!-- Info -->
    <section class="px-4 md:px-20 mt-10">
      <div class="flex justify-center">
        <div class="flex items-center gap-2 rounded-md bg-red-100 px-4 py-2">
          <!-- Info SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
          </svg>
          <p class="ml-1"><span class="font-bold">Tip:</span> For more accurate results, upload 3 high-quality photos so the AI can thoroughly analyze the affected skin area.</p>
        </div>
      </div>
           <!--Description-->
        <div class="flex flex-col md:flex-row justify-center mt-20">
          <div class="md:w-1/3 ml-20 order-2 md:order-1 flex justify-center md:justify-start">
          <img src="@/assets/images/man.png" class="items-center"/>
          </div>
          <div class="md:w-2/3 order-1 md:order-2 items-start mb-5">
           <div class="items-start">
            <h2 class="text-xl text-gray-900 md:text-3xl font-bold mt-5">
              AI Dermatologist can save your life
            </h2>
            <p class="text-gray-500 py-2">
              One of the most dangerous diseases that AI Dermatologist can help identify is skin cancer.
            </p>
            <p class="font-bold text-gray-500">Skin cancer is the most common cancer in the United States and worldwide.</p>
          </div>
          <!--list-->
         <div class="space-y-1 mt-3">
          <div class="flex items-start gap-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500 ">More than 2 people die of skin cancer every hour all over the world.</p>
          </div>
          <div class="flex items-start gap-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500">Melanoma is a skin cancer that can spread earlier and more quickly than other skin cancers.</p>
          </div>
          <div class="flex items-start gap-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500">Melanoma is the second most common of all cancers in men and women ages 15-29.</p>
          </div>
          <div class="flex items-start gap-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500">1 in 50 people will develop skin cancer in their lifetime.</p>
          </div>          
          <div class="flex items-start gap-2 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
            <p class="text-gray-500">When detected early, the 5-year survival rate for melanoma is 99 percent.</p>
          </div>
          
         </div>
         </div>
        </div>
    </section>

    <!-- bg image-->
    <section class="px-4 md:px-20 justify-center">
      <div
        class="px-4 md:px-20 rounded-lg h-60 flex items-center justify-center text-gray-900 bg-[url('@/assets/images/bg-image-banner.png')] bg-cover bg-center"
      >
        <div class="w-full max-w-7xl">
          <h2 class="text-3xl font-bold mb-4">Early Detection Saves Lives!</h2>
          <p class="mb-6">
            Small changes can mean big problems. 7 simple questions can reveal what your skin needs to stay healthy.
          </p>
          <button class="px-14 text-white py-3 bg-red-600 rounded-full shadow-md">
            ACT NOW
          </button>
        </div>
      </div>

    </section>

    <!-- Testimonials -->

<section class="px-4 md:px-20 py-10">
    <div class="max-w-5xl mx-auto">
      <h3 class="text-2xl font-bold mb-6 text-gray-900 text-start">84% of our users find AI Dermatologist helpfull.</h3>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="testimonial in slides[currentIndex]"
          :key="testimonial.name"
          class="bg-white p-6 rounded-2xl border border-spacing-1 shadow flex flex-col items-center"
        >
          <img
            :src="testimonial.image"
            alt="user"
            class="w-16 h-16 rounded-full border-2 border-blue-900"
          />
          <h3 class="mt-4 font-semibold">{{ testimonial.name }}</h3>
          <p class="text-sm text-gray-500">{{ testimonial.role }}</p>

          <!-- Stars -->
      <div class="flex justify-center mt-2">
        <template v-for="n in 5">
          <svg
            v-if="n <= testimonials[currentIndex].rating"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            :key="'filled-' + n"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.38 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            :key="'empty-' + n"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.38 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        </template>
      </div>  
      <p class="mt-3 text-gray-700 italic text-center">"{{ testimonial.text }}"</p>
      </div>
      </div>
      <!-- Dots navigation -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </section>

</template>


<script setup>

import { ref, computed } from "vue";

const images = [
  new URL('@/assets/images/banner1.png', import.meta.url).href,
  new URL('@/assets/images/banner2.png', import.meta.url).href
];

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    text: "This platform transformed the way I work. The UI is sleek and the experience is seamless.",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Product Designer",
    text: "The design and functionality exceeded my expectations. I highly recommend it to professionals.",
    image: "https://i.pravatar.cc/100?img=2",
    rating: 4,
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    text: "A truly innovative solution that makes my workflow faster and more enjoyable.",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Project Manager",
    text: "Great support and intuitive features. It has become an essential tool in our team.",
    image: "https://i.pravatar.cc/100?img=4",
    rating: 4,
  },
];

// Compute slides with 2 testimonials per slide
const slides = computed(() => {
  const chunked = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunked.push(testimonials.slice(i, i + 2));
  }
  return chunked;
});


const currentIndex = ref(0);
</script>
