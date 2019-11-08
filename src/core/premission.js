// import Vue from 'vue'
import NProgress from 'nprogress' // progress bar
import router from '../router'
import store from '../store'

NProgress.configure({ showSpinner: true })

const white_list = ['/login']
router.beforeEach((to, from, next) => {
  // this
  NProgress.start()
  if (white_list.includes(to.path)) {
    next()
  }
  checkToken().then(() => {
    next()
  }).catch(error => {
    console.log('error', error)
  })
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  console.log('store', store.getters.app_state)
  // next()
})

router.afterEach(() => {
  console.log('afterEach')
  NProgress.done() // finish progress bar
})

function checkToken() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
