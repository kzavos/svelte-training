<script>
	import Inner from '../../../components/inner.svelte';
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Events / Event modifiers</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">10/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>
	<p>Interesting concepts</p>

	<div class="container mx-auto max-w-3xl break-words px-4 py-8">
		<p class="text-lg">
			You can only click this button once by using
			<br />
			<code>on:click|once={() => alert('clicked')}</code>
		</p>
		<br />
		<Inner />
	</div>
</article>

<style>
	/* styling here */
</style>
