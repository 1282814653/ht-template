<template>
    <div v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <app_link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                    <menu_item :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title"></menu_item>
                </el-menu-item>
            </app_link>
        </template>

        <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <menu_item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title"></menu_item>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" is-nest="true" :item="child" :base-path="resolvePath(child.path)" class="nest-menu"></sidebar-item>
        </el-submenu>
    </div>
</template>
<script>
import path from 'path'
import menu_item from './MenuItem'
import app_link from './AppLink'
import { isExternal } from '@/utils/validate'
import FixiOSBug from './FixiOSBug'

export default {
    name: 'SidebarItem',
    components: {
        menu_item,
        app_link
    },
    mixins: [FixiOSBug],
    props: {
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ""
        }
    },
    data() {
        this.onlyOneChild = null
        return {

        };
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.children) {
                    return false
                } else {
                    this.onlyOneChild = item
                    return true
                }
            })

            if (showingChildren.length === 1) {
                return true
            }

            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: "", noShowingChildren: true }
                return true
            }
            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    },

};
</script>

