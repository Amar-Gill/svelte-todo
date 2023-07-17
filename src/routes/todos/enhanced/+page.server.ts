import { addTodo, toggleTodoComplete, updateTodo } from '$lib/server/drizzle';
import type { Actions } from './$types';

export const actions = {
	addTodo,
	toggleTodoComplete,
	updateTodo
} satisfies Actions;
