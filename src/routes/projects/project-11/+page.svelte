<script>
	let html = '<p>Write some text!</p>';
	let pre = `<pre></pre>`;
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
	<div bind:innerHTML={html} contenteditable></div>
	<br />
	<code><pre>{html}</pre></code>
	<br />
	<div class="text-lg font-light italic">Note to self:</div>
	<div class="text-lg font-light">
		You can use <code>{pre}</code> tags to showcase html that you have included in the script
		section.
		<br /> By using <code>pre</code> the text preserves both spaces and line breaks.
	</div>
</article>

<style>
	/* styling here */
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>
