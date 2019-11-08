const getters = {
  token: state => state.user.token,
  user_info: state => state.user.user_info,
  app_state: state => state.app.app_state
}

export default getters
