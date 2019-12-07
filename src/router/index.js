import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users.vue'
import Photos from '../views/Photos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/albums',
    name: 'albums',
    component: () => import('../views/Albums.vue')
  },
  {
    path: '/albums/:albumId/photos',
    name: 'photos',
    component: Photos,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
