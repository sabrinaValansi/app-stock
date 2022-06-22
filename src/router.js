import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import EditProduct from './components/EditProduct.vue'
import AddProduct from './components/AddProduct.vue'
import ListProducts from './components/ListProducts.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
routes: [
  {path: "/", component: Home},
  {path: "/list", component: ListProducts},
  {path: "/edit/:id", component: EditProduct},
  {path: "/add", component: AddProduct}
    ]
})