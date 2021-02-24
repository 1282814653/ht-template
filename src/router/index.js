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
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import("@/views/error/index"),
        hidden: true
    },
    // 首页
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [{
            path: "dashboard",
            name: "Dashboard",
            component: () => import('@/views/dashboard/index'),
            meta: {
                title: "首页",
                // icon: "dashboard"
            }
        }]
    },
    // 新闻 模块
    {
        path: "/",
        component: Layout,
        redirect: "/newstype",
        meta: { title: "新闻" },
        children: [
            {
                path: "newstype",
                name: "NewsType",
                component: () => import('@/views/news/newsType/index'),
                meta: {
                    title: "新闻类型",
                    // icon: "dashboard"
                }
            },
            {
                path: "newslist",
                name: "NewsList",
                component: () => import('@/views/news/newsList/index'),
                meta: {
                    title: "新闻列表",
                    // icon: "dashboard"
                }
            },
            {
                path: "newsupload",
                name: "NewsUpload",
                component: () => import('@/views/news/newsUpload/index'),
                meta: {
                    title: "新闻上传",
                    // icon: "dashboard"
                }
            },
        ]
    },
    // 图片模块
    {
        path: "/",
        component: Layout,
        redirect: "/images",
        children: [{
            path: "images",
            name: "Images",
            component: () => import('@/views/images/index'),
            meta: {
                title: "图片",
                // icon: "dashboard"
            }
        }]
    },


    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: {
            title: 'Example',
            // icon: 'el-icon-s-help'
        },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: {
                    title: 'Table',
                    //  icon: 'table'
                }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                meta: {
                    title: 'Tree',
                    //  icon: 'tree'
                }
            }
        ]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: {
                    title: '表单',
                    // icon: 'form'
                }
            }
        ]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'Nested',
            // icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: 'Menu1' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: { title: 'Menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: { title: 'Menu1-2' },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: { title: 'Menu1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: { title: 'Menu1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: { title: 'Menu1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                name: 'Menu2',
                meta: { title: 'menu2' }
            }
        ]
    },

    {
        path: '*',
        redirect: '/404',
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
