import Vue from 'vue'
import Router from 'vue-router'

import ListShops from '@/components/ListShops'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ListShops',
            component: ListShops
        }
    ]
})