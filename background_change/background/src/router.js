import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'

Vue.use(Router)



const routes = [{
        path: '/',
        name: 'name',
        // redirect: "/other",
        component: Home

    },
    {
        path: "/other",
        name: "other",
        component: () =>
            import ('./views/other/other.vue')
    }
]
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})