class ApiService {
  get() {

  }
  post() {

  }
  upload() {

  }
  request() {

  }
  loginApplication() {
    return this.post('/api/login')
  }
}


export default new ApiService()
