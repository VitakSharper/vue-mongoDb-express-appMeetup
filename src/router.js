import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {layout: 'main'},
            component: () => import( './views/Home.vue')
        },
        {
            path: '/meetups/:id',
            name: 'meetupDetail',
            meta: {layout: 'main'},
            component: () => import('./views/MeetupDetail.vue')
        },
        {
            path: '/find',
            name: 'find',
            meta: {layout: 'main'},
            component: () => import('./views/FindMeetup.vue')
        },
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'empty'},
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'empty'},
            component: () => import('./views/Register.vue')
        },
        {
            path: '*',
            name: 'PageNotFound',
            meta: {layout: 'empty'},
            component: () => import('./views/PageNotFound.vue')
        }
    ]
});

export default router;
