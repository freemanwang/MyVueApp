
import Vue from 'vue'
//1.导包
import VueRouter from 'vue-router'
//2.必须手动安装。script标签引入可以不做这步
Vue.use(VueRouter)

import account from'./main/Account.vue'
import goodslist from'./main/GoodsList.vue'
import login from './sub/login.vue'
import register from './sub/register.vue'

//3.创建路由对象
var router = new VueRouter({
    routes:[

    ]
})

export default router