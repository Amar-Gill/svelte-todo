import { db } from '$lib/server';
import { todos } from '$lib/server/schema';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {
		todos: await db.select().from(todos)
	};
}) satisfies PageServerLoad;

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		await db.insert(todos).values({
			title: formData.get('title')?.toString(),
			content: formData.get('content')?.toString()
		});
	}
} satisfies Actions;
