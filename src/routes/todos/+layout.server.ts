import type { LayoutServerLoad } from './$types';

export const load = (() => {
	return {
		foo: 'bar'
	};
}) satisfies LayoutServerLoad;
