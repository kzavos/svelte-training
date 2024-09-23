<script>
	import Folder from './Folder.svelte';
	import { files } from './data.js';

	let svelteself = `<svelte:self>`;
	// svelte:component
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	let selected = options[0];

	let sveltecomponent = `<svelte:component>`;
	let componentcode = `
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component} />`;

	// <svelte:element>
	let svelteelement = `<svelte:element>`;
	const options2 = ['h1', 'h2', 'h3', 'p', 'marquee'];
	let selected2 = options2[0];
	let elementhtml = `
<svelte:element this={selected2}>
	<p class="text-2xl font-semibold">You have successfully selected 
		{selected2}.
	</p>
</svelte:element>`;
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
		<p>
			Svelte introduces unique elements that enhance component-based development. <br />These
			special elements provide powerful mechanisms for manipulating component context and
			dynamically rendering other components, offering greater control and flexibility in your
			Svelte applications.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">{svelteself}</div>
	<br />

	<Folder name="Home" {files} expanded />
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">{sveltecomponent}</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		A component can change its type altogether with <code>{sveltecomponent}</code>
	</div>
	<br />
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>{option.color}</option>
		{/each}
	</select>
	<br />
	<br />

	<svelte:component this={selected.component} />
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{componentcode}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl font-bold">{svelteelement}</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		As with the previous exercise, we can replace a long sequence of if blocks with a single dynamic
		element
	</div>
	<br />
	<select bind:value={selected2}>
		{#each options2 as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<br />
	<!-- {#if selected2 === 'h1'}
		<p>test</p>
	{:else}
		<p>to-do</p>
	{/if} -->
	<br />
	<svelte:element this={selected2}>
		<p class="text-2xl font-semibold text-cyan-400">You have successfully selected {selected2}.</p>
	</svelte:element>
	<br />
	<br />	
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{elementhtml}
		</pre>
	</div>
</article>

<!-- CODE EXAMPLES VERY GOOD TEMPLATE -->

<style>
	/* styling here */
</style>
