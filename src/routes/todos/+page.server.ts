import type { Actions } from './$types';

export const actions = {
	add: async ({ request }) => {
		console.log(await request.formData());
	}
} satisfies Actions;
