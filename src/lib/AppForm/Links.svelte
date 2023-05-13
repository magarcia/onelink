<script>
	import { onMount } from 'svelte';
	import sortable from 'sortablejs';
	import Icon from '@iconify/svelte';

	import { profile } from '$lib/stores.js';

	import FormSection from '$lib/Base/FormSection.svelte';

	/**
	 * @param {any[]} array
	 * @param {number} indexA
	 * @param {number} indexB
	 */
	function swapArrayElements(array, indexA, indexB) {
		if (indexA < array.length && indexB < array.length) {
			let temp = array[indexA];
			array[indexA] = array[indexB];
			array[indexB] = temp;
		} else {
			console.error('Index out of bounds');
		}
		return array;
	}

	function appendLink() {
		profile.update((profile) => {
			profile.links = [...profile.links, { icon: '', label: '', url: '' }];
			return profile;
		});
	}

	/**
	 * @param {object} link
	 */
	function removeLink(link) {
		profile.update((profile) => {
			profile.links = profile.links.filter((item) => item !== link);
			return profile;
		});
	}

	/**
	 * @type {HTMLDivElement}
	 */
	let list;

	onMount(() => {
		new sortable(list, {
			handle: '.drag-handle',
			animation: 150,
			onSort: function (/**Event*/ evt) {
				console.log({ evt, list });
				profile.update((profile) => {
					profile.links = swapArrayElements(profile.links, evt.oldIndex, evt.newIndex);
					return profile;
				});
			}
		});
	});
</script>

<FormSection title="Links" description="Add some links here">
	<p slot="helpertext" class="mt-1 text-xs text-gray-600">
		Icon keys can be found in
		<a class="underline" href="https://icones.js.org/">https://icones.js.org/</a>.
	</p>

	<div class="list-group" bind:this={list}>
		{#each $profile.links as link (link)}
			<div class="relative mb-6 group">
				<button class="absolute top-2 -left-8">
					<Icon icon="radix-icons:drag-handle-dots-2" class="h-6 w-6 text-slate-500 drag-handle" />
				</button>
				<button
					on:click={() => removeLink(link)}
					class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
				>
					<Icon icon="fluent:dismiss-24-regular" class="h-4 w-4" />
				</button>

				<div class="shadow sm:overflow-hidden sm:rounded-md">
					<div class="space-y-6 bg-white px-4 py-5 sm:p-6">
						<div class="grid grid-cols-2 gap-4">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700"
									>Icon Key (optional)</label
								>
								<input
									type="text"
									name="iconKey"
									id="iconKey"
									bind:value={link.icon}
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div>
								<label for="label" class="block text-sm font-medium text-gray-700">Label</label>
								<input
									type="text"
									name="label"
									id="label"
									bind:value={link.label}
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
							<div class="col-span-2">
								<label for="url" class="block text-sm font-medium text-gray-700">URL</label>
								<input
									type="url"
									name="url"
									id="url"
									bind:value={link.url}
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>
						{#if !link.label || !link.url}
							<p class="mt-2 text-xs text-center text-slate-400">
								Link shown in preview once label and url are added
							</p>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<button
		on:click={appendLink}
		class="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2 flex items-center justify-center"
	>
		<Icon icon="fluent:add-circle-24-regular" class="h-6 w-6" />
	</button>
</FormSection>

<style>
	.flip-list-move {
		transition: transform 0.5s;
	}
	.no-move {
		transition: transform 0s;
	}
	.ghost {
		opacity: 0.5;
		background: #c8ebfb;
	}
	.list-group {
		min-height: 20px;
	}
	.list-group-item {
		cursor: move;
	}
	.list-group-item i {
		cursor: pointer;
	}
</style>
