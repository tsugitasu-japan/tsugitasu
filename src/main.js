import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import HeaderLogin from './components/HeaderLogin.vue';
import router from "./router.js"

const app = createApp(App);
app.component('Header',Header);
app.component('HeaderLogin',HeaderLogin);
app.use(router);
app.mount('#app');
