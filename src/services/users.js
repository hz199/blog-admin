import axios from './axios'

export const register = function (payload) {
  return axios.post('/api/register', payload)
}