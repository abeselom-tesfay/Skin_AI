<template>
  <section class="bg-cyan-700 px-4 md:px-20 pt-20 text-white" id="main">
    <div class="items-start ">
        <h2 class="text-2xl md:text-3xl font-bold mt-20">Check your skin!</h2>
    </div>
    <div class="flex flex-col md:flex-row gap-10 mt-5 px-4 md:px-0">
      
      <div class="lg:w-1/2 grid md:grid-cols-2 gap-4">
        <div class="flex items-center">
          <img src="@/assets/images/image-1.png" alt="Skin Sample 1" class="w-28 h-28 rounded-full object-cover"/>
          <div class="flex flex-col ml-4 items-start">
            <p class="mt-2 text-sm rounded-full px-2 py-1 border border-white">STEP 1</p>
            <p class="mt-2 text-sm">Take a photo of a skin problem</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="@/assets/images/image-2.png" alt="Skin Sample 2" class="w-28 h-28 rounded-full object-cover"/>
          <div class="flex flex-col ml-4 items-start">
            <p class="mt-2 text-sm rounded-full px-2 py-1 border border-white">STEP 2</p>
            <p class="mt-2 text-sm">AI instantly analyzes your photo</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="@/assets/images/image-3.png" alt="Skin Sample 3" class="w-28 h-28 rounded-full object-cover"/>
          <div class="flex flex-col ml-4 items-start">
            <p class="mt-2 text-sm rounded-full px-2 py-1 border border-white">STEP 3</p>
            <p class="mt-2 text-sm">Get a personalized PDF report</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="@/assets/images/image-4.png" alt="Skin Sample 4" class="w-28 h-28 rounded-full object-cover"/>
          <div class="flex flex-col ml-4 items-start">
            <p class="mt-2 text-sm rounded-full px-2 py-1 border border-white">STEP 4</p>
            <p class="mt-2 text-sm">AI Consultant explains your result</p>
          </div>
        </div>
      </div>

      <!-- Right Div: Skin Image + Description -->
      <div class="lg:w-1/2 flex flex-col items-center max-lg:hidden">
        <img src="@/assets/images/skin-pic.png" alt="Skin Sample" class="w-full h-full object-cover rounded-lg"/>
      </div>

    </div>
      <div class="items-start">
        <router-link to="/check">
        <button class="bg-cyan-800 hover:bg-cyan-900 text-white font-semibold py-2 mt-5 px-4 rounded-full">
          GET INSTANT RESULT
        </button>
        </router-link>
        <p class="my-5 pb-5 text-lg md:text-xl">* The scan result is not a diagnosis. To obtain an accurate diagnosis and a recommendation for treatment - consult your doctor.</p>
      </div>
  </section>
</template>

<script setup>
</script>
