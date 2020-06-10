import Vue from 'vue';
import VueRouter from 'vue-router'
import Event from "@/postMessage/Iframe.js";

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
        {
            path: '/SunshineSheQu',
            name: 'SunshineSheQu',
            component: resolve => require(['../views/SunshineSheQu/index.vue'], resolve),
        },
        {
            path: '/KeyQiYe',
            component: resolve => require(['../views/KeyQiYe/index.vue'], resolve),
        },
        {
            path: '/CarXunCha',
            name: 'CarXunCha',
            component: resolve => require(['../views/CarXunCha/index.vue'], resolve),
        },
        {
            path: '/SixBuilding',
            component: resolve => require(['../views/SixBuilding/index.vue'], resolve),
        },
    ]
})
