import axios from './axios'

export const register = function (payload) {
  return axios.post('/api/register', payload)
}

export const login = function (payload) {
  return axios.post('/api/login', payload)
}

export const findUserInfo = function (payload) {
  return axios.get('/api/userInfo', {
    params: payload
  })
}
