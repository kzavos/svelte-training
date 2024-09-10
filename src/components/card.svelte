<!-- Card.svelte -->
<script>
	export let imageSrc;
	export let description;
	export let link;
</script>

<a href={link} class="card-link">
	<div class="card overflow-hidden rounded-lg bg-neutral shadow-lg">
		<img src={imageSrc} alt="card" class="h-48 w-full object-cover" />
		<div class="p-4">
			<p>{description}</p>
		</div>
	</div>
</a>

<style>
	.card {
		transition: transform 0.2s ease;
	}
	.card:hover {
		transform: scale(1.05);
	}
</style>
