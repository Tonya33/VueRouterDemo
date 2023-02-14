//imports always at the top
import LoginPage from './modules/LoginPage.js';
import HomePage from './modules/HomePage.js';
import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue;
const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),
    routes: [
        //the view router will try to match these routes
        //this is what you put in the location bar in the browswe
        //when you get a match, vuw will render the specfici component into the router view
        {
            path: '/', //broswer location bar looks like this
            name: 'login', //for programatic navigation
            component: LoginPage
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        //put a catch-all for broken routes at the bottom of your route stack
        //if view router can't match the specfic view, it'll display a generic error component
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: ErrorPage
        },
    ]
})

// 5. Create and mount the root instance.
const app = Vue.createApp({
    methods: {
        tryRouterPush() {
            this.$router.push({
                name: 'home'
            })
        }
    }
});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);
app.mount('#app');