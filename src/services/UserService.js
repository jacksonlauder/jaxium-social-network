import { http } from './HttpService'

export function getAllUsers () {
  return http().get('/user')
}

export function getUserById (id) {
  return http().get(`/user/${id}`).then(res => res.data.user)
}
 export function getUserData (id) {
   console.log(getUserById(id))
 }
