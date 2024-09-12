<script>
	import { count } from './stores.js';

	function increment() {
		// TODO increment the count
		count.update((n) => n + 1);
	}
</script>

<button class="btn" on:click={increment}> + </button>
