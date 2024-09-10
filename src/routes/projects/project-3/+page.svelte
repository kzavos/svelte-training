<script>
	import Inner from '../../../components/inner.svelte';
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Events / Event modifiers</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">10/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>
	<p>
		In Svelte, events are handled using the <b>on:</b> directive, allowing components to listen for and
		react to user interactions or changes in state.
	</p>

	<div class="container mx-auto max-w-3xl break-words px-4 py-8">
		<p class="text-lg">This button is an imported component</p>
		<br />
		<Inner on:message={handleMessage} />
	</div>

	<div>
		<p class="font-sans text-xl font-bold">Main Function:</p>
		<br />
		<code>handleMessage(event)</code>
		<p>This function is defined to handle the message event.</p>
		<br />
		<code>alert(event.detail.text)</code>
		<p>
			When the message event is triggered, this line displays an alert containing the text property
			of the event's detail object.
		</p>
		<br />
		<p class="font-sans text-xl font-bold">Component:</p>
		<br />
		<code>const dispatch = createEventDispatcher();</code>
		<p>This creates an event dispatcher object named dispatch.</p>
		<br />
		<code>sayHello()</code>
		<p>This function is defined to simulate triggering the message event.</p>
		<br />
		<code>dispatch('message', detail)</code>
		<p>
			This line dispatches a custom event named message with a detail object containing a text
			property. The text property is set to the specified message.
		</p>
		<br />

		<p class="font-sans text-xl font-bold">Key points</p>
		<br />
		<ul class="list-disc">
			<li>
				The <code>createEventDispatcher</code> function is used to create an event dispatcher object.
			</li>
			<li>Custom events are dispatched using the dispatch object.</li>
			<li>The detail property of an event object can be used to pass data.</li>
			<li>Event listeners can be attached to components using the on: directive.</li>
		</ul>
		<br />
	</div>
</article>

<style>
	/* styling here */
	code {
		background-color: darkgray;
		color: black;
	}
</style>
