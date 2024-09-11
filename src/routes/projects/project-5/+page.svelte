<script>
	let name = 'Kostas';
	let a = '1';
	let b = '2';
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Bindings</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">11/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hey there, fellow Svelte enthusiasts! <br />
		I will include all parts of a chapter into a single post which makes my life a little bit easier
		while working with the svelte.dev tutorial
		<br />
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Text inputs</div>
	<br />
	<p>
		We are using the <code>bind:value</code> directive which allows us to replace the name value to anything
		that we type on the field.
	</p>
	<br />
	<div class="flex gap-3">
		Name:<br />
		<input bind:value={name} placeholder="Type your name here" />
	</div>
	<br />
	<h1>Hello {name}!</h1>
	<br />

	<div class="prose text-3xl font-bold leading-relaxed">Numeric inputs</div>
	<br />
	<p>
		The same applies with numeric value. Svelte takes care of it for you by using <code
			>bind:value</code
		>.
	</p>
	<br />
	<label class="flex gap-3">
		<input type="number" bind:value={a} min="0" max="10" />
		<input type="range" bind:value={a} min="0" max="10" />
	</label>
	<br />
	<label class="flex gap-3">
		<input type="number" bind:value={b} min="0" max="10" />
		<input type="range" bind:value={b} min="0" max="10" />
	</label>
	<br />
	<p>{a} + {b} = {a + b}</p>
</article>

<style>
	/* styling here */
</style>
