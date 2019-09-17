import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import capitalize from "./filters/capitalize.filter";
import formatDate from "./filters/date.filter";
import Dropdown from "./components/shared/Dropdown";
import Hero from "./components/shared/Hero";

import axios from 'axios';

Vue.config.productionTip = false;

Vue.component('Dropdown', Dropdown);
Vue.component('Hero', Hero);

Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:8080/api/v1/'
});

Vue.filter('capitalize', capitalize);
Vue.filter('formatDate', formatDate);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
