import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/Index.vue';
import SignUp from './views/SignUp.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Profile from './views/Profile.vue';
import CreateClass from './views/CreateClass.vue';
import LamdaTest from './components/LamdaTest.vue';
import CreateAuth from './views/CreateAuth.vue';
import ProfileEdit from './views/ProfileEdit.vue';
import DashboardGroupView from './views/DashboardGroupView.vue';
import Cropper from './components/Cropper.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/" , component: Index},
    {path: "/signup" , component: SignUp},
    {path:'/login' , component: Login},
    {path: '/auth' , component: CreateAuth},
    // 動作確認用
    {path:'/cropper',component: Cropper},
    {path:'/test' , component: LamdaTest},


    // 動的なリンク作成
    {path:'/dashboard/class', component: Dashboard},
    {path:'/dashboard/group', component: DashboardGroupView},
    {path:'/profile', component: Profile},
    {path:'/profile/edit', component: ProfileEdit},
    {path:'/dashboard/class/createclass', component: CreateClass},
  ]
})