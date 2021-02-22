import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'
Vue.use(VueRouter)

const routes = [
    // 
    {
        path: '/',
        redirect: "/index",
    },
    // 登录页面
    {
        path: '/login',
        name: 'login',
        meta: { title: "登录" },
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index')
    },
    // 主页 
    {
        path: "/",
        // name: "Layout",
        // component: () => import(/* webpackChunkName: "layout" */ '@/views/Layout/index'),
        component: Layout,
        redirect: "/index",
        children: [
            {
                path: "index",
                name: "Index",
                meta: { title: "index主页" },
                component: () => import(/* webpackChunkName: "login" */ '@/views/Home/index'),
            }
        ]
    },
    // { path: "*", redirect: "/404", hidden: true },
]

const router = new VueRouter({
    mode: 'history',
    //   mode:"hash",
    base: process.env.BASE_URL,
    routes
})

export default router
