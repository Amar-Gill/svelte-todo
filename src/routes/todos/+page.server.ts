import { db } from '$lib/server';
import { todos } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {
		todos: await db.select().from(todos).orderBy(todos.id)
	};
}) satisfies PageServerLoad;

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		await db.insert(todos).values({
			title: formData.get('title')?.toString(),
			content: formData.get('content')?.toString()
		});
	},
	toggleComplete: async ({ request, url }) => {
		const formData = await request.formData();
		const completed = parseBool(formData.get('completed')?.toString());
		const id = parseInt(url.searchParams.get('id'));
		await db.update(todos).set({ completed }).where(eq(todos.id, id));
	}
} satisfies Actions;

function parseBool(s?: string): boolean {
	return s === 'true' ? true : false;
}
