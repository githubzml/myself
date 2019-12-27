import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import homePage from '../components/oHeader/homePage'
import protectPage from '../components/oHeader/protectPage'
import blogPage from '../components/oHeader/blogPage'
import messagePage from '../components/oHeader/messagePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/homePage',
          name: 'homePage',
          component: homePage
        },
        {
          path: '/protectPage',
          name: 'protectPage',
          component: protectPage
        },
        {
          path: '/blogPage',
          name: 'blogPage',
          component: blogPage
        },
        {
          path: '/messagePage',
          name: 'messagePage',
          component: messagePage
        }
      ]
    }
  ]
})
