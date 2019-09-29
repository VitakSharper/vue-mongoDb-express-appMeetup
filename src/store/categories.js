import axios from 'axios'

export default {
    state: {
        items: null,
    },
    mutations: {},
    getters: {
        getCategories(state) {
            return state.items;
        }
    },
    actions: {
        async fetchCategories({commit, state}) {
            state.items = null;
            try {
                const categories = await axios.get('/api/v1/categories');
                commit('setItems', {resource: 'categories', items: categories.data}, {root: true});
            } catch (e) {
                console.log('Error: ', e)
            }
        }
    }
}
