import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
  {
    path:'/search-results/:search',
    name:'/search-results',
    component: () => import('../views/SearchResults.vue')
  },
  {
    path:'/:id',
    name:'/:id',
    component: () => import('../views/RecommendedTopics.vue')
  },
  {
    path: '/',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  }
]
})