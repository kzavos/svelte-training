<script>
	import { paint } from './gradient.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Lifecycles</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">11/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hello there, fellow Svelte enthusiasts! <br />
		Today, we're exploring <b>lifecycles</b>. Lifecycles are essentially functions that run at
		specific points in a component's existence, allowing you to control its behavior during
		initialization, updates, and deconstruction.<br />
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">onMount</div>
	<div class="prose text-lg leading-relaxed">
		The most common function you will be using to run code at key moments is <b>onMount</b> which
		runs after the component is first rendered to the DOM.
		<br />
		This means it's the perfect time for tasks that rely on the component being fully integrated within
		the web page.
	</div>
	<canvas width="200" height="150"></canvas>
	<br />
	<div class="prose text-lg leading-relaxed">
		You can leverage onMount to execute actions that depend on the component being fully rendered in
		the DOM, such as starting animations or setting up interactive elements.
	</div>
</article>

<style>
	/* styling here */
	canvas {
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>
