import axios from 'axios'


export default ({
    state: {
        meetups: {},
        categories: {},
        threads: [],
        meetup: null

    },
    mutations: {
        setMeetups(state, meetups) {
            state.meetups = meetups;
        },
        setMeetup(state, meetup) {
            state.meetup = meetup;
        },
        setThreads(state, threads) {
            state.threads = threads;
        },
        setCategories(state, categories) {
            state.categories = categories;
        }
    },
    getters: {
        getMeetups(state) {
            return state.meetups;
        },
        getMeetup(state) {
            return state.meetup;
        },
        getCategories(state) {
            return state.categories;
        },
        getThreads(state) {
            return state.threads;
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
        },
        async fetchMeetupById({commit}, meetupId) {
            try {
                const meetup = await axios.get(`/api/v1/meetups/${meetupId}`);
                commit('setMeetup', meetup.data);
            } catch (e) {
                console.log('Error: ', e);
            }
        },
        async threadsForMeetup({commit}, meetupId) {
            try {
                const threads = await axios.get(`/api/v1/threads?meetupId=${meetupId}`);
                commit('setThreads', threads.data);
            } catch (e) {
                console.log(e)
            }
        }
    }
})
