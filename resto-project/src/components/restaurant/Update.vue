<template>
    <AppHeader />
    <div id="feedback-form">
        <h2 class="header">Update Restaurant</h2>
        <input v-model="restaurant.name" type="text" placeholder="Name" />
        <input v-model="restaurant.contact"  type="text" placeholder="Contact" />
        <input v-model="restaurant.address"  type="text" placeholder="Address" />
        <AppSubmitButton v-on:click="UpdateRestaurant" buttonName="Update" />
        
    </div>
</template>

<script>
import AppHeader from '../partials/AppHeader.vue';
import AppSubmitButton from '../partials/AppSubmitButton.vue';
import axios from 'axios';
export default {
    name: "UpdateRestaurant",
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

        async UpdateRestaurant(){
            let result = await axios.put("http://localhost:3000/restaurants/"+this.getRestaurantId(),{
                name : this.restaurant.name,
                contact : this.restaurant.contact,
                address : this.restaurant.address
            });
            

            if(result.status == 200){
                
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
        },
        async getRestaurant(id){
            await axios.get("http://localhost:3000/restaurants/"+id).then(result => {
                if (result.status == 200 && result.data) {
                    this.restaurant.name = result.data.name;
                    this.restaurant.contact = result.data.contact;
                    this.restaurant.address = result.data.address;
                } 

            });
        },

        getRestaurantId(){
            return this.$route.params.id;
        }
    },

    mounted() {

        let user = localStorage.getItem('user_info');
        if (!user) {
            this.redirectToLogin()
        }
        
        this.getRestaurant(this.getRestaurantId());

    }
}
</script>
