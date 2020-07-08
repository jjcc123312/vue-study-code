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
        // 箭头模式，又称函数模式，可以传递params，也可以传递query
        props: (route) => ({ id : route.params.id }),
        component: article,
      },
      {
        name: 'News',
        path: 'news/:id?',
        // 开启布尔模式传递参数。不使用router传递参数，使得页面与页面之间解耦
        props: (route) => ({ id : route.query.id }),
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
