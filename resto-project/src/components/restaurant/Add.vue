<template>
    <AppHeader />
    <div id="feedback-form">
        <h2 class="header">Add Restaurant</h2>
        <input v-model="restaurant.name" type="text" placeholder="Name" />
        <input v-model="restaurant.contact"  type="text" placeholder="Contact" />
        <input v-model="restaurant.address"  type="text" placeholder="Address" />
        <AppSubmitButton v-on:click="AddRestaurant" buttonName="Add" />
        
    </div>
</template>

<script>
import AppHeader from '../partials/AppHeader.vue';
import AppSubmitButton from '../partials/AppSubmitButton.vue';
import axios from 'axios';
export default {
    name: "AddRestaurant",
    components: {
        AppHeader,
        AppSubmitButton
    },
    data(){
        return {
            restaurant:{
                name:'',
                contact:'',
                address:''
            }
        }
    },

    methods: {

        async AddRestaurant(){
            let result = await axios.post("http://localhost:3000/restaurants",{
                name : this.restaurant.name,
                contact : this.restaurant.contact,
                address : this.restaurant.address
            });
            console.log(result)

            if(result.status == 201){
                
                this.redirectToHome()
            }
        },

        redirectToLogin() {
            this.$router.push({
                name: 'AppLogin'
            })
        },
        redirectToHome() {
            this.$router.push({
                name: 'Home'
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
