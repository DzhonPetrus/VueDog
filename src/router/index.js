import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Picture from '../views/Picture.vue'
import Video from '../views/Video.vue'
import Fact from '../views/Fact.vue'

const routes = [
  {
    path: '/',
    redirect: '/picture'
  },
  {
    path: '/picture',
    name: 'Picture',
    component: Picture
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/fact',
    name: 'Fact',
    component: Fact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
