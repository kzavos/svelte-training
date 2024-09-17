<script>
	let html = '<p>Write some text!</p>';
	let pre = `<pre></pre>`;

	let todos = [
		{ done: false, text: `Finish svelte tutorial` },
		{ done: false, text: `Build an app` },
		{ done: false, text: `Go scuba diving` }
	];

	function add() {
		todos = todos.concat({
			done: false,
			text: ``
		});
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;

	// Dimensions

	let w;
	let h;
	let size = 42;
	let text = 'edit this text';
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Advanced bindings</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">14/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>
			<b>Svelte's advanced bindings</b> enable reactive data updates and efficient DOM manipulation,
			making it a powerful tool for building dynamic web applications.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">Contenteditable bindings</div>
	<br />
	<div class="border border-r-2 p-5" bind:innerHTML={html} contenteditable></div>
	<br />
	<code><pre>{html}</pre></code>
	<br />
	<div class="text-lg font-light italic">Note to self:</div>
	<div class="text-lg font-light">
		You can use <code>{pre}</code> tags to showcase html that you have included in the script
		section.
		<br /> By using <code>pre</code> the text preserves both spaces and line breaks.
	</div>
	<br />
	<div class="prose text-3xl font-bold">Each blog bindings</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		You can even bind to properties inside an each block.
	</div>
	<br />
	<div class="centered">
		<h1>To-do list</h1>

		<ul class="todos flex flex-col gap-2">
			<br />

			{#each todos as todo}
				<li class:done={todo.done} class="flex gap-2">
					<input type="checkbox" bind:checked={todo.done} />

					<input type="text" placeholder="What needs to be done?" bind:value={todo.text} />
				</li>
			{/each}
		</ul>
		<br />
		<p>{remaining} remaining</p>
		<br />
		<button class="btn" on:click={add}> Add new </button>

		<button class="btn" on:click={clear}> Clear completed </button>
	</div>

	<br />
	<div class="prose text-3xl font-bold">Dimensions</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Every block-level element has clientWidth, clientHeight, offsetWidth and offsetHeight bindings
		</p>
	</div>
	<br />
	<label>
		<input type="range" bind:value={size} min="10" max="100" />
		font size ({size}px)
	</label>
	<br />
	<br />
	<br />
	<br />
	<br />
	<div bind:clientWidth={w} bind:clientHeight={h} class="text-area">
		<span style="font-size: {size}px" contenteditable>{text}</span>
		<span class="size">{w} x {h}px</span>
	</div>
	<br />
	<div class="prose text-3xl font-bold">this</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Certainly! In Svelte, this is used within class-based components, where it refers to the
			instance of the component. This is somewhat different from the way this works in traditional
			JavaScript classes or functions.
		</p>
	</div>
	<br />
</article>

<style>
	/* styling here */
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.done {
		opacity: 0.4;
	}

	li {
		display: flex;
	}

	input[type='text'] {
		flex: 1;
		padding: 0.5em;
		margin: -0.2em 0;
		border: none;
	}

	.text-area {
		position: relative;
		display: inline-block;
		padding: 0.5rem;
		background: hsla(15, 100%, 50%, 0.1);
		border: 1px solid hsl(15, 100%, 50%);
	}

	.size {
		position: absolute;
		right: -1px;
		bottom: -1.4em;
		line-height: 1;
		background: hsl(15, 100%, 50%);
		color: white;
		padding: 0.2em 0.5em;
		white-space: pre;
	}
</style>
