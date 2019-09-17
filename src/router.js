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
            component: () => import( './views/Home.vue')
        },
        {
            path: '/meetups/:id',
            name: 'meetupDetail',
            component: () => import('./views/MeetupDetail.vue')
        },
        {
            path: '/find',
            name: 'find',
            component: () => import('./views/FindMeetup.vue')
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: () => import('./views/PageNotFound.vue')
        }
    ]
});

export default router;
