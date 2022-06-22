import Vue from 'vue'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './store'
import './globalMixins'
import './globalFilters'
import './form'
import { router } from './router'

Vue.use(Vueaxios, axios) 



new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store : store
})