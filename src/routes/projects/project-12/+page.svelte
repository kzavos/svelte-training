<script>
	// Card example
	let flipped = false;
	let html1 = `
    <button
	class="card"
	class:flipped={flipped}
	on:click={() => flipped = !flipped}>`;
	let html2 = `
    <button
	class="card"
	class:flipped
	on:click={() => flipped = !flipped}>`;
	let html3 = `
    <button
	class="card"
	style:transform={flipped ? 'rotateY(0)' : ''}
	style:--bg-1="palegoldenrod"
	style:--bg-2="black"
	style:--bg-3="goldenrod"
	on:click={() => flipped = !flipped}>`;

	// Box example
	import Box from './Box.svelte';
</script>

<article class=" mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Classes and styles</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">18/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>
			In Svelte, you can dynamically apply classes and styles to elements using bindings and
			reactive statements, making it easy to create responsive and interactive designs.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">The class directive</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Like any other attribute, you can specify classes with a JavaScript attribute.
	</div>
	<br />

	<div class="container">
		Flip the card
		<button
			class="card bg-base-200"
			class:flipped
			on:click={() => (flipped = !flipped)}
			style:transform={flipped ? 'rotateY(0)' : ''}
			style:--bg-1="palegoldenrod"
			style:--bg-2="black"
			style:--bg-3="goldenrod"
		>
			<div class="front">
				<span class="symbol">♠</span>
			</div>
			<div class="back">
				<div class="pattern"></div>
			</div>
		</button>
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">
			This directive means 'add the <code>flipped</code> class whenever <code>flipped</code> is truthy'.
		</h2>
		<pre><code>{html1}</code></pre>
	</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Often, the name of the class will be the same as the name of the value it depends on.
			<br />In those cases we can use a shorthand form:
		</p>
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<pre>{html2}</pre>
	</div>
	<br />
	<div class="prose text-3xl font-bold">The style directive</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		As with class, you can write your inline style attributes literally, because Svelte is really
		just HTML with fancy bits
	</div>
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">
			When you have a lot of styles, it can start to look a bit wacky. We can tidy things up by
			using the <code>style:</code> directive
		</h2>
		<pre><code>{html3}</code></pre>
	</div>
	<br />
	<div class="prose text-3xl font-bold">Component styles</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Often, you need to influence the styles inside a child component. Perhaps we want to make these
		boxes red, green and blue.
	</div>
	<br />

	<div class="boxes">
		<Box />
		<Box />
		<Box />
	</div>

	<div class="prose text-lg">
		Inside the child's component code we change <code>background-color</code> to
		<code>var(--color, #ddd);</code> so it can be determined by a Customs CSS property.
	</div>
</article>

<style>
	/* styling here */
	.container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: 100%;
		align-items: center;
		justify-content: center;
		perspective: 100vh;
	}

	.card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		font-size: min(1vh, 0.25rem);
		height: 80em;
		/* background: var(--bg-1); */
		/* background: grey; */
		border-radius: 2em;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
	}

	.card.flipped {
		transform: rotateY(0);
	}

	.front,
	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

	.front {
		background:
			url(./svelte-logo.svg) no-repeat 5em 5em,
			url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
		background-size:
			8em 8em,
			8em 8em;
	}

	.back {
		transform: rotateY(180deg);
	}

	.symbol {
		font-size: 30em;
		color: var(--fg-1);
	}

	.pattern {
		width: 100%;
		height: 100%;
		/* background-color: var(--bg-2); */
		/* background-color: white; */
		/* pattern from https://projects.verou.me/css3patterns/#marrakesh */
		background-image: radial-gradient(var(--bg-3) 0.9em, transparent 1em),
			repeating-radial-gradient(
				var(--bg-3) 0,
				var(--bg-3) 0.4em,
				transparent 0.5em,
				transparent 2em,
				var(--bg-3) 2.1em,
				var(--bg-3) 2.5em,
				transparent 2.6em,
				transparent 5em
			);
		background-size:
			3em 3em,
			9em 9em;
		background-position: 0 0;
		border-radius: 1em;
	}
</style>
