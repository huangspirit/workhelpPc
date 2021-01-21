import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import index from './modules/index' // 首页
Router.prototype.isBack = false
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [
      ...index
    ]
  }
  ]
},
)
