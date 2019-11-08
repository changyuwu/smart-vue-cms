import {
  SET_APP_STATE
} from './actions'

const app = {
  state: {
    app_state: 'smart-app'
  },
  mutations: {
    [SET_APP_STATE](state, payload) {
      console.log('stat', state, payload)
    }
  },
  actions: {
    setAppState({commit}, payload) {
      return new Promise(resolve => {
        commit(SET_APP_STATE, payload)
        resolve()
      })
    }
  },
  namespaced: true
}

export default app
