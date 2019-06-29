import Vue from 'vue'

import app from './app.vue'

//Mint-UI 的头部组件
import {Header} from 'mint-ui'
Vue.component(Header.name, Header)

//MUI的 Tabbar 片段
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el:'#app',
    render: c => c(app)
})