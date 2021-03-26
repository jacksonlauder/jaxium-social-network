import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteHome from '../views/SiteHome.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import Home from '../views/user/Home.vue'
import Profile from '../views/user/Profile.vue'
import ProfileEdit from '../views/user/ProfileEdit.vue'
import Messages from '../views/user/Messages.vue'
import MessageEdit from '../views/user/MessageEdit'
import Notifications from '../views/user/Notifications.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SiteHome',
    component: SiteHome
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
    path: '/:username/profile/profile-edit',
    name: 'profile-edit',
    component: ProfileEdit
  },

  {
    path: '/:username/messages',
    name: 'messages',
    component: Messages
  },

  {
    path: '/:username/messages/:id',
    name: "message-edit",
    component: MessageEdit,
  },

  {
    path: "/:username/notifications",
    name: "notifications",
    component: Notifications,
  },

  {
    path: "*",
    redirect: "/",
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
