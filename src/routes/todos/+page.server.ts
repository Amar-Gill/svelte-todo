import { db } from '$lib/server';
import { todos } from '$lib/server/schema';
import type { Actions } from './$types';

export const actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		await db.insert(todos).values({
			title: formData.get('string')?.toString(),
			content: formData.get('content')?.toString()
		});
	}
} satisfies Actions;
