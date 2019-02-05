import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import About from '@/components/about'
import HeroPage from '@/components/heroPage'
import WorkPage from '@/components/work'
import Page404 from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
      path: '/hero',
      name: 'HeroPage',
      component: HeroPage
    },
    {
      path: '/work',
      name: 'WorkPage',
      component: WorkPage
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    }
  ]
})