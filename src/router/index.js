import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/Home',
            component: resolve => require(['../views/Home/index.vue'], resolve),
        },
        {
            path: '/SheQu',
            component: resolve => require(['../views/SheQu/index.vue'], resolve),
        },
        {
            path: '/HuanBao',
            component: resolve => require(['../views/HuanBao/index.vue'], resolve),
        },
        {
            path: '/JianShe',
            component: resolve => require(['../views/JianShe/index.vue'], resolve),
        },
        {
            path: '/JingJi',
            component: resolve => require(['../views/JingJi/index.vue'], resolve),
        },
        {
            path: '/ShuJu',
            component: resolve => require(['../views/ShuJu/index.vue'], resolve),
        },
    ]
})
