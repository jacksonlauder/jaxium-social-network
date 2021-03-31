import store from '../store'

export function isLoggedIn () {
  const token = localStorage.getItem('token')
  return token != null
}

export function login () {
  const token = {
    username: 'jackson'
  }
  setToken(token)
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

export function registerUser () {

}

// function decodeToken () {

// }
