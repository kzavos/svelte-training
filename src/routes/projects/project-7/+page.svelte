<script>
	import { count } from './stores';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	count.subscribe((value) => {
		count_value = value;
	});
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Stores</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">12/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hey there, fellow Svelte enthusiasts!<br />
		A store is simply an object with a <code>subscribe</code> method that allows interested parties to
		be notified whenever the store value changes.
	</div>
	<br />
	<h1 class="text-3xl">The count is {count_value}</h1>
	<br />
	<Incrementer />
	<Decrementer />
	<Resetter />
</article>

<style>
	/* styling here */
</style>
