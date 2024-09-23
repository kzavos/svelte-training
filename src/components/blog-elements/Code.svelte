<script>
	export let fileName;
	export let codeBody;
</script>

<div class="rounded-lg bg-base-200 p-6 shadow-lg">
	<h2 class="mb-4 text-lg font-semibold">{fileName}</h2>
	<pre class="overflow-auto whitespace-pre-wrap rounded-md bg-gray-900 p-4 text-gray-200">
        {codeBody}
    </pre>
</div>
