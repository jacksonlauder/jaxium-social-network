import store from '../store'
import { http } from './HttpService'

export function isLoggedIn () {
  const token = localStorage.getItem('token')
  return token != null
}

export function login (user) {
  return http().post('/api/auth', user).then(res => {
    if (res) {
      const fakeToken = {
        token: 'my-token'
      }
      setToken(fakeToken)
    }
  })
}

export function logout () {

}

function setToken(token) {
  localStorage.setItem('token', JSON.stringify(token))
  store.dispatch('authenticate')
}

export function getToken () {

}

export function getUsername () {
  return 'jackson'
}

export function getUserId () {
  return 1;
}

export function registerUser (user) {
  return http().post('api/register', user)
}

// function decodeToken () {

// }
