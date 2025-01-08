import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
  ]
})

export default router