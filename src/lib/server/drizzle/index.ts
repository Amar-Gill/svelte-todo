import { dburl } from '$env/static/private';
import type { Action } from '@sveltejs/kit';
import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { todos } from './schema';
import { eq } from 'drizzle-orm';

// for migrations
export const migrationClient = postgres(dburl, { max: 1 });

// for query purposes
const queryClient = postgres(dburl);
export const db: PostgresJsDatabase = drizzle(queryClient);

// todos
export const addTodo: Action = async ({ request }) => {
	const formData = await request.formData();
	await db.insert(todos).values({
		title: formData.get('title')?.toString(),
		content: formData.get('content')?.toString()
	});
};

export const toggleTodoComplete: Action = async ({ request, url }) => {
	const formData = await request.formData();
	const completed = !!formData.get('completed');
	const id = parseInt(url.searchParams.get('id'));
	await db.update(todos).set({ completed }).where(eq(todos.id, id));
};

function parseBool(s?: string): boolean {
	return s === 'true' ? true : false;
}
