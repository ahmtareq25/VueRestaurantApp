import Home from './components/Home.vue';
import signUp from './components/SignUp.vue';
import AppLogin from './components/Login';
import AddRestaurant from './components/restaurant/Add.vue';
import UpdateRestaurant from './components/restaurant/Update.vue';
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name : "Home",
        component: Home,
        path: '/'
    },
    {
        name : "SignUp",
        component: signUp,
        path: '/sign-up'
    },
    {
        name : "AppLogin",
        component: AppLogin,
        path: '/login'
    },
    {
        name : "AddRestaurant",
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name : "UpdateRestaurant",
        component: UpdateRestaurant,
        path: '/update-restaurant/:id'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;