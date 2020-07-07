import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import article from '../components/Article'
import news from '../components/News'

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: article
      },
      {
        name: 'Article',
        path: 'article/:id?',
        component: article
      },
      {
        name: 'News',
        path: 'news/:id?',
        component: news
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')    // 延迟加载
  },
  {
    path: '/',
    components: {
      default: Home,
      left: article,
      top: news
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
