<script>
	import TEMPLATES from '$lib/Templates';
	import { profile } from '$lib/stores.js';

	let Template = TEMPLATES.simple.component;

	profile.subscribe((profile) => {
		Template = TEMPLATES[profile.theme || 'simple'].component;
	});

	/**
	 * @param {string} theme
	 */
	function updateTheme(theme) {
		profile.update((profile) => {
			profile.theme = theme;
			return profile;
		});
	}
</script>

<div class="h-screen grid place-items-center">
	<div class="phone overflow-hidden">
		<div class="notch" />
		<div class="phone-nav overflow-y-auto overflow-hidden">
			{#key $profile.theme}
				<Template profile={$profile} preview={true} />
			{/key}
		</div>
	</div>

	<select
		bind:value={$profile.theme}
		on:change={(e) => updateTheme(e.target.value)}
		class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
	>
		{#each Object.entries(TEMPLATES) as [id, { name }]}
			<option value={id}>{name}</option>
		{/each}
	</select>
</div>

<style>
	:root {
		--original: 400px;
		--width: 340px;
	}

	.phone-nav {
		width: calc(var(--width) - 12px);
		height: calc((var(--width) - 12px) * 2.25);
	}
	.phone {
		position: relative;
		width: var(--width);
		height: calc(var(--width) * 2.25);
		border-radius: calc(var(--width) / 10);
		border: 6px solid #222;
		background-color: #fafafa;
	}
	.notch {
		scale: 0.75;
		translate: -11% -13%;
		position: absolute;
		top: 0;
		left: 50%;
		width: 280px;
		height: 42px;
		background-color: #222;
		border-radius: 0 0 28px 28px;
		transform: translateX(-50%);
		z-index: 1;
	}
	.notch::before,
	.notch::after {
		content: '';
		position: absolute;
		top: 0;
		left: -7px;
		width: 14px;
		height: 7px;
		background-size: 50% 100%;
		background-repeat: no-repeat;
		background-image: radial-gradient(circle at 0 100%, transparent 6px, #222 7px);
	}
	.notch::after {
		left: 100%;
		margin-right: corner-sizepx;
		background-image: radial-gradient(circle at 100% 100%, transparent 6px, #222 7px);
	}
</style>
