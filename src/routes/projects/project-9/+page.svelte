<script>
	import { fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	// import { typewriter } from 'transition.js';
	import { messages } from './loading-messages.js';

	let visible = true;
	let visible2 = true;
	let visible3 = true;
	let visible4 = true;
	let visible5 = false;
	let visible6 = true;
	let status = 'waiting...';

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});

	let showItems = true;
	let i = -1;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

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
	<br />
	<br />
	<div class="prose text-3xl font-bold">Transition events</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		It can be useful to know when transitions are beginning and ending. Svelte dispatches events
		that you can listen to like any other DOM event:
	</div>
	<br />
	<p>status: {status}</p>
	<br />
	<label>
		<input type="checkbox" bind:checked={visible6} />
		visible
	</label>
	<br />
	{#if visible6}
		<p
			transition:fly={{ y: 200, duration: 2000 }}
			on:introstart={() => (status = 'intro started')}
			on:outrostart={() => (status = 'outro started')}
			on:introend={() => (status = 'intro ended')}
			on:outroend={() => (status = 'outro ended')}
		>
			Flies in and out
		</p>
	{/if}
	<br />
	<br />
	<div class="prose text-3xl font-bold">Global transitions</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Ordinarily, transitions will only play on elements when their direct containing block is added
		or destroyed. In the example here, toggling the visibility of the entire list does not apply
		transitions to individual list elements.
		<br />
		<br />
		Instead, we'd like transitions to not only play when individual items are added and removed with
		the slider but also when we toggle the checkbox.
		<br />
		<br />We can achieve this with a global transition, which plays when any block containing the
		transitions is added or removed:
	</div>
	<br />
	<label>
		<input type="checkbox" bind:checked={showItems} />
		show list
	</label>

	<label>
		<input type="range" bind:value={i} max="10" />
	</label>
	<br />
	{#if showItems}
		{#each items.slice(0, i) as item}
			<div transition:slide|global>
				{item}
			</div>
		{/each}
	{/if}
	<br />
	<p class="font-thin">
		The list is buggy and acts like the typewriter because <code>i</code> is set to -1 and also because
		of intefering functions. That's on purpose.
	</p>
	<br />
	<br />
	<div class="prose text-3xl font-bold">Key blocks</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		Key blocks destroy and recreate their contents when the value of an expression changes. This is
		useful if you want an element to play its transition whenever a value changes instead of only
		when the element enters or leaves the DOM.
		<br />
		<br />
		Here, for example, we'd like to play the typewriter transition from transition.js whenever the loading
		message, i.e. i changes. We achieve that by wrapping the <code>p</code> element in a key block.
		<br />
	</div>
	<br />
	<h1>loading...</h1>
	<br />
	{#key i}
		<p in:typewriter={{ speed: 10 }}>
			{messages[i] || ''}
		</p>
	{/key}
</article>

<style>
	/* styling here */
</style>
