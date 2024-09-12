<script>
	import { count } from './stores';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
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
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>Writable stores</b>
	</div>
	<br />
	<h1 class="text-2xl">The count is {$count}</h1>
	<br />
	<Incrementer />
	<Decrementer />
	<Resetter />
	<br />
	<br />
	<div class="prose text-lg leading-relaxed">
		<code>writeable(0)</code>
		<br />
		This is a built-in function in Svelte that creates a writable store with an initial value of 0.
		<br />
		A writable store is a reactive variable that can be <b>subscribed</b> to and <b>updated</b> from
		anywhere in your Svelte component tree.
		<br />
		When the store's value changes, any components that are subscribed to it will
		<u>automatically</u> re-render with the new value.
		<br />
		<br />
		<code>subscribe</code> This method allows you to subscribe to the store's value.
		<br />
		<code>update</code> This method allows you to update the store's value based on its current
		value.
		<br />
		<code>set</code> This method allows you to directly set the store's value to a new value.
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>Auto-subscriptions</b>
	</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		The app in the previous example works, but there's a subtle bug — the store is subscribed to,
		but never unsubscribed. If the component was instantiated and destroyed many times, this would
		result in a memory leak.
		<p>Instead, You can reference a store value by prefixing the store name with <code>$:</code></p>
		<br />
		<p>
			Auto-subscription only works with store variables that are declared (or imported) at the
			top-level scope of a component.
		</p>
	</div>
</article>

<style>
	/* styling here */
</style>
