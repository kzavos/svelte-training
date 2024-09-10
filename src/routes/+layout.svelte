<script>
	import 'tailwindcss/tailwind.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import Goback from '../components/goback.svelte';

	let showComponent = true;
	import { page } from '$app/stores';

	// Reactive statement to check if the current route is the home page
	$: if ($page.url.pathname === '/') {
		showComponent = false; // Hide component on the home page
	} else {
		showComponent = true; // Show component on other pages
	}
</script>

<div class="wrapper">
	<Header />
	<slot></slot>
	<main></main>
	<!-- Page content will be injected here -->
	{#if showComponent}
		<div class="button-container mx-4 my-4 md:mx-6 md:my-6 lg:mx-8">
			<Goback />
		</div>
	{/if}
	<Footer />
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
