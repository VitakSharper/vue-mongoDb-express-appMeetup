import Vue from 'vue';
import Vuex from 'vuex';

import meetups from "./meetups";
import categories from "./categories";
import threads from "./threads";
import auth from "./auth";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {
        setItems(state, {resource, items}) {
            state[resource].items = items;
        },
        setItem(state, {resource, item}) {
            state[resource].item = item;
        }
    },
    getters: {},
    actions: {},
    modules: {
        meetups,
        categories,
        threads,
        auth
    }
})
