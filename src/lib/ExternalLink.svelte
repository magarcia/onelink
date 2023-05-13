<script>
	import Icon from '@iconify/svelte';

	export let label = '';
	export let url = '';
	export let icon = 'ph:link-simple';
</script>

<li>
	{#if label && url}
		<a href={url} target="_blank">
			<dt class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
				<div
					class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"
				>
					{#if icon}
						<Icon {icon} class="h-5 w-5" />
					{:else}
						<Icon icon="ph:link-simple" class="h-5 w-5" />
					{/if}
				</div>
				<div class="w-full flex-grow min-w-0">
					<p class="font-medium text-sm leading-6 text-gray-900">
						{label}
					</p>
				</div>
			</dt>
		</a>
	{/if}
</li>
