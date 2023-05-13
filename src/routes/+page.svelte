<script>
	import { get } from 'svelte/store';
	import Icon from '@iconify/svelte';

	import { profile } from '$lib/stores';
	import { encodeData } from '$lib/transformer';
	import { DEMO_DATA } from '$lib/constants';

	import Profile from '$lib/AppForm/Profile.svelte';
	import HR from '$lib/AppForm/HR.svelte';
	import SocialLinks from '$lib/AppForm/SocialLinks.svelte';
	import Links from '$lib/AppForm/Links.svelte';
	import Preview from '$lib/AppForm/Preview.svelte';
	import Toast from '$lib/Base/Toast.svelte';

	let showToast = false;

	const prefillDemoData = () => {
		profile.update((profile) => ({
			...profile,
			...DEMO_DATA
		}));
	};

	const publish = () => {
		const url = `${window.location.origin}/${encodeData(get(profile))}`;
		navigator.clipboard.writeText(url).then(() => {
			showToast = true;
			setTimeout(() => {
				showToast = false;
			}, 2000);
		});
	};
</script>

{#if showToast}
	<Toast>Link copied to clipboard</Toast>
{/if}
<div class="h-screen grid grid-cols-3 divide-x">
	<div class="col-span-2 h-screen flex flex-col bg-slate-100">
		<div class="flex-1 overflow-y-auto p-8">
			<Profile
				bind:name={$profile.name}
				bind:description={$profile.description}
				bind:image={$profile.image}
			/>
			<HR />
			<SocialLinks />
			<HR />
			<Links />
		</div>
		<div class="border-t bg-white flex items-center justify-between">
			<div class="flex items-center">
				<button
					on:click={prefillDemoData}
					class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
				>
					<span> Add demo data </span>
					<Icon icon="mdi:code-json" class="h-4 w-4" />
				</button>
				<button
					on:click={publish}
					class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
				>
					<span> Publish </span>
					<Icon icon="ph:paper-plane-tilt-bold" class="h-4 w-4" />
				</button>
				<a
					href="https://github.com/magarcia/onelink"
					target="_blank"
					class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
				>
					<span> Github </span>
					<Icon icon="mdi:github" class="h-4 w-4" />
				</a>
			</div>
			<a
				href="https://twitter.com/martinprins"
				target="_blank"
				class="px-4 py-1 font-medium text-sm text-gray-500"
			>
				Made with ❤️ by <b>@martinprins</b>
			</a>
		</div>
	</div>
	<Preview />
</div>
