<script>
	function autoFocus(node) {
		node.focus();
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Actions</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">14/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>
			Today, we're diving into actions. Actions are element-level lifecycle functions. They're
			useful for things like interfacing with third-party libraries, lazy-loaded images, tooltips,
			and adding custom event handlers.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">The use directive</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		The <code>use:autoFocus</code> directive applies the <b>autoFocus</b> action to the
		<code>input</code>
		element. This means that when the component is mounted, the autoFocus function will be called with
		the
		<code>input</code> element as its argument, causing it to automatically focus.
	</div>
	<br />
	<input class=" italic" placeholder="You are typing here" type="text" use:autoFocus />
</article>

<style>
	/* styling here */
</style>
