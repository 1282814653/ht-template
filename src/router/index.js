import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/index'
Vue.use(VueRouter)

const routes = [
    // 404 页面
    {
        path: "/error",
        name: "error",
        component: () => import(/* webpackChunkName: "error" */ '@/views/Error/index'),
    },
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
    // 页面指向 404 页面
    {
        path: "*",
        redirect: "/error",
    }
]

const router = new VueRouter({
    mode: 'history',
    //   mode:"hash",
    base: process.env.BASE_URL,
    routes
})

export default router
