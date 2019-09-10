import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Dropdown from "./components/shared/Dropdown";
import Hero from "./components/shared/Hero";

Vue.config.productionTip = false;

Vue.component('Dropdown', Dropdown);
Vue.component('Hero', Hero);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
