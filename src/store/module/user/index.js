import {SET_USER_INFO, SET_USER_TOKEN} from './actions'

const user = {
  state: {
    token: '',
    user: ''
  },
  mutations: {
    [SET_USER_TOKEN](state, payload) {
      state.token = payload.token
    },
    [SET_USER_INFO](state, payload) {
      state.user = payload.user
    },
  },
  actions: {
    setToken({commit}, payload) {
      commit(SET_USER_TOKEN, payload)
    },
    setUserInfo({commit}, payload) {
      commit(SET_USER_INFO, payload)
    }
  },
  namespaced: true
}

export default user
