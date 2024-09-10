<script>
	export let title;
	export let date;
	export let author;
	export let content;
</script>

<article class="blog-post">
	<h1 class="blog-post-title">Welcome friend!</h1>
	<p class="blog-post-meta">
		<span class="blog-post-date">10/09/2024</span>
		by <span class="blog-post-author">site-admin</span>
	</p>

	<div class="blog-post-content"></div>
</article>

<style>
	.blog-post {
		margin-bottom: 2rem;
	}

	.blog-post-title {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.blog-post-meta {
		margin-bottom: 1rem;
		color: #888;
	}

	.blog-post-date {
		margin-right: 1rem;
	}

	.blog-post-content {
		font-size: 1.2rem;
		line-height: 1.5;
	}
</style>
