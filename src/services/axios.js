import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('adminToken') || null

  if (config.method == 'post') {
    config.data = {
      ...config.data,
      token
    }
  } else if (config.method == 'get') {
    config.params = {
      ...config.params,
      token
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, (err) => {
  if (err.response.status === 401) {
    window.location.href = '/auth/login'
    return
  }
  return Promise.reject(err.response.data)
})


export default instance