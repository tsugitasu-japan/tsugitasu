import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import HeaderLogin from './components/HeaderLogin.vue';
import router from "./router.js"
import axios from "axios" ;
import {store} from "./store";

// axios baseURLでURLの共通部分を一元化
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/tsugitasu/databases/(default)/documents"

const app = createApp(App);
app.component('Header',Header);
app.component('HeaderLogin',HeaderLogin);
app.use(router);
app.use(store);
app.mount('#app');
