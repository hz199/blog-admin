import axios from './axios'

export const createArticle = function (payload) {
  return axios.post('/api/article', payload)
}

export const getArticles = function (payload) {
  return axios.get('/api/article', {
    params: payload
  })
}
