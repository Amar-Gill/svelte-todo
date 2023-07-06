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

<style>
	form > fieldset {
		display: flex;
		flex-direction: column;
	}
	form > fieldset button {
		text-transform: uppercase;
	}
</style>
