<script>
	import ExternalLink from '$lib/ExternalLink.svelte';
	import Icon from '@iconify/svelte';
	import { SOCIAL_NETWORKS } from '$lib/constants';

	/**
	 * @typedef {Object} Link
	 * @property {string} label - Label
	 * @property {string} icon - Icon
	 * @property {string} url - URL
	 */

	/**
	 * @typedef {Object} Profile
	 * @property {string} name - Name
	 * @property {string} description - Description
	 * @property {string} image - Image
	 * @property {string} [facebook] - Facebook
	 * @property {string} [twitter] - Twitter
	 * @property {string} [instagram] - Instagram
	 * @property {string} [github] - Github
	 * @property {string} [telegram] - Telegram
	 * @property {string} [linkedin] - LinkedIn
	 * @property {string} [email] - Email
	 * @property {string} [whatsapp] - Whatsapp
	 * @property {string} [youtube] - Youtube
	 * @property {Link[]} links - Links
	 */

	/**
	 * @type {Profile}
	 */
	export let profile;

	$: allSocialLinksAreEmpty =
		!profile?.facebook &&
		!profile?.twitter &&
		!profile?.instagram &&
		!profile?.telegram &&
		!profile?.whatsapp &&
		!profile?.youtube &&
		!profile?.email &&
		!profile?.github &&
		!profile?.linkedin;
</script>

<main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
	<div class="text-center">
		{#if profile.image}
			<div class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
				<img src={profile.image} alt="name" class="h-full w-full object-cover" />
			</div>
		{/if}
		{#if profile.name}
			<h1 class="text-2xl font-bold mt-4 text-slate-800">{profile.name}</h1>
		{/if}
		{#if profile.description}
			<p class="text-sm mt-2 text-slate-600">{profile.description}</p>
		{/if}
	</div>
	{#if !allSocialLinksAreEmpty}
		<div class="flex items-center justify-center flex-wrap">
			{#each SOCIAL_NETWORKS as item}
				{#if profile[item.id]}
					<span class="p-1">
						<a href={profile[item.id]} target="_blank" rel="noopener noreferrer">
							<Icon icon={item.icon} class="h-6 w-6" />
						</a>
					</span>
				{/if}
			{/each}
		</div>
	{/if}
	<ul class="space-y-2">
		{#each profile.links as link (link.url)}
			<ExternalLink label={link.label} icon={link.icon} url={link.url} />
		{/each}
	</ul>
</main>
