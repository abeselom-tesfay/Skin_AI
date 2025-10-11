import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import HomeView from '@/views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FAQ from '../views/FAQ.vue'
import Check from '../views/Check.vue'
import Samples from '../components/Samples.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  }, 
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }, 
  {
    path: '/samples',
    name: 'Samples',
    component: Samples
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
