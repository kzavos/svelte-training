<script>
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let visible = true;
	let visible2 = true;
	let visible3 = true;
	let visible4 = true;
	let visible5 = false;

	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
			}
		};
	}

	function typewriter(node, { speed = 3 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elemenets with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Transitions</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">13/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hello there, fellow Svelte enthusiasts! <br />Today, we'll dive into the world of Svelte
		transitions, exploring how to create smooth and engaging animations in your web applications.<br
		/>
	</div>
	<br />
	<div class="prose text-3xl font-bold">
		<h1>The transition directive</h1>
		<br />
	</div>
	<div class="prose text-lg leading-relaxed">
		We can make more appealing user interfaces by gracefully transitioning elements into and out of
		the DOM. Svelte makes this very easy with the <code>transition</code> directive.
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>
	<br />
	{#if visible}
		<p transition:fade>This text is now visible</p>
	{/if}
	<br />
	<div class="prose text-3xl font-bold">
		<h1>Adding parameters</h1>
		<br />
	</div>
	<div class="prose text-lg leading-relaxed">
		Transition functions can accept parameters. We can replace the <code>fade</code> transition with
		<code>fly</code> and apply it to our paragraph along with some options.
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible2} />
		visible
	</label>
	<br />
	{#if visible2}
		<p transition:fly={{ y: 200, duration: 2000 }}>This text is now visible</p>
	{/if}
	<br />
	<div class="prose text-3xl font-bold">
		<h1>In and Out</h1>
		<br />
	</div>
	<div class="prose text-lg leading-relaxed">
		Instead of the <code>transition</code> directive, an element can have an <code>in</code> or an
		<code>out</code> directive, or both togethe
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible3} />
		visible
	</label>
	<br />
	{#if visible3}
		<p transition in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in and fades out</p>
	{/if}
	<br />
	<div class="prose text-3xl font-bold">Customs CSS animations</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		The <code>svelte/transition</code> module has a handful of built-in transitions, but it's very easy
		to create your own.
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible4} />
		visible
	</label>
	<br />
	{#if visible4}
		<div in:spin={{ duration: 8000 }} out:fade>
			<span>transitions!</span>
		</div>
	{/if}
	<br />
	<div class="prose text-3xl font-bold">Customs JS animations</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		While you should generally use CSS for transitions as much as possible, there are some effects
		that can't be achieved without JavaScript, such as a typewriter effect:
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible5} />
		visible
	</label>

	{#if visible5}
		<p transition:typewriter>The quick brown fox jumps over the lazy dog</p>
	{/if}
</article>

<style>
	/* styling here */
</style>
