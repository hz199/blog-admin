import axios from './axios'

export const createArticle = function (payload) {
  return axios.post('/api/article', payload)
}

export const getArticles = function (payload) {
  return axios.get('/api/article', {
    params: payload
  })
}

export const deleteArticle = function ({ id, ...rest }) {
  return axios.post(`/api/article/${id}`, rest)
}

export const findOneArticle = function ({ id, ...rest }) {
  return axios.get(`/api/article/${id}`, {
    params: rest
  })
}
