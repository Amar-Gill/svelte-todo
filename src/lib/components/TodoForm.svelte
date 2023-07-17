<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	export let todo: {
		id: number;
		title: string | null;
		content: string | null;
		completed: boolean | null;
	};

	const dispatch = createEventDispatcher<{
		change: Event & { currentTarget: EventTarget & HTMLFormElement };
	}>();
</script>

<form
	method="post"
	action="?/updateTodo"
	use:enhance={() => {
		return async ({ update }) => {
			await update({ reset: false });
		};
	}}
>
	<label
		>{todo.id}. title:
		<input value={todo.title} type="text" name="title" /></label
	>
	<label> <input type="text" name="content" value={todo.content} /></label>
	<input type="hidden" name="id" value={todo.id} />
	<button type="submit">Update</button>
</form>

<form method="post" action="?/toggleTodoComplete" on:change={(e) => dispatch('change', e)}>
	<label for="completed"
		>Completed:
		<input name="completed" checked={todo.completed} type="checkbox" /></label
	>
	<input type="hidden" name="id" value={todo.id} />
</form>
