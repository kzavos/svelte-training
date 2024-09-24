<script>
	import Folder from './Folder.svelte';
	import { files } from './data.js';
	import Title from '../../../components/blog-elements/Title.svelte';
	import Code from '../../../components/blog-elements/Code.svelte';
	import Body from '../../../components/blog-elements/Body.svelte';

	let svelteself = `<svelte:self>`;
	// svelte:component
	import RedThing from './RedThing.svelte';
	import GreenThing from './GreenThing.svelte';
	import BlueThing from './BlueThing.svelte';

	const options = [
		{ color: 'red', component: RedThing },
		{ color: 'green', component: GreenThing },
		{ color: 'blue', component: BlueThing }
	];

	let selected = options[0];

	let sveltecomponent = `<svelte:component>`;
	let componentcode = `
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component} />`;

	// <svelte:element>
	let svelteelement = `<svelte:element>`;
	const options2 = ['h1', 'h2', 'h3', 'p', 'marquee'];
	let selected2 = options2[0];
	let elementhtml = `
<svelte:element this={selected2}>
	<p class="text-2xl font-semibold">You have successfully selected 
		{selected2}.
	</p>
</svelte:element>`;

	// <svelte:window>

	let sveltewindow = `<svelte:window>`;
	let key;
	let keyCode;

	function handleKeyDown(event) {
		key = event.key;
		keyCode = event.keyCode;
	}

	let windowCode = `<svelte:window on:keydown={handleKeyDown} />`;
	// svelte:window bindings
	let y;
	let bindCode = `
<svelte:window bind:scrollY={y} on:keydown={handleKeyDown} />
	`;

	// svelte:body
	import Kitten from './kitten.png';
	let hereKitty = false;
	let catHtml = `
<svelte:body on:mouseenter={() => (hereKitty = true)} on:mouseleave={() => (hereKitty = false)} />
	`;

	// svelte:document
	let selection = ' ';

	const handleSelectionChange = (e) => (selection = document.getSelection());

	let selectionHtml = `
<svelte:document on:selectionchange={handleSelectionChange} />
	`;

	// svelte:head
	let title = 'Svelte tutorial';
	let inputText = '';
	function updateTitle(newTitle) {
		title = newTitle;
	}
	let headHtml = `
<div class="flex gap-2">
	<input
	class="input bg-slate-900"
	type="text"
	bind:value={inputText}
	placeholder="Type a new title here"	/>
	
	<button class="btn" on:click={updateTitle(inputText)}>Update title</button>
</div>

<svelte:head>
	<title>{title}</title>
</svelte:head>`;

	// svelte:options
	import Todo from './Todo.svelte';

	let todos = [
		{ id: 1, done: true, text: 'wash the car' },
		{ id: 2, done: false, text: 'take the dog for a walk' },
		{ id: 3, done: false, text: 'mow the lawn' }
	];

	function toggle(toggled) {
		todos = todos.map((todo) => {
			if (todo === toggled) {
				// return a new object
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// return the same object
			return todo;
		});
	}

	// svelte:fragment
	let notLoggedIn = true;
	function login() {
		notLoggedIn === false;
	}
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Special elements</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">21/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		<p>Hello there, fellow Svelte enthusiasts!</p>
		<br />
		<p>
			Svelte introduces unique elements that enhance component-based development. <br />These
			special elements provide powerful mechanisms for manipulating component context and
			dynamically rendering other components, offering greater control and flexibility in your
			Svelte applications.
		</p>
	</div>
	<br />
	<div class="prose text-3xl font-bold">{svelteself}</div>
	<br />

	<Folder name="Home" {files} expanded />
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">{sveltecomponent}</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		A component can change its type altogether with <code>{sveltecomponent}</code>
	</div>
	<br />
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>{option.color}</option>
		{/each}
	</select>
	<br />
	<br />

	<svelte:component this={selected.component} />
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{componentcode}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl font-bold">{svelteelement}</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		As with the previous exercise, we can replace a long sequence of if blocks with a single dynamic
		element
	</div>
	<br />
	<select bind:value={selected2}>
		{#each options2 as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
	<br />
	<!-- {#if selected2 === 'h1'}
		<p>test</p>
	{:else}
		<p>to-do</p>
	{/if} -->
	<br />
	<svelte:element this={selected2}>
		<p class="text-2xl font-semibold text-cyan-400">You have successfully selected {selected2}.</p>
	</svelte:element>
	<br />
	<br />
	<div class="rounded-lg bg-base-200 p-6 shadow-lg">
		<h2 class="mb-4 text-lg font-semibold">+page.svelte</h2>
		<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
			{elementhtml}
		</pre>
	</div>
	<br />
	<div class="prose text-3xl font-bold">{sveltewindow}</div>
	<br />
	<div class="prose text-lg leading-relaxed">
		<p>
			Just as you can add event listeners to any DOM element, you can add event listeners to the <code
				>window</code
			>
			object with {sveltewindow}.
		</p>
	</div>
	<br />
	<div class="test" style="text-align: center">
		{#if key}
			<kbd>{key === ' ' ? 'Space' : key}</kbd>
			<p>{keyCode}</p>
		{:else}
			<p>Focus this window and press any key</p>
		{/if}
	</div>
	<br />
	<Code file="+page.svelte" code={windowCode} />
	<br />
	<Title title="{sveltewindow} bindings" />
	<br />
	<Body
		text="svelte:window bindings provide a convenient way to react to events that occur on the browser window. This includes events like resizing, scrolling, or changes in focus. "
	/>
	<!-- I am not actually fond of this approach because I prefer being able to bold certain words or add code elements wherever I please -->
	<br />
	<div>You have scrolled <b>{y} pixels</b></div>
	<br />
	<Code file="+page.svelte" code={bindCode} />
	<br />
	<Title title="svelte:body" />
	<br />
	<div class="prose text-lg leading-relaxed">
		Similar to <b>svelte:window</b>, the <b>svelte:body</b> element allows you to listen for events
		that fire on document.body. This is useful with the <b>mouseenter</b> and <b>mouseleave</b> events,
		which don't fire on window.
	</div>
	<img class:curious={hereKitty} alt="Kitten wants to know what's going on" src={Kitten} />
	<br />
	<i>Move your cursor away from the site</i>
	<br />
	<br />
	<Code file="+page.svelte" code={catHtml} />
	<br />
	<Title title="svelte:document" />
	<br />
	<div class="prose text-lg leading-relaxed">
		The <b>svelte:document</b> element allows you to listen for events that fire on document. This
		is useful with events like <b>selectionchange</b>, which doesn't fire on window.
	</div>
	<br />
	<h1>Highlight this text in order to select it below</h1>
	<p>Selection: {selection}</p>
	<br />
	<Code file="+page.svelte" code={selectionHtml} />
	<br />
	<Title title="svelte:head" />
	<br />
	<div class="prose text-lg leading-relaxed">
		The <b>svelte:head</b> element allows you to insert elements inside the <b>head</b> of your
		document. This is useful for things like <b>title</b> and <b>meta</b> tags, which are critical for
		good SEO.
	</div>
	<br />
	<div class="flex gap-2">
		<input
			class="input bg-slate-900"
			type="text"
			bind:value={inputText}
			placeholder="Type a new title here"
		/>
		<button class="btn" on:click={updateTitle(inputText)}>Update title</button>
	</div>
	<br />
	<Code file="+page.svelte" code={headHtml} />
	<br />
	<Title title="svelte:options" />
	<br />
	<div class="prose text-lg leading-relaxed">
		The <b>svelte:options</b> element allows you to specify compiler options such as
		<b>immutable</b> and accessors.
	</div>
	<br />
	<div class="centered">
		<h1>todos</h1>

		<ul class="todos">
			{#each todos as todo (todo.id)}
				<Todo {todo} on:change={() => toggle(todo)} />
			{/each}
		</ul>
	</div>

	<br />
	<Title title="svelte:fragment" />
	<br />
	<div class="prose text-lg leading-relaxed">
		svelte:fragment is a powerful tool in Svelte for grouping elements together without introducing
		an additional element in the DOM. This can improve performance and readability, especially when
		dealing with complex components or conditional rendering.
	</div>
	<br />

</article>

<svelte:window bind:scrollY={y} on:keydown={handleKeyDown} />
<svelte:body on:mouseenter={() => (hereKitty = true)} on:mouseleave={() => (hereKitty = false)} />
<svelte:document on:selectionchange={handleSelectionChange} />
<svelte:head>
	<title>{title}</title>
</svelte:head>

<style>
	/* styling here */
	.test {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	kbd {
		border-radius: 4px;
		font-size: 3em;
		padding: 0.2em 0.5em;
		background-color: #eeeeee;
		border-top: 5px solid #f9f9f9;
		border-left: 5px solid #f9f9f9;
		border-right: 5px solid #aaaaaa;
		border-bottom: 5px solid #aaaaaa;
		color: #555;
	}

	img {
		position: relative;
		left: 0;
		bottom: -60px;
		transform: translate(-3000%, 0) rotate(-15deg);
		transform-origin: 100% 100%;
		transition: transform 1s;
		height: 300px;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}
	/* 
	:global(body) {
		overflow: hidden;
	} */

	.centered {
		max-width: 20em;
		margin: 0 auto;
	}
</style>
