import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Charts from '@/components/Charts'
import ProductList from '@/components/ProductList'
import UserList from '@/components/UserList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Login
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/main',
      component:Main,
      children:[
        {path:'',component:Charts},
        {path:'/charts',component:Charts},
        {path:'/pl',component:ProductList},
        {path:'/ul',component:UserList}
      ]
    }
  ]
})
