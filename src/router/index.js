import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/User/home.vue')
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
