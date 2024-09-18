<div class="card border border-r-2">
	<slot></slot>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: min(2vw, 3.5vh, 1.5rem);
		font-family: 'Silian Rail';
		width: 24em;
		aspect-ratio: 3.5 / 2;
		background: url(./paper.svg) no-repeat 50% 50%;
		background-size: cover;
		border-radius: 2px;
		filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2));
		padding: 1.5em 1em 1em 1em;
		font-variant: small-caps;
		text-shadow:
			-1px -1px 2px rgba(0, 0, 0, 0.2),
			1px 1px 2px white;
		color: hsl(50, 20%, 35%);
		line-height: 1.2;
	}
</style>
