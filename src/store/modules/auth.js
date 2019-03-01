import * as userServices from '@/services/users'

const store = {
  userInfo: {}
}

const getters = {  
}

const mutations = {}

const actions = {
  /**
   * 获取用户的列表表
   * @param {*} context
   */
  getUserInfo (context, payload) {
    return userServices.findUserInfo(payload).then((result) => {
      return Promise.resolve(result)
    }).catch((err) => {
      return Promise.reject(err.response)
    })
  }
}

export default {
  store,
  getters,
  mutations,
  actions
}