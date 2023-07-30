<script lang="ts">
	import { applyAction, deserialize, enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import { getContext } from 'svelte';
	import type { AuthenticationInfo } from '@propelauth/javascript';
	import type { Writable } from 'svelte/store';

	const auth = getContext<Writable<AuthenticationInfo | null>>('auth');

	export let data: PageData;

	async function handleTodoToggle(
		event: Event & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		const data = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});

		const result: ActionResult = deserialize(await response.text());

		if (result.type === 'success') {
			// rerun all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<h1>Todos</h1>
<form method="post" action="?/addTodo" use:enhance>
	<fieldset>
		<legend>Add a Todo item</legend>
		<label for="title">Title</label>
		<input type="text" name="title" />
		<label for="content">Content</label>
		<input type="text" name="content" />
		<input type="hidden" name="userId" value={$auth?.user.userId} />
		<div>
			<button type="submit">Add</button>
		</div>
	</fieldset>
</form>
<div class="todos">
	{#each data.todos as todo}
		<article>
			<TodoForm {todo} on:toggleTodo={(e) => handleTodoToggle(e.detail)} />
		</article>
	{/each}
</div>

<style>
	form > fieldset {
		display: flex;
		flex-direction: column;
	}
	form > fieldset button {
		text-transform: uppercase;
	}
	.todos > article {
		background-color: lightsteelblue;
	}
</style>
