<script>
	import { writable } from 'svelte/store';
	const progress = writable(0);
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Motion</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">13/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hey there, fellow Svelte enthusiasts! <br />
		Today, we'll be working on using motion in Svelte to create animations!<br />
	</div>
	<br />
	<h1 class="prose text-3xl font-bold">Tweening</h1>
	<br />
	<div class="prose text-lg leading-relaxed">
		Tweening is a computer graphics technique that involves creating smooth transitions between
		different states or values of an object over time.
	</div>
	<br />
	<progress class="w-full rounded-full bg-gray-200 dark:bg-gray-700" value={$progress}></progress>
	<br />
	<br />
	<button class="btn" on:click={() => progress.set(0)}>0%</button>
	<button class="btn" on:click={() => progress.set(0.25)}>25%</button>
	<button class="btn" on:click={() => progress.set(0.5)}>50%</button>
	<button class="btn" on:click={() => progress.set(0.75)}>75%</button>
	<button class="btn" on:click={() => progress.set(1)}>100%</button>
</article>

<style>
	/* styling here */
</style>
