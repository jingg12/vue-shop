import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';
const routes = [
    // 路由的懒加载
    // @
    {
        path: '/',
        // name: 'home',
        component: Home,
    },
    {
        path: '/category',
        // name: 'category',
        component: () => import('@/views/Category/index.vue'),
    },
    //
    {
        path: '/search',
        // name: 'search',
        component: () => import('@/views/Search/index.vue'),
    },
    {
        path: '/login',
        // name: 'login',
        component: () => import('@/views/Login/index.vue'),
    },
    {
        path: '/cart',
        // name: 'cart',
        component: () => import('@/views/Cart/index.vue'),
    },
    {
        path: '/detail/:id', // 动态路由
        name: 'detail',
        component: () => import('@/views/Detail/index.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
