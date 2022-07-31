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
import ForgetPassword from './views/ForgetPassword.vue';
import { store } from './store';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    // 動作確認用
    { path: '/test', component: LamdaTest },
    // ログインが不必要
    {
      path: "/signup", component: SignUp,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next('/dashboard/class');
        } else {
          next()
        }
      }
    },
    {
      path: '/login', component: Login,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next('/dashboard/class');
        } else {
          next()
        }
      }
    },
    {
      path: '/forgetpassword', component: ForgetPassword,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next('/dashboard/class');
        } else {
          next()
        }
      }
    },
    {
      path: '/auth', component: CreateAuth,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next('/dashboard/class');
        } else {
          next()
        }
      }
    },

    // ログインが必要
    {
      path: '/dashboard/class', component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next('login')
        }
      }
    },
    {
      path: '/dashboard/group', component: DashboardGroupView,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next('login')
        }
      }
    },
    {
      path: '/profile', component: Profile,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next('login')
        }
      }
    },
    {
      path: '/profile/edit', component: ProfileEdit,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next('login')
        }
      }
    },
    {
      path: '/dashboard/class/createclass', component: CreateClass,
      beforeEnter(to, from, next) {
        if (store.getters.idToken) {
          next();
        } else {
          next('login')
        }
      }
    },
  ]
})