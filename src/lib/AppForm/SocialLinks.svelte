<script>
	import BaseFormSection from '$lib/Base/FormSection.svelte';
	import Icon from '@iconify/svelte';

	import { profile } from '$lib/stores';
	import { SOCIAL_NETWORKS } from '$lib/constants';

	/**
	 * Update the value of the item
	 * @param {string} value
	 * @param {"facebook"|"twitter"|"instagram"|"linkedin"|"github"|"telegram"|"whatsapp"|"youtube"|"email"} key
	 */
	const updateValue = (value, key) => {
		$profile[key] = value;
	};
</script>

<BaseFormSection title="Social Links" description="Add some social media links">
	<div class="shadow sm:overflow-hidden sm:rounded-md">
		<div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
			{#each SOCIAL_NETWORKS as item}
				<div>
					<label for={item.id} class="block text-sm font-medium text-gray-700">{item.name}</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<span
							class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
						>
							<Icon icon={item.icon} class="w-5 h-5" />
						</span>
						<input
							type="search"
							name={item.id}
							id={item.id}
							bind:value={$profile[item.id]}
							on:input={(e) => updateValue(e.target.value, item.id)}
							class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder={item.placeholder}
						/>
					</div>
				</div>
			{/each}

			<!-- Rest of the social media links follow the same pattern as Facebook... -->
		</div>
	</div>
</BaseFormSection>
