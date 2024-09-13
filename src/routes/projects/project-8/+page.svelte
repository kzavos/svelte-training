<script>
	// Tween

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	// Spring
	import { writable } from 'svelte/store';

	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let size = spring(10);

	const containerRef = writable(null);
	const containerWidth = 400; // Adjust to your desired container width
	const containerHeight = 300; // Adjust to your desired container height

	function handleMouseMove(event) {
		const containerRect = containerRef.get().getBoundingClientRect();
		const { clientX, clientY } = event;
		const newX = Math.max(0, Math.min(clientX - containerRect.left, containerWidth - size.get()));
		const newY = Math.max(0, Math.min(clientY - containerRect.top, containerHeight - size.get()));
		coords.set({ x: newX, y: newY });
	}
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
	<br />
	<br />
	<h1 class="prose text-3xl font-bold">Springs</h1>
	<br />
	<div class="prose text-lg leading-relaxed">
		The spring function is an alternative to tweened that often works better for values that are
		frequently changing.
	</div>
	<br />
	<div bind:this={$containerRef} class="spring-container">
		<svg
			width={containerWidth}
			height={containerHeight}
			on:mousemove={handleMouseMove}
			on:mousedown={() => size.set(30)}
			on:mouseup={() => size.set(10)}
			role="presentation"
		>
			<circle cx={$coords.x} cy={$coords.y} r={$size} />
		</svg>
	</div>
</article>

<style>
	.spring-container {
		width: 150px;
		height: 150px;
	}
</style>
