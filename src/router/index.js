import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import Upload from '../views/Upload.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FAQ from '../views/FAQ.vue'
import Check from '../views/Check.vue'

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
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
