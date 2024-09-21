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
			description: 'Bindings	',
			link: '/projects/project-5'
		},
		{
			imageSrc: './images/project-images/project-6.png',
			description: 'Lifecycles',
			link: '/projects/project-6'
		},
		{
			imageSrc: './images/project-images/project-7.png',
			description: 'Stores',
			link: '/projects/project-7'
		},
		{
			imageSrc: './images/project-images/project-8.png',
			description: 'Motion',
			link: '/projects/project-8'
		},
		{
			imageSrc: './images/project-images/project-9.png',
			description: 'Transitions',
			link: '/projects/project-9'
		},
		{
			imageSrc: './images/project-images/project-10.png',
			description: 'Actions',
			link: '/projects/project-10'
		},
		{
			imageSrc: './images/project-images/project-11.png',
			description: 'Advanced bindings',
			link: '/projects/project-11'
		},
		{
			imageSrc: './images/project-images/project-12.png',
			description: 'Classes and styles',
			link: '/projects/project-12'
		},
		{
			imageSrc: './images/project-images/project-13.png',
			description: 'Component composition',
			link: '/projects/project-13'
		},
		{
			imageSrc: './images/project-images/project-14.png',
			description: 'Special elements',
			link: '/projects/project-14'
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
