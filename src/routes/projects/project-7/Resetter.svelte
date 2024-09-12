<script>
	import { count } from './stores.js';

	function reset() {
		// TODO reset the count
		count.set(0);
	}
</script>

<button class="btn" on:click={reset}> reset </button>
