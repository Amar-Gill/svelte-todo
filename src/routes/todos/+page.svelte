<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function handleToggleComplete(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const { checked } = e.currentTarget;
		e.currentTarget.value = checked.toString();
		e.currentTarget.form?.submit();
	}
</script>

<h1>Todos</h1>
<form method="post" action="?/add">
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
			<p><b>{todo.title}</b></p>
			<p>{todo.content}</p>
			<form method="post" action={`?/toggleComplete&id=${todo.id}`}>
				<label for="completed"
					>Completed:
					<input
						name="completed"
						bind:checked={todo.completed}
						type="checkbox"
						on:input={(e) => handleToggleComplete(e)}
					/></label
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
