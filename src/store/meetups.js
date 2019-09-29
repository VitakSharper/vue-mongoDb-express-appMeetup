import axios from 'axios'

export default ({
    state: {
        items: null,
        item: null
    },
    mutations: {},
    getters: {
        getMeetups(state) {
            return state.items;
        },
        getMeetup(state) {
            return state.item;
        }
    },
    actions: {
        async fetchMeetups({commit, state}) {
            state.items = null;
            try {
                const meetups = await axios.get('/api/v1/meetups');
                commit('setItems', {resource: 'meetups', items: meetups.data}, {root: true});
            } catch (e) {
                console.log('Error: ', e)
            }
        },
        async fetchMeetupById({commit, state}, meetupId) {
            state.item = null;
            try {
                const meetup = await axios.get(`/api/v1/meetups/${meetupId}`);
                commit('setItem', {resource: 'meetups', item: meetup.data}, {root: true});
            } catch (e) {
                console.log('Error: ', e);
            }
        }
    }
})
