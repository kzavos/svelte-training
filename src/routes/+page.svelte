<script>
	import Card from '../components/card.svelte';

	// Example data
	const cards = [
		{
			imageSrc:
				'https://t3.ftcdn.net/jpg/06/04/96/54/360_F_604965492_lCfxDUwNF1YiogR3SN0lbmbdvFnfDCHa.jpg',
			description: 'Second one',
			link: '/projects/project-2'
		},
		{
			imageSrc:
				'https://t3.ftcdn.net/jpg/06/04/96/54/360_F_604965492_lCfxDUwNF1YiogR3SN0lbmbdvFnfDCHa.jpg',
			description: 'Welcome',
			link: '/projects/project-1'
		}
	];
</script>

<div class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each cards as { imageSrc, description, link }}
		<Card {imageSrc} {description} {link} />
	{/each}
</div>

<style>
	/* Optional additional styling */
</style>
