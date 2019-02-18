import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import autoCodes from './components/auto_codes/auto_codes'
import mainInterface from './components/main_interface/main_interface'
import virtialMain from './components/virtualmain/virtualmain'
import phyDetails from './components/phy_details/phy_details'
import virDetails from './components/vir_details/vir_details'
import addProduct from './components/product/add_product'
import checkProduct from './components/product/check_product'
import addProject from './components/project/add_project'
import checkProject from './components/project/check_project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auto_codes',
      name: 'auto_codes',
      component: autoCodes
    },
    {
      path: '/main_interface',
      name: 'main_interface',
      component: mainInterface
    },
    {
      path: '/virtual_main',
      name: 'virtual_main',
      component: virtialMain
    },
    {
      path: '/phy_details',
      name: 'phy_details',
      component: phyDetails
    },
    {
      path: '/vir_details',
      name: 'vir_details',
      component: virDetails
    },
    {
      path: '/add_product',
      name: 'add_product',
      component: addProduct
    },
    {
      path: '/check_product',
      name: 'check_product',
      component: checkProduct
    },
    {
      path: '/add_project',
      name: 'add_project',
      component: addProject
    },
    {
      path: '/check_project',
      name: 'check_project',
      component: checkProject
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
