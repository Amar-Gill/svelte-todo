import { addTodo, toggleTodoComplete } from '$lib/server/drizzle';
import type { Actions } from './$types';

export const actions = {
	addTodo,
	toggleTodoComplete
} satisfies Actions;
