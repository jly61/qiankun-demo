import axios from 'axios'

export function apiGetUserInfo (data) {
  return axios.post('/getUserInfo', {
    data
  })
}
