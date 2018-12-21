import Vue from 'vue'
import Router from 'vue-router'
import TestPage from '@/components/TestPage'
import CompA from '@/components/CompA'
import CompB from '@/components/CompB'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestPage',
      component: TestPage
    },
    {
      path: '/a',
      name: 'CompA',
      component: CompA
    },
    {
      path: '/b',
      name: 'CompB',
      component: CompB
    }
  ]
})
