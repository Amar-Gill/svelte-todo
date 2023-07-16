<script lang="ts">
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
			<p><b>{todo.id}. {todo.title}</b></p>
			<p>{todo.content}</p>
			<form
				method="post"
				on:change={(e) => e.currentTarget.submit()}
				action={`?/toggleTodoComplete&id=${todo.id}`}
			>
				<label for="completed"
					>Completed:
					<input name="completed" checked={todo.completed} type="checkbox" /></label
				>
			</form>
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
