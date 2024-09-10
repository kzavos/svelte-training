<header class="bg-neutral sticky top-0 bg-opacity-50">
	<div class="container">
		<a href="/"
			><img
				class="logo"
				src="https://static-00.iconduck.com/assets.00/svelte-icon-426x512-cm99sfkq.png"
				alt="svelte icon"
			/>
		</a>
		<nav>
			<ul>
				<li><a href="/about">About</a></li>
				<li><a href="/">Projects</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		/* background-color: #333; */
		color: #fff;
		padding: 1rem 2rem;
		z-index: 1000;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		height: auto;
		max-width: 100%;
		width: 50px;
	}

	nav ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		margin: 0 1rem;
	}

	nav a {
		color: #fff;
		text-decoration: none;
		font-size: 1rem;
	}

	nav a:hover {
		color: red;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.logo {
			width: 40px; /* Adjust size for smaller screens */
		}

		.container {
			flex-direction: column;
		}
	}
</style>
