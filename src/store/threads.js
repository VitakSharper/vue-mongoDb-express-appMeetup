import axios from 'axios'

export default ({
    state: {
        items: null,
    },
    mutations: {},
    getters: {
        getThreads(state) {
            return state.items;
        }
    },
    actions: {
        async threadsForMeetup({commit, state}, meetupId) {
            state.items = null;
            try {
                const threads = await axios.get(`/api/v1/threads?meetupId=${meetupId}`);
                commit('setItems', {resource: 'threads', items: threads.data}, {root: true});
            } catch (e) {
                console.log(e)
            }
        }
    }
})
