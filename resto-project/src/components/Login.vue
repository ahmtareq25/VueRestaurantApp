<template>
    <AppLogo />
    <div id="feedback-form">
        <h2 class="header">Login</h2>
        <p style="color:red">{{errorMessage}}</p>
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <AppSubmitButton v-on:click="login" buttonName="Login" />
        <p>
            <router-link to="/sign-up" style="color:gray; margin-top: 5px;">Register</router-link>
        </p>

    </div>

</template>


<script>
import AppLogo from './partials/AppLogo.vue';
import AppSubmitButton from './partials/AppSubmitButton.vue';

import axios from 'axios'

export default {
    name: 'AppLogin',
    components: {
        AppLogo,
        AppSubmitButton
    },
    data() {
        return {
            email: '',
            password: '',

            errorMessage: ''
        }
    },
    methods: {

        async login() {
            await axios.get("http://localhost:3000/users?email=" + this.email + "&password=" + this.password,).then(result => {
                if (result.status == 200 && result.data.length > 0) {
                    localStorage.setItem('user_info', JSON.stringify(result.data))
                    this.redirectToHome();
                } else {
                    this.errorMessage = "Email or password is incorrect!";
                    console.log('hi! I am here in else condition')

                }

                console.log(result, this.errorMessage);

            });




        },

        redirectToHome() {
            this.$router.push({
                name: 'Home'
            })
        }
    },
    mounted() {

        let user = localStorage.getItem('user_info');
        if (user) {
            this.redirectToHome()
        }

    }
}
</script>