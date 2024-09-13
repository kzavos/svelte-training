<script>
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
	import { count, count2, time, elapsed } from './stores';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	import { name, greeting } from './stores';
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
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>Readable stores</b>
	</div>
	<br />

	<br />
	<div class="prose text-lg leading-relaxed">
		Not all stores should be writable by whoever has a reference to them. For example, you might
		have a store representing the mouse position or the user's geolocation, and it doesn't make
		sense to be able to set those values from 'outside'. For those cases, we have readable stores.
	</div>
	<br />
	<div class="prose text-3xl leading-relaxed">
		The time is {formatter.format($time)}
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>Derived stores</b>
	</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		You can create a store whose value is based on the value of one or more other stores with
		<code>derived</code>. Building on our previous example, we can create a store that derives the
		time the page has been open
		<p></p>
		<br />
		<p class="prose text-2xl leading-relaxed">
			This page has been open for
			{$elapsed}
			{$elapsed === 1 ? 'second' : 'seconds'}
		</p>
	</div>

	<br />
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>Custom stores</b>
	</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		As long as an object correctly implements the <code>subscribe</code> method, it's a store.
		Beyond that, anything goes. It's very easy, therefore, to create custom stores with
		domain-specific logic.
		<p>
			For example, the count store from our earlier example could include increment, decrement and
			reset methods and avoid exposing set and update:
		</p>
		<br />
		<p class="prose text-2xl">The count is {$count2}</p>
		<br />
		<button class="btn" on:click={count2.increment}>+</button>
		<button class="btn" on:click={count2.decrement}>-</button>
		<button class="btn" on:click={count2.reset}>reset</button>
		<br />
		<br />
		<code>on:click={count2.increment}</code>
		<br />
		<code>on:click={count2.decrement}</code>
		<br />
		<code>on:click={count2.reset}</code>
		<br />

		<br />
		<div class="prose text-3xl font-bold leading-relaxed">
			<b>Store bindings</b>
		</div>
		<br />
		<div class="prose text-lg leading-relaxed">
			If a store is writable — i.e. it has a <code>set</code> method — you can bind to its value, just
			as you can bind to local component state.
		</div>
	</div>
	<br />
	<h1 class="prose text-3xl">{$greeting}</h1>
	<br />
	<input bind:value={$name} />
	<button class="btn" on:click={() => ($name += `!`)}>Add an exclamation mark!</button>
</article>

<style>
	/* styling here */
</style>
