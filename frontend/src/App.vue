<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// List of routes where footer should NOT appear
const noFooterRoutes = ['/login', '/register', '/faq', '/check', '/samples']

const showFooter = computed(() => !noFooterRoutes.includes(route.path))
</script>

<template>
  <NavBar />
  <router-view />
  <Footer v-if="showFooter" />
</template>
