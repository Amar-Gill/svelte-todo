<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import type { AuthenticationInfo } from '@propelauth/javascript';
	import { authClient } from '$lib/propelauth';
	import { writable } from 'svelte/store';

	const auth = writable<AuthenticationInfo | null>(null);

	onMount(async () => {
		auth.set(await authClient.getAuthenticationInfoOrNull(true));
	});

	setContext('auth', auth);
</script>

<nav>
	<a href="/">Home</a>
	<a href="/todos/basic">todos (basic)</a>
	<a href="/todos/enhanced">todos (enhanced)</a>
	<a href="/login">login</a>
</nav>
<div>
	<span>Logged in as: {$auth?.user.email} | {$auth?.user.userId}</span>
</div>

<slot />
