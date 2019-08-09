import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from "@/utils/auth";

export const mobileRoute = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/index'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/user/login'),
    hidden: true
  }
]

const router =  new Router({
  mode: 'history',
  routes: mobileRoute
})
export default router
router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (getToken()) {
    next();
    NProgress.done();
  } else {
    if (to.path === "/login") {
      next();
      NProgress.done();
    }  else {
      next("/login");
      NProgress.done();
    }
  }
})