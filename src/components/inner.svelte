<script>
	function sayHello() {
		dispatchEvent('message', {
			text: 'Hello sir thanks for stopping by!'
		});
	}
</script>

<button class="btn btn-outline btn-success" on:click={sayHello}> Greetings! </button>
