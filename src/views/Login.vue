<template>
  <section class="px-4 md:px-20 py-20 flex justify-center items-center">
    <div class="w-full max-w-2xl bg-white p-10 md:p-16 rounded-lg shadow-lg">
      <h1 class="text-4xl font-semibold text-center mb-6">Log In</h1>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <div class="text-left">
          <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
        </div>

        <!-- Submit Buttons --> 
        <div class="flex flex-col items-center gap-4 mt-10">
        <button
            type="submit"
            class="w-60 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-200"
        >
            Login
        </button>
        <button
            type="button"
            class="w-60 border border-blue-500 text-blue-500 py-3 rounded-full hover:bg-blue-700 hover:text-white transition duration-200"
        >
            Register
        </button>
        </div>

      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
