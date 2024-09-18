<script>
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
			using slots. By utilizing slots, you can create a parent component that serves as a wrapper,
			enabling child components to fill specific areas with custom content. This approach promotes a
			clear separation of concerns and enhances maintainability, as you can easily swap or modify
			the child components without altering the parent structure. Overall, component composition in
			Svelte fosters a modular architecture, making it easier to manage complex applications.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">Slots</div>
	<br />

	<!-- CODE EXAMPLES VERY GOOD TEMPLATE -->
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">Your HTML Code</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
		  &lt;div class="example"&gt;
			&lt;p&gt;This is an example paragraph.&lt;/p&gt;
		  &lt;/div&gt;
		</pre>
	</div>
</article>

<style>
	/* styling here */
</style>
