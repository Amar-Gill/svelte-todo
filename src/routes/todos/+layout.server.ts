import { db } from '$lib/server';
import { todos } from '$lib/server/schema';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		todos: await db.select().from(todos).orderBy(todos.id)
	};
}) satisfies LayoutServerLoad;
