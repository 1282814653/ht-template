export default {
    computed: {
        device() {
            return this.$store.state.app.device
        }
    },
    mounted() {
        this.fixBugIniOS()
    },
    methods: {
        fixBugIniOS() {
            const $subMenu = this.$refs.$subMenu
            if ($subMenu) {
                const handleMouseLeave = $subMenu.hamdleMouseleave
                $subMenu.handleMouseLeave = (e) => {
                    if (this.device === 'mobile') {
                        return
                    }
                    handleMouseLeave(e)
                }
            }
        }
    },
}