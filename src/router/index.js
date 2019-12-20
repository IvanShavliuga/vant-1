import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from '../views/Bar.vue'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Transport from '../views/Transport.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Bar,
    children: [
      {path: '/home', name: 'home', component: Home, meta: {title: '首页', auth: true}},
      {path: '/store', name: 'store', component: Store, meta: {title: '商城', auth: true}},
      {path: '/transport', name: 'transport', component: Transport, meta: {title: '转运', auth: true}},
      {path: '/mine', name: 'mine', component: Mine, meta: {title: '我的', auth: true}},
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.bg) {
    document.querySelector('body').setAttribute('style', 'background:' + to.meta.bg)
  } else {
    document.querySelector('body').setAttribute('style', 'background:#f8f8f8')
  }
  next()
})

export default router
