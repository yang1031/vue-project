import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
=======
import HelloWorld from '@/pages/index'
>>>>>>> refs/remotes/origin/master

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
