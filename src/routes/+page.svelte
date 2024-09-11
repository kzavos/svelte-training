<script>
	import Card from '../components/card.svelte';

	// Example data
	const cards = [
		{
			imageSrc: './images/project-images/welcome.jpg',
			description: 'Welcome',
			link: '/projects/project-1'
		},
		{
			imageSrc: './images/project-images/project-1.jpg',
			description: 'Events / Event modifiers',
			link: '/projects/project-2'
		},
		{
			imageSrc: './images/project-images/project-3.png',
			description: 'Events / Component events',
			link: '/projects/project-3'
		},
		{
			imageSrc: './images/project-images/project-4.png',
			description: 'Event forwarding',
			link: '/projects/project-4'
		},
		{
			imageSrc: './images/project-images/project-5.png',
			description: 'Bindings',
			link: '/projects/project-5'
		}
	];
</script>

<div class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each cards as { imageSrc, description, link }}
		<Card {imageSrc} {description} {link} lazy />
	{/each}
</div>

<style>
	/* Optional additional styling */
</style>
