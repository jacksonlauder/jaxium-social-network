import { http } from './HttpService'
import store from '../store'

export function getAllUsers () {
  return http().get('/user')
}

export function getUserById (id) {
  return http().get(`/user/${id}`)
}
 export function getUserData (id) {
   getUserById(id).then(res => {
     store.state.userFirstName = res.data.user.first
     store.state.userLastName = res.data.user.last
     store.state.userEmail = res.data.user.email
     store.state.userLocation = res.data.user.userLocation
     store.state.userWebsite = res.data.user.userWebsite
     store.state.userDescription = res.data.user.userDescription
    })
 }
