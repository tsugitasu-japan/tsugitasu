import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/Index.vue';
import SignUp from './views/SignUp.vue';
import Login from './views/Login.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/" , component: Index},
    {path: "/signup" , component: SignUp},
    {path:'/login' , component: Login}
  ]
})