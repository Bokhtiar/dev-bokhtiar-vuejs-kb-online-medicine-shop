import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/User/home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../components/User/about.vue')
	},
	{
		path: '/products',
		name: 'Products',
		component: () => import('../components/User/Product/Index.vue')
	},

	/**admin auth route */
	{
		path: '/admin/register',
		name: 'register',
		component: () => import('../components/Admin/Auth/Register.vue')
	},
	{
		path: '/admin/list',
		name: 'list',
		component: () => import('../components/Admin/Auth/List.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
