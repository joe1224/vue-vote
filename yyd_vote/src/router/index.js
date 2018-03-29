import Vue from 'vue'
import Router from 'vue-router'
import tpIndex from '../components/tpIndex.vue'
import ranking from '../components/ranking.vue'
import signUp from '../components/signUp.vue'
import tpDetails from '../components/tpDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/tpIndex',
      component: tpIndex
    },
    {
      path:'/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/signUp',
      name: '/signUp',
      component: signUp
    },
    {
      path: '/tpDetails',
      name: 'tpDetails',
      component: tpDetails
    }
  ]
})
