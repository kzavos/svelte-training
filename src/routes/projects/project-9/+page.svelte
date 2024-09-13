<script>
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	let visible = true;
	let visible2 = true;
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Transitions</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">13/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hello there, fellow Svelte enthusiasts! <br />oday, we'll dive into the world of Svelte
		transitions, exploring how to create smooth and engaging animations in your web applications.<br
		/>
	</div>
	<br />
	<div class="prose text-3xl font-bold">
		<h1>The transition directive</h1>
		<br />
	</div>
	<div class="prose text-lg leading-relaxed">
		We can make more appealing user interfaces by gracefully transitioning elements into and out of
		the DOM. Svelte makes this very easy with the <code>transition</code> directive.
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>
	<br />
	{#if visible}
		<p transition:fade>This text is now visible</p>
	{/if}
	<br />
	<div class="prose text-3xl font-bold">
		<h1>Adding parameters</h1>
		<br />
	</div>
	<div class="prose text-lg leading-relaxed">
		Transition functions can accept parameters. We can replace the <code>fade</code> transition with
		<code>fly</code> and apply it to our paragraph along with some options.
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible2} />
		visible
	</label>
	<br />
	{#if visible2}
		<p transition:fly={{ y: 200, duration: 2000 }}>This text is now visible</p>
	{/if}
	<br />
</article>

<style>
	/* styling here */
</style>
