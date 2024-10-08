<script>
	// Card example
	import Card from './Card.svelte';

	let slot = `<slot>`;
	let cardsvelte = `
	<div class="card">
		<slot></slot>
	</div>`;
	let cardexample = `
	<Card>
		<span>Patrick BATEMAN</span>
		<span>Vice President</span>
	</Card>`;

	// Second
	let secondcard = `
<div class="card">
	<header>
		<slot name="telephone" />
		<slot name="company" />
	</header>

	<slot />
		
	<footer>
		<slot name="address" />
	</footer>
</div>`;
	let secondapp = `
<Card>
	<span>Patrick BATEMAN</span>
	<span>Vice President</span>

	<span slot="telephone">212 555 6342</span>

	<span slot="company">
		Pierce &amp; Pierce
		<small>Mergers and Aquisitions</small>
	</span>
		
	<span slot="address">358 Exchange Place, New York, N.Y. 10099 fax 212 555 6390 telex 10 4534</span>
</Card>`;

	// Third
	let third = `
<div class="card">
	<header>
		<slot name="telephone">
			<i>(telephone)</i>
		</slot>
		
		<slot name="company">
			<i>(company name)</i>
		</slot>
	</header>

	<slot>
		<i>(name)</i>
	</slot>
		
	<footer>
		<slot name="address">
			<i>(address)</i>
		</slot>
	</footer>
</div>`;

	// forth
	import FilterableList from './FilterableList.svelte';
	import { colors } from './colors.js';

	let forthlist = `
<div class="content">
	{#each data.filter(matches) as item}
		<slot {item}></slot>
	{/each}
</div>`;
	let forth = `
<FilterableList
	data={colors}
	field="name"
	let:item={row}
>`;
	let note = `
As in other contexts, {item} is shorthand for item={item}.
	`;
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Component composition</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">18/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>
			Component composition in Svelte allows developers to build reusable and flexible components
			using slots.
			<br />
			By utilizing slots, you can create a parent component that serves as a wrapper, enabling child
			components to fill specific areas with custom content. This approach promotes a clear separation
			of concerns and enhances maintainability, as you can easily swap or modify the child components
			without altering the parent structure.
			<br />
			Overall, component composition in Svelte fosters a modular architecture, making it easier to manage
			complex applications.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">Slots</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Just like elements can have children so can components.
			<br />Before a component can accept children, though, it needs to know where to put them.
			<br />
			We do this with the <code>{slot}</code> element.
		</p>
	</div>
	<br />
	<!-- CODE EXAMPLES VERY GOOD TEMPLATE -->
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">Card.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{cardsvelte}
		</pre>
	</div>
	<br />
	<Card>
		<span>Patrick BATEMAN</span>
		<span>Vice President</span>
		<span slot="telephone">212 555 6342</span>

		<span slot="company">
			Pierce &amp; Pierce
			<small>Mergers and Aquisitions</small>
		</span>

		<span slot="address"
			>358 Exchange Place, New York, N.Y. 10099 fax 212 555 6390 telex 10 4534</span
		>
	</Card>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{cardexample}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl leading-relaxed">Named slots</div>
	<br />
	<div class="leading relaxed prose text-lg">
		<p>
			The previous example contained a default slot, which renders the direct children of a
			component.
			<br />Sometimes you will need more control over placement. In those cases, we can use named
			slots.
		</p>
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">Card.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{secondcard}
		</pre>
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{secondapp}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl leading-relaxed">Slots fallbacks</div>
	<br />
	<div class="leading relaxed prose text-lg">
		<p>
			A component can specify fallbacks for any slots that are left empty, by putting content inside
			the Slot element.
		</p>
	</div>
	<br />
	<Card />
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">Card.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{third}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl">Slot props</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Components can pass data back to their slotted content via slot props.
	</div>
	<br />
	<div class="colors-container">
		<FilterableList data={colors} field="name" let:item={row}>
			<header slot="header" class="row">
				<span class="color"></span>
				<span class="name">name</span>
				<span class="hex">hex</span>
				<span class="rgb">rgb</span>
				<span class="hsl">hsl</span>
			</header>

			<div class="row">
				<span class="color" style="background-color: {row.hex}"></span>
				<span class="name">{row.name}</span>
				<span class="hex">{row.hex}</span>
				<span class="rgb">{row.rgb}</span>
				<span class="hsl">{row.hsl}</span>
			</div>
		</FilterableList>
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">FilterableList.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{forthlist}
		</pre>
	</div>
	<br />
	{note}
	<br />
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{forth}
		</pre>
	</div>
	<br />
</article>

<style>
	/* styling here */
	.colors-container {
		max-height: 400px; /* Set a max height for scrolling */
		height: 400px;
		overflow-y: auto; /* Enable vertical scrolling */
		border: 1px solid #ccc; /* Optional border for the container */
		border-radius: 8px; /* Rounded corners */
		padding: 1em; /* Padding for spacing */
	}
	.row {
		display: grid;
		align-items: center;
		grid-template-columns: 2em 4fr 3fr;
		gap: 3em;
		padding: 0.1em;
		background: var(--bg-1);
		border-radius: 0.2em;
	}

	header {
		font-weight: bold;
	}

	.row:not(header):hover {
		background: var(--bg-2);
	}

	.color {
		aspect-ratio: 1;
		height: 100%;
		border-radius: 0.1em;
	}

	.rgb,
	.hsl {
		display: none;
	}

	@media (min-width: 40rem) {
		.row {
			grid-template-columns: 2em 4fr 3fr 3fr;
		}

		.rgb {
			display: block;
		}
	}

	@media (min-width: 60rem) {
		.row {
			grid-template-columns: 2em 4fr 3fr 3fr 3fr;
		}

		.hsl {
			display: block;
		}
	}
</style>
