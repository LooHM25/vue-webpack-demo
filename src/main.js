import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { Button, Header } from 'mint-ui'


Vue.component(Button.name, Button)
Vue.component(Header.name, Header);

import app from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'

import './lib/mui/css/mui.min.css'




var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})