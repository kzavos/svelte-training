<script>
	import Outer from '../../../components/outer.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Events forwarding</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">11/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		We are importing our previous inner component into a new component and forwarding events using
		the shorthand on:message method.
	</div>
	<br />
	<Outer on:message={handleMessage} />

	<br />
	<div class="container mx-auto max-w-3xl break-words px-4 py-8">
		<p class="text-large">
			Since this is a new page, we are recreating the handleMessage(event) function in order to
			listen for event changes on the previous compoent. <br /> We are "listening" for events.<br />
			If an event happens, we then alert the text content of detail. <br />
			<code>alert(event.detail.text);</code>
		</p>
	</div>
	' '
	<div class="prose text-lg leading-relaxed">
		Event forwarding also works for DOM events too. If we have a component that includes a button,
		and we want to get notified of click we just need to forward click events on the button element
		using the <code>on:click</code> shorthand.
	</div>
	'
</article>

<style>
	/* styling here */
</style>
