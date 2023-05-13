<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Templates from '$lib/Templates';
	import Loading from '$lib/Base/Loading.svelte';
	import { decodeData } from '$lib/transformer';

	/** @type {import('$lib/stores').Profile|undefined} */
	let decodedData;
	let Template = Templates.simple.component;

	onMount(() => {
		const acc = $page.params.slug;

		if (acc) decodedData = decodeData(acc);

		Template = Templates[decodedData?.theme || 'simple'].component;
	});
</script>

<div>
	{#if decodedData}
		<Template profile={decodedData} />
	{:else}
		<div class="flex flex-col items-center justify-center h-screen">
			<Loading class="h-5 w-5" />
		</div>
	{/if}
</div>
