import Vue from 'vue'
import VueRouter from 'vue-router'
import SiteHome from '../views/SiteHome.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import UserHome from '../views/user/Home.vue'
import Profile from '../views/user/Profile.vue'
import ProfileEdit from '../views/user/ProfileEdit.vue'
import Messages from '../views/user/Messages.vue'
import MessageEdit from '../views/user/MessageEdit'
import Notifications from '../views/user/Notifications.vue'
import * as auth from '../services/AuthService'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SiteHome',
    component: SiteHome,
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/:username')
      }
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/:username')
      }
    }
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next()
      } else {
        next('/:username')
      }
    }
  },

  {
    path: '/:username',
    name: 'UserHome',
    component: UserHome,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: '/:username/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: '/:username/profile/profile-edit',
    name: 'profile-edit',
    component: ProfileEdit,
    beforeEnter: (toolbar, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: '/:username/messages',
    name: 'messages',
    component: Messages,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: '/:username/messages/:id',
    name: "message-edit",
    component: MessageEdit,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: "/:username/notifications",
    name: "notifications",
    component: Notifications,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next()
      } else {
        next('/')
      }
    }
  },

  {
    path: "*",
    redirect: "/",
  },
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
