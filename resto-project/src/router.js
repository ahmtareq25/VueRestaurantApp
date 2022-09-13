import Home from './components/Home.vue';
import signUp from './components/SignUp.vue';
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
        name : "SignIn",
        component: signUp,
        path: '/sign-up'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;