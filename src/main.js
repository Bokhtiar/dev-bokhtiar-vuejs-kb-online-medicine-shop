import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import axios from 'axios'
window.axios = axios
axios.defaults.baseURL = 'http://localhost:4000/api/v1/';


createApp(App).use(router).mount('#app')
