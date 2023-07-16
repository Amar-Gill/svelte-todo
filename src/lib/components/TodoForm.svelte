<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let todo: { id: number; completed: boolean | null };

	const dispatch = createEventDispatcher<{
		change: Event & { currentTarget: EventTarget & HTMLFormElement };
	}>();
</script>

<form
	method="post"
	action={`?/toggleTodoComplete&id=${todo.id}`}
	on:change={(e) => dispatch('change', e)}
>
	<label for="completed"
		>Completed:
		<input name="completed" checked={todo.completed} type="checkbox" /></label
	>
</form>
