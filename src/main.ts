import { createApp } from 'vue'
import 'bootstrap';
import './assets/css/main.scss'
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
