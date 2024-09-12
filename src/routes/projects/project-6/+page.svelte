<script>
	import { paint } from './gradient.js';
	import { beforeUpdate, afterUpdate, onMount } from 'svelte';

	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	let inputText = '';
	let validationMessage = '';
	let message = '';
	let inputChanged = false;

	// Function to validate input text
	function validateText(text) {
		return text.length > 5 ? 'Valid' : 'Too short';
	}

	// beforeUpdate: runs before the DOM updates
	beforeUpdate(() => {
		if (inputChanged) {
			message = 'beforeUpdate: Input is about to be validated';
		}
	});

	// afterUpdate: runs after the DOM updates
	afterUpdate(() => {
		if (inputChanged) {
			setTimeout(() => {
				validationMessage = validateText(inputText);
				message = `afterUpdate: Input has been validated. Result: ${validationMessage}`;
				inputChanged = false;
			}, 500); // Add a delay to simulate processing and allow time for viewing
		}
	});

	// Track changes in the input
	function handleInput(event) {
		inputText = event.target.value;
		inputChanged = true;
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Lifecycles</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">12/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hello there, fellow Svelte enthusiasts! <br />
		Today, we're exploring <b>lifecycles</b>. Lifecycles are essentially functions that run at
		specific points in a component's existence, allowing you to control its behavior during
		initialization, updates, and deconstruction.<br />
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">onMount</div>
	<div class="prose text-lg leading-relaxed">
		The most common function you will be using to run code at key moments is <b>onMount</b> which
		runs after the component is first rendered to the DOM.
		<br />
	</div>
	<canvas width="200" height="150"></canvas>
	<br />
	<div class="prose text-lg leading-relaxed">
		You can leverage <b>onMount</b> to execute actions that depend on the component being fully rendered
		in the DOM, such as starting animations or setting up interactive elements.
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">
		<b>beforeUpdate</b> and <b>afterUpdate</b>
	</div>
	<div class="prose text-lg leading-relaxed">
		<p>
			The script function schedules work to happen immediately before the DOM is updated.
			afterUpdate is its counterpart, used for running code once the DOM is in sync with your data.
		</p>
		<br />
		<p>
			Together, they're useful for doing things imperatively that are difficult to achieve in a
			purely state-driven way, like updating the scroll position of an element.
		</p>
	</div>
	<br />
	<div class="input-box">
		<input
			type="text"
			value={inputText}
			on:input={handleInput}
			placeholder="Enter at least 6 characters"
		/>

		<p>{validationMessage}</p>
		<br />
		<p>{message}</p>
	</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Before the DOM updates, the beforeUpdate message appears: "Input is about to be validated."
		</p>
		<p>
			After a 500ms delay, the afterUpdate message appears: "Input has been validated," along with
			the validation result.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">tick</div>
	The<code>tick</code> function is unlike other lifecycle functions in that you can call it any time,
	not just when the component first initialises. It returns a promise that resolves as soon as any pending
	state changes have been applied to the DOM (or immediately, if there are no pending state changes).
</article>

<style>
	/* styling here */
	canvas {
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
	.input-box {
		text-align: center;
		margin-top: 20px;
	}

	input {
		padding: 10px;
		font-size: 16px;
		width: 250px;
		margin-bottom: 20px;
	}
</style>
