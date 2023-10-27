import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'
import ProductList from '../views/ProductList.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/productlist',
    name: 'ProductList',
    component: ProductList 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router