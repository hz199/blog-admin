import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  // 身份认证失败
  // if (response.data.error === 1001) {
  //   window.location.href = '/auth/login'
  //   return
  // }

  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err.response.data)
})

export default instance
