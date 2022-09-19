<template>
    <AppHeader />
    <h1>Welcome the Home page</h1>
</template>

<script>
import AppHeader from './partials/AppHeader.vue'
export default {
    name: "AppHome",
    components: {
        AppHeader
    },

    methods: {

        redirectToLogin() {
            this.$router.push({
                name: 'AppLogin'
            })
        }
    },

    mounted() {

        let user = localStorage.getItem('user_info');
        if (!user) {
            this.redirectToLogin()
        }

    }
}
</script>