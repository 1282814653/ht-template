import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Layout from "@/layout"


export const staticRoutes = [
    // 登录页面
    {
        path: '/login',
        name: 'login',
        meta: { title: "登录" },
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index'),
        hidden: true
    },
    // 404 页面
    {
        path: "/error",
        name: "error",
        component: () => import(/* webpackChunkName: "error" */ '@/views/Error/index'),
        hidden: true
    },
    // 主页
    {
        path: '/',
        component: Layout,
        redirect: "/index",
        children: [
            {
                path: "index",
                name: "Index",
                component: () => import("@/views/Home/index")
            }
        ]
    },
    // 图片页面
    {
        path: '/images',
        component: Layout,
        // redirect: "/images",
        children: [
            {
                path: "images",
                name: "Images",
                component: () => import("@/views/Images/index")
            }
        ]
    },
    // 新闻页面
    {
        path: '/news',
        component: Layout,
        // redirect: "/news",
        children: [
            {
                path: "news",
                name: "News",
                component: () => import("@/views/News/index")
            }
        ]
    },
    // 轮播页面
    {
        path: '/swipers',
        component: Layout,
        // redirect: "/swipers",
        children: [
            {
                path: "swipers",
                name: "Swipers",
                component: () => import("@/views/Swipers/index")
            }
        ]
    },


    // 页面指向 404 页面
    {
        path: "*",
        redirect: "/error",
        hidden: true
    }
]

const createRouter = () => new VueRouter({
    // mode: 'history',
    //   mode:"hash",
    scrollBehavior: () => ({ y: 0 }),
    // base: process.env.BASE_URL,
    routes: staticRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
