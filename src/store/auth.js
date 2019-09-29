export default {
    state: {},
    mutations: {},
    getters: {},
    actions: {
        loginWithEmailAndPassword({commit, state}, loginForm) {
            console.log('Login Form: ', loginForm);
        },
        registerUsers({commit, state}, registerForm) {
            console.log('Register Form: ', registerForm)
        }
    },
}
