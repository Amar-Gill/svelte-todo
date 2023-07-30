<script lang="ts">
	import { authClient } from '$lib/propelauth';
</script>

<div>
	<button on:click={() => authClient.redirectToLoginPage()}>Log In</button>
	<button on:click={() => authClient.redirectToSignupPage()}>Sign Up</button>
	<button on:click={() => authClient.logout(true)}>Log Out</button>
</div>
