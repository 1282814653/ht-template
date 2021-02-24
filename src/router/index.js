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
    // {
    //     path: '/',
    //     meta: { title: "主页" },
    //     redirect: "/home",
    // },
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
        // name: "home",
        component: Layout,
        redirect: "/index",
        children: [
            // 主页
            {
                path: "/index",
                name: "Index",
                meta: { title: "主页" },
                component: () => import(/* webpackChunkName: "login" */ '@/views/Home/index'),
            },
            // 新闻页面
            {
                path: "/news",
                name: "News",
                meta: { title: "新闻页" },
                component: () => import(/* webpackChunkName: "news" */ '@/views/News/index'),
            },
            // 图片页面
            {
                path: "/images",
                name: "Images",
                meta: { title: "图片页" },
                component: () => import(/* webpackChunkName: "images" */ '@/views/Images/index'),
            },
            // 轮播页面
            {
                path: "/swiper",
                name: "Swiper",
                meta: { title: "轮播页" },
                component: () => import(/* webpackChunkName: "swiper" */ '@/views/Swipers/index'),
            },

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
