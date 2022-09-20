<template>
    <AppHeader />
    <h1>Welcome the Home page</h1>
    <div style="width: 800px; margin: 0px auto;">
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr v-for="item in restaurans" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>
                    <router-link :to="'/update-restaurant/'+item.id">Update</router-link>
                    <button @click="deleteRestaurant(item.id)">Delete</button>
                </td>

            </tr>

        </table>
    </div>
</template>

<script>
import AppHeader from './partials/AppHeader.vue';
import axios from 'axios';
export default {
    name: "AppHome",
    components: {
        AppHeader
    },
    data(){
        return {
            restaurans:[]
        }
    },

    methods: {

        redirectToLogin() {
            this.$router.push({
                name: 'AppLogin'
            })
        },

        async getRestaurants(){
            await axios.get("http://localhost:3000/restaurants").then(result => {
                if (result.status == 200 && result.data.length > 0) {
                    this.restaurans = result.data
                } 

            });
        },

        async deleteRestaurant(id){
            await axios.delete("http://localhost:3000/restaurants/"+id).then(result => {
                if (result.status == 200) {
                    this.getRestaurants();
                } 

            });
        }


    },

    mounted() {

        this.getRestaurants();

    }
}
</script>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th,
    td {
        text-align: left;
        padding: 8px;
    }
    
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    </style>