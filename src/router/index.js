import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import Home from '../views/user/Home.vue'
import Profile from '../views/user/Profile.vue'
import ProfileEdit from '../views/user/ProfileEdit.vue'
import Messages from '../views/user/Messages.vue'
import Notifications from '../views/user/Notifications.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/:username/home',
    name: 'home',
    component: Home
  },
  {
    path: '/:username/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/:username/profile-edit',
    name: 'profile-edit',
    component: ProfileEdit
  },
  {
    path: '/:username/messages',
    name: 'messages',
    component: Messages
  },
  {
    path: '/:username/notifications',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '*',
    redirect: '/'
  }
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
