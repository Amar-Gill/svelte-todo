import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
	id: serial('id').primaryKey(),
	title: text('title'),
	content: text('content'),
	completed: boolean('completed').default(false),
	userId: text('user_id')
});
