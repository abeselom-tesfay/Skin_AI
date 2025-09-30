<template>
  <section class="px-4 md:px-20 py-20 flex justify-center items-center">
    <div class="w-full max-w-2xl bg-white p-10 md:p-16 rounded-lg shadow-lg">
      <h1 class="text-4xl font-semibold text-center mb-6">Register</h1>
      
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

        <!-- Confirm Password -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        <!-- Terms -->
        <div class="flex items-center gap-2 text-gray-700 text-sm">
          <input type="checkbox" id="terms" v-model="acceptedTerms" />
          <label for="terms">
            I accept the <a href="#" class="text-cyan-700 hover:underline">Terms of Use</a> and 
            <a href="#" class="text-cyan-700 hover:underline">Privacy Policy</a>
          </label>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col items-center gap-4 mt-10">
          <button
            type="submit"
            class="w-60 bg-cyan-700 text-white py-3 rounded-full hover:bg-cyan-600 transition duration-200"
          >
            Register
          </button>
          <button
            type="button"
            class="w-60 border border-cyan-700 text-cyan-700 py-3 rounded-full hover:bg-cyan-700 hover:text-white transition duration-200"
          >
            I have an Account
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
const confirmPassword = ref('')
const acceptedTerms = ref(false)

const handleSubmit = () => {
  if (!acceptedTerms.value) {
    alert('You must accept the terms and privacy policy')
    return
  }
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('Accepted Terms:', acceptedTerms.value)
}
</script>
