import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        meetups: {},
        categories: {},
        threads: [],
        meetup: {}

    },
    mutations: {
        setMeetups(state, meetups) {
            state.meetups = meetups;
        },
        setCategories(state, categories) {
            state.categories = categories;
        }
    },
    getters: {
        getMeetups(state) {
            return state.meetups;
        },
        getCategories(state) {
            return state.categories;
        }
    },
    actions: {
        async fetchMeetups({commit}) {
            try {
                const meetups = await axios.get('/api/v1/meetups');
                commit('setMeetups', meetups.data);
            } catch (e) {
                console.log('Error: ', e)
            }
        },
        async fetchCategories({commit}) {
            try {
                const categories = await axios.get('/api/v1/categories');
                commit('setCategories', categories.data);
            } catch (e) {
                console.log('Error: ', e)
            }
        }
    }
})
