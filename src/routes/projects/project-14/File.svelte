<script>
	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<span
	style="background-image: url(https://cdn4.iconfinder.com/data/icons/radio-buttons-and-switch/512/Bullet_point_green-512.png)"
	>{name}</span
>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
