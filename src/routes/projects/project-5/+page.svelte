<script>
	let name = 'Kostas';
	let a = '1';
	let b = '2';
	let yes = false;
	let questions = [
		{
			id: 1,
			text: 'Where did you go to school?'
		},
		{
			id: 2,
			text: "What is your mother's name?"
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

	let selected;

	let answer = '';

	function handleSumbit() {
		alert(`answer questions with ${selected.id} (${selected.text}) with "${answer}"`);
	}

	let scoops = 1;
	let flavours = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<article class="container mx-auto max-w-3xl break-words px-4 py-8">
	<h1 class="mb-4 text-3xl font-bold">Bindings</h1>
	<p class="mb-6 text-gray-500">
		<span class="mr-4">11/09/2024</span>
		by <span class="prose italic">zavos.dev</span>
	</p>

	<div class="prose text-lg leading-relaxed">
		Hey there, fellow Svelte enthusiasts! <br />
		I will include all parts of a chapter into a single post which makes my life a little bit easier
		while working with the svelte.dev tutorial.
		<br />
		<br />

		<p class="font-3xl prose font-bold">What is binding?</p>
		<br />
		<ul class="list-disc">
			<li>
				In Svelte, binding is a mechanism that establishes a two-way connection between a
				component's property and the value of an HTML element attribute or a JavaScript variable.
			</li>
			<li>
				This means that when the value of the property changes, the corresponding HTML element
				attribute or JavaScript variable is automatically updated, and vice versa.
			</li>
			<li>
				Binding is achieved using the bind directive, which is applied to the element attribute or
				JavaScript variable.
			</li>
		</ul>
	</div>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Text inputs</div>
	<br />
	<p>
		We are using the <code>bind:value</code> directive which allows us to replace the name value to anything
		that we type on the field.
	</p>
	<br />
	<div class="flex gap-3">
		Name:<br />
		<input bind:value={name} placeholder="Type your name here" />
	</div>
	<br />
	<h1>Hello {name}!</h1>
	<br />

	<div class="prose text-3xl font-bold leading-relaxed">Numeric inputs</div>
	<br />
	<p>
		The same applies with numeric values. Svelte takes care of it for you by using <code
			>bind:value</code
		>.
	</p>
	<br />
	<label class="flex gap-3">
		<input type="number" bind:value={a} min="0" max="10" />
		<input type="range" bind:value={a} min="0" max="10" />
	</label>
	<br />
	<label class="flex gap-3">
		<input type="number" bind:value={b} min="0" max="10" />
		<input type="range" bind:value={b} min="0" max="10" />
	</label>
	<br />
	<p>{a} + {b} = {a + b}</p>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Checkbox inputs</div>
	<br />

	<p>We are using <code>bind:checked</code> instead of binding to <code>input.value</code></p>
	<br />
	<label class="flex items-center gap-3">
		<input type="checkbox" bind:checked={yes} />
		<p class="inline-block align-middle">Yes! Send me regular email spam</p>
	</label>
	<br />
	{#if yes}
		<p class="animate-bounce">
			Thank you. We will bombard your inbox and sell your personal details.
		</p>
	{:else}
		<p class=" text-red-500">
			WARNING: You must opt in to continue. If you're not paying, you're the product.
		</p>
	{/if}
	<br />
	<button class="btn" disabled={!yes}
		><a href="https://reddit.com/r/sveltejs">Access the main site</a></button
	>

	<br />
	<br />

	<div class="prose text-3xl font-bold leading-relaxed">Select bindings</div>
	<br />

	<p>We can also use <code>bind:value</code> with select elements</p>
	<br />

	<h2 class="text-lg">Insecurity questions:</h2>
	<br />
	<form on:select|preventDefault={handleSumbit}>
		<select
			bind:value={selected}
			on:change={() => {
				answer = ``;
			}}
		>
			{#each questions as question}
				<option value={question}>
					{question.text}
				</option>
			{/each}
		</select>
	</form>
	<br />
	<p>
		Selected question {selected ? selected.id : `[waiting...]`}
	</p>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Group inputs</div>
	<br />

	<p>
		If you have multiple types input, such as <code>type='radio'</code> or
		<code>type="checkbox"</code>, leading to the same value you can use <code>bind:group</code> along
		with the value
	</p>
	<br />
	<h2 class="text-lg">Size</h2>
	<br />
	{#each [1, 2, 3] as number}
		<label class="flex gap-3">
			<input type="radio" name="scoops" value={number} bind:group={scoops} />
			{number}
			{number === 1 ? 'scoop' : 'scoops'}
		</label>
	{/each}

	<br />
	<h2 class="text-lg">Flavours</h2>
	<br />

	{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
		<label class="flex gap-3">
			<input type="checkbox" name="flavours" value={flavour} bind:group={flavours} />

			{flavour}
		</label>
	{/each}

	<br />

	{#if flavours.length === 0}
		<p>Please select at least one flavour</p>
	{:else if flavours.length > scoops}
		<p>Can't order more flavours than scoops!</p>
	{:else}
		<p>
			You orderered {scoops}
			{scoops === 1 ? 'scoop' : 'scoops'}
			of {formatter.format(flavours)}
		</p>
	{/if}
	<br />
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Select multiple</div>
	<br />
	<p>
		You can also use <code>select</code> element which can have the <code>multiple</code> attribute,
		in which case it will populate an array rathen thanselecting a single value
	</p>
	<br />
	<select multiple bind:value={flavours}>
		{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
			<option>{flavour}</option>
		{/each}
		<select>
			<br />
		</select></select
	>
	<br />
	<br />
	<p>Press and hold the control key (or the command key on MacOS) to select multiple options.</p>
	<br />
	<div class="prose text-3xl font-bold leading-relaxed">Text area inputs</div>
</article>

<style>
	/* styling here */
</style>
