<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello sir thanks for stopping by!'
		});
	}
</script>

<button class="btn btn-outline btn-success" on:click={sayHello}> Greetings! </button>
