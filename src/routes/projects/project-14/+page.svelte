<script>
	import Folder from './Folder.svelte';
	import { files } from './data.js';

	// svelte:component
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';

	const options = [
		{ color: 'red' , component: RedThing },
		{ color: 'green' , component: GreenThing },
		{ color: 'blue' , component: BlueThing }
	];

	let selected = options[0];

	let sveltecomponent = `<svelte:component>`;
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Special elements</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">21/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>Svelte provides a variety of built-in elements that we can use.</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">svelte:self</div>
	<br />

	<Folder name="Home" {files} expanded />

	<div class="prose text-3xl leading-relaxed">svelte:component</div>
	<br />
	<div class="prose text-lg leading-relaxed">A component can change its type altogether with.</div>
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>{option.color}</option>
		{/each}
	</select>

	{#if selected.color === 'red'}
		<RedThing />
	{:else}
		<p>TODO others</p>
	{/if}
</article>

<!-- CODE EXAMPLES VERY GOOD TEMPLATE -->
<!-- <div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">Your HTML Code</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
		  &lt;div class="example"&gt;
			&lt;p&gt;This is an example paragraph.&lt;/p&gt;
		  &lt;/div&gt;
		</pre>
	</div> -->

<style>
	/* styling here */
</style>
