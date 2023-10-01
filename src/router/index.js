import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/whimsy',
        name: 'whimsy',
        component: () => import('../views/WhimsyView'),
        children: [
            {
                path: '',
                name: 'list',
                component: () => import('../views/whimsy/WhimsyList'),
            },
            {
                path: 'GreedySnake',
                name: 'GreedySnake',
                component: () => import('../views/whimsy/GreedySnake'),
            },
            {
                path: 'test',
                name: 'test',
                component: () => import('../views/whimsy/Test'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
