<script lang="ts">
	import TodoForm from '$lib/components/TodoForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Todos</h1>
<form method="post" action="?/addTodo">
	<fieldset>
		<legend>Add a Todo item</legend>
		<label for="title">Title</label>
		<input type="text" name="title" />
		<label for="content">Content</label>
		<input type="text" name="content" />
		<div>
			<button type="submit">Add</button>
		</div>
	</fieldset>
</form>
<div class="todos">
	{#each data.todos as todo}
		<article>
			<TodoForm {todo} on:toggleTodo={(e) => e.detail.currentTarget.submit()} />
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
