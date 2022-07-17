import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/Index.vue';
import SignUp from './views/SignUp.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Profile from './views/Profile.vue';
import CreateClass from './views/CreateClass.vue';
import LamdaTest from './components/LamdaTest.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/" , component: Index},
    {path: "/signup" , component: SignUp},
    {path:'/login' , component: Login},
    {path:'/test' , component: LamdaTest},
    {path: '/auth' , component: CreateAuth},

    // 動的なリンク作成
    {path:'/dashboard', component: Dashboard},
    {path:'/profile', component: Profile},
    {path:'/createclass', component: CreateClass},
  ]
})