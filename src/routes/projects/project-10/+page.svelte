<script>
	function autoFocus(node) {
		node.focus();
	}

	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	let content = 'This text transfers!';

	function tooltip(node, options) {
		const tooltip = tippy(node, options);

		return {
			update(options) {
				tooltip.setProps(options);
			},
			destroy() {
				tooltip.destroy();
			}
		};
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
	<br />
	<br />
	<div class="prose text-3xl font-bold">Adding parameters</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Like transitions and animations, an action can take an argument, which the action function will
		be called with alongside the element it belongs to.
	</div>
	<br />
	<div class="flex gap-2">
		<input class=" text-center" bind:value={content} />
		<br />
		<button class="btn" use:tooltip={{ content, theme: 'material' }}> Hover me </button>
	</div>
</article>

<style>
	/* styling here */
</style>
