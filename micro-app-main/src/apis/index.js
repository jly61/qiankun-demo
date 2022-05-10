import axios from 'axios'

export function apiLogin () {
  return axios.get('/login')
}
