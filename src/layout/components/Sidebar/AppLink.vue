<template>
    <div class="app-ink">
        <component :is="type" v-bind="linkProps(to)">
            <slot />
        </component>
    </div>
</template>
<script>
import { isExternal } from '@/utils/validate'
export default {
    name: 'AppLink',

    props: {
        to: {
            type: String,
            required: true
        }
    },

    methods: {
        linkProps(to) {
            if (this.isExternal) {
                return {
                    href: to,
                    target: "_blank",
                    rel: "noopener"
                }
            }
            return {
                to: to
            }
        }
    },
    computed: {
        isExternal() {
            return isExternal(this.to)
        },
        type() {
            if (this.isExternal) {
                return 'a'
            }
            return "router-link"
        }
    },
};
</script>

