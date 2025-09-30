<template>
<section class="px-4 md:px-40">
    <div class="items-start">
      <h2 class="text-xl text-gray-900 md:text-3xl font-bold mt-10">
        Why Choose Skin AI? Advanced AI-Powered Dermatology
      </h2>
      <p class="text-gray-900 py-2">
        Built with cutting-edge deep learning and validated through extensive medical research.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 items-start">
      
      <!-- First Column - Technical Excellence -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>96.2% Accuracy</strong> with ensemble deep learning architecture</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Dual-stage CNN pipeline</strong> for precise lesion analysis</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Real-time inference</strong> powered by TensorFlow backend</p>
        </div>
      </div>

      <!-- Second Column - AI Innovation -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>EfficientNet + DenseNet ensemble</strong> for superior performance</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Advanced preprocessing</strong> with image validation and augmentation</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Confidence scoring</strong> with probabilistic predictions</p>
        </div>
      </div>

      <!-- Third Column - Technical Features -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>RESTful API architecture</strong> with Flask backend</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Mobile-optimized Vue.js</strong> frontend with Tailwind CSS</p>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p><strong>Cross-platform compatibility</strong> and responsive design</p>
        </div>
      </div>
    </div>

  </section>

  <!-- Carousel -->
  <section class="py-10 px-4 md:px-20" id="risks">
    <div class="relative">
      <!-- Carousel Images -->
<div v-for="(item, index) in carousel" :key="index">
  <img
    v-show="carouselIndex === index"
    :src="item.image"
    :alt="item.alt"
    class="w-full h-auto object-cover rounded-lg"
  />
</div>

<div class="flex justify-center gap-2 mt-4">
  <button
    v-for="(item, index) in carousel"
    :key="index"
    class="w-3 h-3 rounded-full"
    :class="index === carouselIndex ? 'bg-blue-900' : 'bg-gray-300'"
    @click="carouselIndex = index"
  ></button>
</div>

    </div>
  </section>

  <!-- What do you know section -->
<section class="px-4 md:px-20">
    <div class="items-start">
      <h2 class="text-xl text-gray-900 md:text-3xl font-bold mt-5">
        Advanced Skin Lesion Classification with AI
      </h2>
      <p class="text-gray-900 py-2">
        Skin AI leverages deep learning to analyze and classify 7 critical skin conditions with medical-grade accuracy.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-2 items-start">
      <!-- First Column - Cancer Detection -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
        <div class="flex flex-col">
          <p class="font-bold text-gray-900">Malignant Melanoma (MEL)</p>
          <span class="text-sm">High-risk skin cancer detection</span>
        </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
          <p class="font-bold text-gray-900">Basal Cell Carcinoma (BCC)</p>
          <span class="text-sm">Common skin cancer identification</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Actinic Keratosis (AKIEC)</p>
            <span class="text-sm">Pre-cancerous lesion analysis</span>
          </div>
        </div>
      </div>

      <!-- Second Column - Benign Conditions -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
           <p class="font-bold text-gray-900">Benign Keratosis (BKL)</p>
          <span class="text-sm">Non-cancerous growth detection</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Melanocytic Nevi (NV)</p>
            <span class="text-sm">Common mole classification</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Dermatofibroma (DF)</p>
            <span class="text-sm">Benign skin nodule recognition</span>
          </div>
        </div>
      </div>

      <!-- Third Column - Technical Features -->
      <div class="space-y-2">
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Vascular Lesions (VASC)</p>
            <span class="text-sm">Blood vessel growth analysis</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Real-time Analysis</p>
            <span class="text-sm">Sub-second prediction speeds</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Confidence Scoring</p>
            <span class="text-sm">Probabilistic AI predictions</span>
          </div>
        </div>
      </div>
    </div>

    <div class="items-start mb-5">
      <router-link to="/check">
        <button class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 mt-5 px-16 rounded-full transition duration-300">
          TEST SKIN AI
        </button>
      </router-link>
    </div>
</section>

<!-- Info -->
<section class="px-4 md:px-20 mt-10">
  <div class="flex justify-center">
    <div class="flex items-center gap-2 rounded-md bg-cyan-100 px-4 py-2">
      <!-- Info SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
      </svg>
      <p class="ml-1"><span class="font-bold">Technical Note:</span> For optimal AI analysis, upload clear, well-lit images with the lesion centered for feature extraction.</p>
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
            AI-Powered Early Detection Capabilities
          </h2>
          <p class="text-gray-500 py-2">
            Skin AI demonstrates 96.2% accuracy in identifying malignant skin lesions through advanced computer vision.
          </p>
          <p class="font-bold text-gray-500">Early detection significantly improves treatment outcomes for skin cancer patients.</p>
        </div>
        <!--list-->
       <div class="space-y-1 mt-3">
        <div class="flex items-start gap-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500 ">Melanoma survival rates exceed 99% when detected at early stages through regular screening.</p>
        </div>
        <div class="flex items-start gap-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500">AI systems can analyze thousands of visual features beyond human perception limits.</p>
        </div>
        <div class="flex items-start gap-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500">Computer vision reduces diagnostic variability compared to manual assessment.</p>
        </div>
        <div class="flex items-start gap-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500">Real-time analysis enables immediate risk assessment and medical guidance.</p>
        </div>          
        <div class="flex items-start gap-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <p class="text-gray-500">Ensemble learning combines multiple neural networks for enhanced diagnostic reliability.</p>
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
          <router-link to="/check">
          <button class="px-14 text-white py-3 bg-cyan-600 rounded-full shadow-md">
            ACT NOW
          </button>
          </router-link>
        </div>
      </div>

    </section>

    <!-- Testimonials -->

<section class="px-4 md:px-20 py-10">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">What Developers Say About Skin AI</h2>

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
      <div class="flex justify-center gap-2 mt-6" id="features">
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

<!-- Key Features -->
<section class="px-4 md:px-20 py-10">
  <div>
    <h3 class="text-gray-900 text-2xl font-bold text-center md:text-start mb-6">Technical Advantages of Skin AI</h3>
    
    <!-- Desktop Grid -->
    <div class="hidden md:grid grid-cols-4 gap-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="p-6"
      >
        <img :src="feature.icon" alt="Feature Icon" class="w-12 h-12 mb-4" />
        <h4 class="text-lg font-semibold text-gray-900">{{ feature.title }}</h4>
        <p class="text-gray-600 mt-2">{{ feature.description }}</p>
      </div>
    </div>

    <!-- Mobile Carousel -->
    <div class="md:hidden">
      <div class="p-6">
        <img :src="currentFeature.icon" alt="Feature Icon" class="w-12 h-12 mb-4" />
        <h4 class="text-lg font-semibold text-gray-900">{{ currentFeature.title }}</h4>
        <p class="text-gray-600 mt-2">{{ currentFeature.description }}</p>
      </div>

      <!-- Dots navigation -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(feature, index) in features"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="index === currentIndex ? 'bg-cyan-600' : 'bg-gray-300'"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </div>
</section>

<!-- How to use -->
<section class="px-4 md:px-20 py-10" id="how-to-use">
  <div class="md:text-start text-center mb-6">
    <h1 class="text-gray-900 font-bold mb-4 text-2xl">How to Use Skin AI</h1>
  </div>

  <!-- Desktop Grid -->
  <div class="hidden md:grid grid-cols-3 gap-4">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="bg-white p-4 flex flex-col items-center text-center"
    >
      <img :src="step.image" alt="Step Image" class="w-56 h-56 object-contain mb-3 rounded-md" />
      <h4 class="text-lg font-semibold text-gray-900">{{ step.title }}</h4>
      <p class="text-gray-600 mt-1">{{ step.description }}</p>
    </div>
  </div>

  <!-- Mobile -->
  <div class="md:hidden">
    <div class="items-center text-center">
      <img :src="currentStep.image" alt="Step Image" class="w-64 h-64 object-contain mx-auto mb-3 rounded-md" />
      <h4 class="text-lg font-semibold text-gray-900">{{ currentStep.title }}</h4>
      <p class="text-gray-600 mt-1">{{ currentStep.description }}</p>
    </div>

    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(step, index) in steps"
        :key="index"
        class="w-3 h-3 rounded-full"
        :class="index === currentIndex ? 'bg-cyan-600' : 'bg-gray-300'"
        @click="currentIndex = index"
      ></button>
    </div>
  </div>

  <div class="flex justify-center py-8">
    <router-link to="/check">
      <button class="bg-cyan-600 text-2xl text-white rounded-full px-16 py-3 hover:bg-cyan-700 transition">
        Try Now!
      </button>
    </router-link>
  </div>

  <div class="flex flex-col py-4 text-center">
    <p class="text-gray-600 text-sm">* You can take a photo on your mobile phone or upload a photo from your computer.</p>
    <p class="text-gray-600 text-sm">** You can view your results online or send them to your email address.</p>
  </div>
</section>

 <!--AI Section-->
<section class="px-4 md:px-20 py-10" id="ai">
<div class="grid md:grid-cols-2 gap-4 items-center">
    <div class="flex justify-center order-2 md:order-1">
      <img src="@/assets/images/ai-image.png" alt="AI Architecture" class="w-full max-w-sm h-auto object-contain" />
    </div>    
    <div class="flex flex-col items-start order-1 md:order-2">
      <h1 class="text-gray-800 text-3xl font-bold mb-4">Deep Learning Architecture & Model Training</h1>
      <p class="text-gray-600 mb-4">
        Skin AI employs an ensemble deep learning architecture combining EfficientNet-B0 and DenseNet-121 convolutional neural networks. The model was trained on the ISIC 2018 dataset, comprising dermatoscopic images with confirmed medical diagnoses.
      </p>
        <p class="text-gray-600 mb-4">
          Our dual-stage pipeline implements U-Net segmentation for precise lesion isolation followed by ensemble classification. The system achieves 96.2% accuracy by leveraging complementary feature representations from both network architectures.
      </p>
      <p class="text-gray-600 mb-4">
        <strong>Model Performance:</strong><br>
        • 96.2% Overall Accuracy<br>
        • 95.8% Precision | 94.7% Recall<br>
        • 0.982 AUC Score<br>
        • Ensemble outperforms individual models (EfficientNet: 94.1%, DenseNet: 93.8%)
      </p>
    </div>
  </div>

  <!-- Performance Metrics -->
<div class="px-4 md:px-20">
  <h1 class="font-bold text-3xl text-gray-900 text-start">
    Model Performance Metrics & Validation Results
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
    <!-- Card 1 -->
    <div class="rounded-2xl bg-cyan-400 text-white flex flex-col items-center justify-center p-6 shadow-md">
      <h1 class="text-2xl font-bold">96.2%</h1>
      <p>Overall Accuracy</p>
    </div>

    <!-- Card 2 -->
    <div class="rounded-2xl bg-cyan-400 text-white flex flex-col items-center justify-center p-6 shadow-md">
      <h1 class="text-2xl font-bold">0.982</h1>
      <p>AUC Score</p>
    </div>

    <!-- Card 3 -->
    <div class="rounded-2xl bg-cyan-400 text-white flex flex-col items-center justify-center p-6 shadow-md">
      <h1 class="text-2xl font-bold">95.8%</h1>
      <p>Precision Rate</p>
    </div>
  </div>
</div>

<!-- Technical Implementation -->
<div class="px-4 md:px-20 mt-5">
  <div class="relative py-5 md:grid grid-cols-2 bg-slate-50 md:bg-slate-100 rounded-2xl overflow-hidden max-w-6xl mx-auto">
    <!-- Left content -->
    <div class="z-10 px-6 md:px-10">
      <h1 class="font-bold text-3xl text-gray-900 text-start mb-6">
        Technical Stack & Deployment
      </h1>
      <p class="text-gray-600 mb-4">
        Built with TensorFlow 2.13 and Keras for model development, Flask REST API for backend serving, and Vue.js with Tailwind CSS for the responsive frontend interface.
      </p>
      <p class="text-gray-600 mb-4">
        Features include real-time image preprocessing, human skin validation, confidence scoring, and medical risk assessment with color-coded urgency levels for clinical decision support.
      </p>
      <div class="flex gap-4">
        <a href="#" class="flex items-center">
          <img src="@/assets/images/google.png" alt="Google Play" class="w-32 h-auto" />
        </a>
        <a href="#" class="flex items-center">
          <img src="@/assets/images/apple.png" alt="App Store" class="w-32 h-auto" />
        </a>
      </div>
      <p class="text-gray-500 text-sm mt-2 italic">Skin AI mobile application is currently under development</p>
    </div>

    <!-- Right image -->
    <div class="relative flex items-center justify-center max-md:hidden">
      <img 
        src="@/assets/images/phone-ai.png" 
        alt="Mobile Interface" 
        class="w-72 md:w-96 drop-shadow-xl"
      />
    </div>
  </div>
</div>

</section>

<!-- About Me Section -->
<section class="px-4 md:px-20 py-16 bg-gray-50">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">About the Developer</h2>
    
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Photo - Left Side -->
      <div class="flex flex-col items-center md:items-start">
        <img src="@/assets/images/developer.jpg" alt="Abeselom Tesfay" class="w-64 h-64 rounded-lg object-cover shadow-lg mb-6" />
        
        <!-- Developer Info -->
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold text-gray-800">Abeselom Tesfay Gebremariam</h3>
          <p class="text-gray-600 mt-2">AI & Machine Learning Developer</p>
          
          <!-- GitHub Links -->
          <div class="mt-4 flex flex-col space-y-3">
            <div class="flex items-center justify-center md:justify-start space-x-3">
              <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/abeselom-tesfay" target="_blank" class="text-cyan-600 hover:text-cyan-700 font-medium">
                GitHub Profile
              </a>
            </div>
            
            <div class="flex items-center justify-center md:justify-start space-x-3">
              <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/abeselom-tesfay/skin-lesion-detection" target="_blank" class="text-cyan-600 hover:text-cyan-700 font-medium">
                Skin Lesion Detection Project
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <p class="text-sm text-gray-700">
              <span class="font-semibold">Open to collaborate:</span> 
              Research projects and professional opportunities in AI, Machine Learning, and Data Science.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Content - Right Side (No Changes) -->
      <div class="">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">My Vision for AI in Healthcare</h3>
        <div class="space-y-4 text-gray-600">
          <p>
            As a passionate AI developer, I believe in leveraging cutting-edge technology to solve real-world healthcare challenges. 
            Skin AI represents my commitment to making medical diagnostics more accessible and accurate through artificial intelligence.
          </p>
          <p>
            My dream is to bridge the gap between advanced machine learning and practical medical applications, 
            creating tools that empower both patients and healthcare professionals.
          </p>
          <p class="font-semibold text-cyan-600">
            "Transforming healthcare through innovative AI solutions."
          </p>
        </div>

        <!-- Contact Form -->
<!-- Contact Form -->
<div class="mt-8 bg-white rounded-xl shadow-lg p-6">
  <h4 class="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h4>
  <form 
    action="https://formspree.io/f/myzwwqzd" 
    method="POST"
    class="space-y-4"
  >
    <div class="grid md:grid-cols-2 gap-4">
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        required 
      />
    </div>
    <textarea 
      name="message" 
      placeholder="Your Message" 
      rows="4" 
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
      required
    ></textarea>
    <button 
      type="submit" 
      class="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
    >
      Send Message
    </button>
  </form>
</div>
      </div>
    </div>
  </div>
</section>

</template>


<script setup>

import { ref, computed } from "vue";

const carousel = [
  {
    image: new URL('@/assets/images/banner1.png', import.meta.url).href,
    alt: 'Banner 1'
  },
  {
    image: new URL('@/assets/images/banner2.png', import.meta.url).href,
    alt: 'Banner 2'
  }
];

const testimonials = [
  {
    name: "Mengstu Hadush",
    role: "Machine Learning Engineer",
    text: "The ensemble architecture and 96.2% accuracy demonstrate exceptional model engineering. This sets a new standard for medical AI applications.",
    image: new URL('@/assets/images/mengie.jpg', import.meta.url).href,
    rating: 5,
  },
  {
    name: "Kibrom Mekonnen",
    role: "Data Scientist",
    text: "Impressive data preprocessing and model validation. The AUC score of 0.982 shows robust performance on the ISIC 2018 dataset.",
    image: new URL('@/assets/images/kbo.jpg', import.meta.url).href,
    rating: 4,
  },
  {
    name: "Mekonnen Haileselassie",
    role: "Full-stack Developer",
    text: "Seamless integration of Flask backend with Vue.js frontend. The mobile-responsive design and real-time predictions are technically outstanding.",
    image: new URL('@/assets/images/mokie.jpg', import.meta.url).href,
    rating: 5,
  },
  {
    name: "Misgina Gebretsadik",
    role: "Frontend Developer",
    text: "Beautiful UI/UX with Tailwind CSS. The medical guidance system and risk assessment features provide exceptional user experience.",
    image: new URL('@/assets/images/misgie.jpg', import.meta.url).href,
    rating: 4,
  },
];

const features = [
  {
    title: "Smart",
    description: "Leverages ensemble deep learning architecture with 96.2% diagnostic accuracy. The system combines EfficientNet and DenseNet models trained on the ISIC 2018 dataset for clinical-grade performance.",
    icon: new URL("@/assets/images/smart.png", import.meta.url).href,
  },
  {
    title: "Simple",
    description: "Completely free to use with instant analysis. Upload a skin image and receive AI-powered results within seconds, featuring confidence scores and medical risk assessment at no cost.",
    icon: new URL("@/assets/images/simple.png", import.meta.url).href,
  },
  {
    title: "Accessible",
    description: "Open-access platform available 24/7 with no subscription fees. Provides immediate dermatological screening capabilities through responsive web interface without financial barriers.",
    icon: new URL("@/assets/images/accessible.png", import.meta.url).href,
  },
  {
    title: "Affordable",
    description: "Zero-cost deployment with professional-grade AI diagnostics. Offers comprehensive skin lesion analysis completely free, making advanced medical AI accessible to everyone without budgetary constraints.",
    icon: new URL("@/assets/images/affordable.png", import.meta.url).href,
  },
];

const steps = [
  {
    title: "Take a photo*",
    description: "Keep zoomed at the closest distance (less than 10 cm), keep in focus and center only the skin mark (without hair, wrinkles and other objects)",
    image: new URL("@/assets/images/step1.png", import.meta.url).href
  },
  {
    title: "Identify and send",
    description: "Send your photo to the Artificial Intelligence. The system will analyze it and send you a risk assessment.",
    image: new URL("@/assets/images/step2.png", import.meta.url).href
  },
  {
    title: "Receive your risk assessment **",
    description: "Get the result within 60 seconds and related advice on the next steps to take.",
    image: new URL("@/assets/images/step3.png", import.meta.url).href
  }
]

// Compute slides with 2 testimonials per slide
const slides = computed(() => {
  const chunked = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunked.push(testimonials.slice(i, i + 2));
  }
  return chunked;
});
const currentFeature = computed(() => features[currentIndex.value]);
const currentStep = computed(() => steps[currentIndex.value]);

const currentIndex = ref(0);
const carouselIndex = ref(0);
</script>
