import { db } from '$lib/server/drizzle';
import { todos } from '$lib/server/drizzle/schema';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		todos: await db.select().from(todos).orderBy(todos.id)
	};
}) satisfies LayoutServerLoad;
