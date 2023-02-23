import { createRouter, createWebHashHistory } from 'vue-router';

import Product from '../components/Product';
import Login from '../views/Login';
import Register from '../views/Register.js';
import Products from '../views/Products';




const router = createRouter({
    history: createWebHashHistory(), 
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/products',
            component: Products
        }
    ]
});

export default router;