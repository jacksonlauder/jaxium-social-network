import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService'
import * as user from '../services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    username: null,
    userId: null,
    userFirstName: null,
    userLastName: null,
    userEmail: null,
    userLocation: null,
    userWebsite: null,
    userDescription: null,
  },
  mutations: {
    authenticate (state) {
      state.isLoggedIn = auth.isLoggedIn()
      if (state.isLoggedIn) {
        state.username = auth.getUsername()
        state.userId = auth.getUserId()
        user.getUserData(state.userId)
      } else {
        state.userId = null
        state.username = null
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate')
    }
  },
  modules: {
  }
})
