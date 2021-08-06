import createRoute from './create-route';

export const home = createRoute({
	path: '/',
	exact: true,
	component: require('./home').default,
});

export const about = createRoute({
	path: '/about',
	exact: true,
	component: require('./about').default,
});

export const clients = createRoute({
	path: '/clients',
	exact: true,
	component: require('./clients').default,
});

export const project = createRoute({
	path: '/projects/:id',
	exact: true,
	component: require('./project').default,
});

export const team = createRoute({
	path: '/team',
	exact: true,
	component: require('./team').default,
});

export const crewman = createRoute({
	path: '/team/:id',
	exact: true,
	component: require('./crewman').default,
});

export const join = createRoute({
	path: '/join',
	exact: true,
	component: require('./join').default,
});
