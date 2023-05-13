<script>
	import { SOCIAL_NETWORKS } from '$lib/constants';

	export let preview = false;

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

<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
<main class="body p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
	<div class="text-center">
		{#if profile.image}
			<div class="h-20 w-20 mb-4 rounded-full overflow-hidden mx-auto avatar">
				<img src={profile.image} alt="name" class="h-full w-full object-cover" />
			</div>
		{/if}
		{#if profile.name && !profile.description}
			<h1>{profile.name}</h1>
		{/if}
		{#if profile.name && profile.description}
			<div class="nes-container with-title">
				<p class="title">{profile.name}</p>
				<p>{profile.description}</p>
			</div>
		{/if}
		{#if !profile.name && profile.description}
			<div class="nes-container">
				<p>{profile.description}</p>
			</div>
		{/if}
	</div>
	{#if !allSocialLinksAreEmpty}
		<div class="flex items-center justify-center flex-wrap">
			{#each SOCIAL_NETWORKS as item}
				{#if profile[item.id]}
					<span class="p-1">
						<a
							href={profile[item.id]}
							target="_blank"
							rel="noopener noreferrer"
							class={`nes-icon ${item.id}`}
						/>
					</span>
				{/if}
			{/each}
		</div>
	{/if}
	<ul class="space-y-2 pb-8">
		{#each profile.links as link (link.url)}
			<li class="py-1">
				<a class="nes-btn" href={link.url}>{link.label}</a>
			</li>
		{/each}
	</ul>
</main>

{#if !preview}
	<style>
		:root {
			cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),
				auto;
		}
	</style>
{/if}

<style>
	.body {
		font-family: 'Press Start 2P';
		cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFklEQVRYR9WXURLDIAhE6/0PbSdOtUpcd1Gnpv1KGpTHBpCE1/cXq+vrMph7dGvXZTtpfW10DCA5jrH1H0Jhs5E0hnZdCR+vb5S8Nn8mQCeS9BdSalYJqMBjAGzq59xAESN7VFVUgV8AZB/dZBR7QTFDCqGquvUBVVoEtgIwpQRzmANSFHgWQKExHdIrPeuMvQNDarXe6nC/AutgV3JW+6bgqQLeV8FekRtgV+ToDKEKnACYKsfZjjkam7a0ZpYTytwmgainpC3HvwBocgKOxqRjehoR9DFKNFYtOwCGYCszobeCbl26N6yyQ6g8X/Wex/rBPsNEV6qAMaJPMynIHQCoSqS9JSMmwef51LflTgCRszU7DvAGiV6mHWfsaVUAAAAASUVORK5CYII=),
			auto;
		font-size: 16px;
		color: #212529;
		background-color: #fff;
		-webkit-font-smoothing: antialiased;
	}
	.body a,
	.body button {
		cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
				14 0,
			pointer;
	}
	.avatar {
		image-rendering: pixelated;
	}
	.nes-container {
		position: relative;
		padding: 1.5rem 2rem;
		border-color: #000;
		border-style: solid;
		border-width: 4px;
	}
	.nes-container.with-title > .title {
		display: table;
		padding: 0 0.5rem;
		margin: -1.8rem 0 1rem;
		font-size: 1rem;
		background-color: #fff;
	}

	.nes-btn {
		border-style: solid;
		border-width: 4px;
		border-image-slice: 2;
		border-image-width: 2;
		border-image-repeat: stretch;
		border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" stroke="rgb(33,37,41)" /></svg>');
		border-image-outset: 2;
		position: relative;
		display: block;
		padding: 6px 8px;
		margin: 4px;
		text-align: center;
		cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
				14 0,
			pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		color: #212529;
		background-color: #fff;
	}

	@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
		.nes-btn {
			border-image-repeat: space;
		}
	}

	@supports (-moz-appearance: meterbar) {
		.nes-btn {
			border-image-repeat: stretch;
		}
	}

	.nes-btn::after {
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
		content: '';
		box-shadow: inset -4px -4px #adafbc;
	}

	.nes-btn:hover {
		color: #212529;
		text-decoration: none;
		background-color: #e7e7e7;
	}

	.nes-btn:hover::after {
		box-shadow: inset -6px -6px #adafbc;
	}

	.nes-btn:focus {
		box-shadow: 0 0 0 6px rgba(173, 175, 188, 0.3);
	}

	.nes-btn:active:not(.is-disabled)::after {
		box-shadow: inset 4px 4px #adafbc;
	}

	.nes-btn:focus {
		outline: 0;
	}

	.nes-btn.is-disabled,
	.nes-btn.is-disabled:focus,
	.nes-btn.is-disabled:hover {
		color: #212529;
		cursor: not-allowed;
		background-color: #d3d3d3;
		box-shadow: inset -4px -4px #adafbc;
		opacity: 0.6;
	}

	.nes-btn.is-primary {
		color: #fff;
		background-color: #209cee;
	}

	.nes-btn.is-primary::after {
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
		content: '';
		box-shadow: inset -4px -4px #006bb3;
	}

	.nes-btn.is-primary:hover {
		color: #fff;
		text-decoration: none;
		background-color: #108de0;
	}

	.nes-btn.is-primary:hover::after {
		box-shadow: inset -6px -6px #006bb3;
	}

	.nes-btn.is-primary:focus {
		box-shadow: 0 0 0 6px rgba(0, 107, 179, 0.3);
	}

	.nes-btn.is-primary:active:not(.is-disabled)::after {
		box-shadow: inset 4px 4px #006bb3;
	}

	.nes-btn.is-success {
		color: #fff;
		background-color: #92cc41;
	}

	.nes-btn.is-success::after {
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
		content: '';
		box-shadow: inset -4px -4px #4aa52e;
	}

	.nes-btn.is-success:hover {
		color: #fff;
		text-decoration: none;
		background-color: #76c442;
	}

	.nes-btn.is-success:hover::after {
		box-shadow: inset -6px -6px #4aa52e;
	}

	.nes-btn.is-success:focus {
		box-shadow: 0 0 0 6px rgba(74, 165, 46, 0.3);
	}

	.nes-btn.is-success:active:not(.is-disabled)::after {
		box-shadow: inset 4px 4px #4aa52e;
	}

	.nes-btn.is-warning {
		color: #212529;
		background-color: #f7d51d;
	}

	.nes-btn.is-warning::after {
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
		content: '';
		box-shadow: inset -4px -4px #e59400;
	}

	.nes-btn.is-warning:hover {
		color: #212529;
		text-decoration: none;
		background-color: #f2c409;
	}

	.nes-btn.is-warning:hover::after {
		box-shadow: inset -6px -6px #e59400;
	}

	.nes-btn.is-warning:focus {
		box-shadow: 0 0 0 6px rgba(229, 148, 0, 0.3);
	}

	.nes-btn.is-warning:active:not(.is-disabled)::after {
		box-shadow: inset 4px 4px #e59400;
	}

	.nes-btn.is-error {
		color: #fff;
		background-color: #e76e55;
	}

	.nes-btn.is-error::after {
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
		content: '';
		box-shadow: inset -4px -4px #8c2022;
	}

	.nes-btn.is-error:hover {
		color: #fff;
		text-decoration: none;
		background-color: #ce372b;
	}

	.nes-btn.is-error:hover::after {
		box-shadow: inset -6px -6px #8c2022;
	}

	.nes-btn.is-error:focus {
		box-shadow: 0 0 0 6px rgba(140, 32, 34, 0.3);
	}

	.nes-btn.is-error:active:not(.is-disabled)::after {
		box-shadow: inset 4px 4px #8c2022;
	}

	.nes-icon {
		position: relative;
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: 16px;
		margin-bottom: 16px;
		transform: scale(2);
		transform-origin: top left;
	}

	.nes-icon::before {
		position: absolute;
		top: -1px;
		left: -1px;
		display: block;
		content: '';
		background: 0 0;
	}

	.nes-icon.twitter::before {
		width: 1px;
		height: 1px;
		color: #2c9ceb;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px,
			6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
			16px 2px, 1px 3px, 2px 3px #fff, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
			10px 3px #fff, 11px 3px #fff, 12px 3px #fff, 13px 3px, 14px 3px, 15px 3px, 16px 3px, 1px 4px,
			2px 4px #fff, 3px 4px #fff, 4px 4px #fff, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px #fff,
			10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff, 14px 4px, 15px 4px, 16px 4px,
			1px 5px, 2px 5px #fff, 3px 5px #fff, 4px 5px #fff, 5px 5px #fff, 6px 5px #fff, 7px 5px,
			8px 5px #fff, 9px 5px #fff, 10px 5px #fff, 11px 5px #fff, 12px 5px #fff, 13px 5px #fff,
			14px 5px #fff, 15px 5px #fff, 16px 5px, 1px 6px, 2px 6px, 3px 6px #fff, 4px 6px #fff,
			5px 6px #fff, 6px 6px #fff, 7px 6px #fff, 8px 6px #fff, 9px 6px #fff, 10px 6px #fff,
			11px 6px #fff, 12px 6px #fff, 13px 6px #fff, 14px 6px #fff, 15px 6px, 16px 6px, 1px 7px,
			2px 7px, 3px 7px #fff, 4px 7px #fff, 5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff,
			9px 7px #fff, 10px 7px #fff, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px #fff,
			15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px, 4px 8px #fff, 5px 8px #fff, 6px 8px #fff,
			7px 8px #fff, 8px 8px #fff, 9px 8px #fff, 10px 8px #fff, 11px 8px #fff, 12px 8px #fff,
			13px 8px #fff, 14px 8px, 15px 8px, 16px 8px, 1px 9px, 2px 9px, 3px 9px, 4px 9px #fff,
			5px 9px #fff, 6px 9px #fff, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff, 10px 9px #fff,
			11px 9px #fff, 12px 9px #fff, 13px 9px, 14px 9px, 15px 9px, 16px 9px, 1px 10px, 2px 10px,
			3px 10px, 4px 10px, 5px 10px #fff, 6px 10px #fff, 7px 10px #fff, 8px 10px #fff, 9px 10px #fff,
			10px 10px #fff, 11px 10px #fff, 12px 10px #fff, 13px 10px, 14px 10px, 15px 10px, 16px 10px,
			1px 11px, 2px 11px, 3px 11px, 4px 11px, 5px 11px, 6px 11px #fff, 7px 11px #fff, 8px 11px #fff,
			9px 11px #fff, 10px 11px #fff, 11px 11px #fff, 12px 11px #fff, 13px 11px, 14px 11px, 15px 11px,
			16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px, 5px 12px #fff, 6px 12px #fff, 7px 12px #fff,
			8px 12px #fff, 9px 12px #fff, 10px 12px #fff, 11px 12px #fff, 12px 12px, 13px 12px, 14px 12px,
			15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px #fff, 4px 13px #fff, 5px 13px #fff,
			6px 13px #fff, 7px 13px #fff, 8px 13px #fff, 9px 13px #fff, 10px 13px, 11px 13px, 12px 13px,
			13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px #fff,
			5px 14px #fff, 6px 14px #fff, 7px 14px, 8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px,
			13px 14px, 14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px,
			6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px,
			15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px,
			9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
	}

	.nes-icon.facebook::before {
		width: 1px;
		height: 1px;
		color: #4566ae;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px,
			6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px #fff, 12px 2px #fff, 13px 2px #fff,
			14px 2px #fff, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px, 6px 3px,
			7px 3px, 8px 3px, 9px 3px, 10px 3px #fff, 11px 3px #fff, 12px 3px #fff, 13px 3px #fff,
			14px 3px #fff, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px, 6px 4px,
			7px 4px, 8px 4px, 9px 4px #fff, 10px 4px #fff, 11px 4px #fff, 12px 4px #fff, 13px 4px #fff,
			14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px, 5px 5px, 6px 5px,
			7px 5px, 8px 5px, 9px 5px #fff, 10px 5px #fff, 11px 5px #fff, 12px 5px, 13px 5px, 14px 5px,
			15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px, 8px 6px,
			9px 6px #fff, 10px 6px #fff, 11px 6px #fff, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 16px 6px,
			1px 7px, 2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px, 7px 7px, 8px 7px, 9px 7px #fff,
			10px 7px #fff, 11px 7px #fff, 12px 7px, 13px 7px, 14px 7px, 15px 7px, 16px 7px, 1px 8px,
			2px 8px, 3px 8px, 4px 8px, 5px 8px, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
			10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px,
			1px 9px, 2px 9px, 3px 9px, 4px 9px, 5px 9px, 6px 9px #fff, 7px 9px #fff, 8px 9px #fff,
			9px 9px #fff, 10px 9px #fff, 11px 9px #fff, 12px 9px #fff, 13px 9px #fff, 14px 9px #fff,
			15px 9px, 16px 9px, 1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px, 6px 10px #fff,
			7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px #fff, 12px 10px #fff,
			13px 10px #fff, 14px 10px #fff, 15px 10px, 16px 10px, 1px 11px, 2px 11px, 3px 11px, 4px 11px,
			5px 11px, 6px 11px, 7px 11px, 8px 11px, 9px 11px #fff, 10px 11px #fff, 11px 11px #fff,
			12px 11px, 13px 11px, 14px 11px, 15px 11px, 16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px,
			5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px #fff, 10px 12px #fff, 11px 12px #fff,
			12px 12px, 13px 12px, 14px 12px, 15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px,
			5px 13px, 6px 13px, 7px 13px, 8px 13px, 9px 13px #fff, 10px 13px #fff, 11px 13px #fff,
			12px 13px, 13px 13px, 14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px,
			5px 14px, 6px 14px, 7px 14px, 8px 14px, 9px 14px #fff, 10px 14px #fff, 11px 14px #fff,
			12px 14px, 13px 14px, 14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px,
			5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px #fff, 10px 15px #fff, 11px 15px #fff,
			12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px,
			6px 16px, 7px 16px, 8px 16px, 9px 16px #fff, 10px 16px #fff, 11px 16px #fff, 12px 16px,
			13px 16px, 14px 16px, 15px 16px;
	}

	.nes-icon.github::before {
		width: 1px;
		height: 1px;
		color: #333;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px,
			5px 2px #fff, 6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px,
			14px 2px #fff, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px #fff,
			6px 3px #fff, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px #fff,
			14px 3px #fff, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px, 4px 4px, 5px 4px #fff,
			6px 4px #fff, 7px 4px #fff, 8px 4px #fff, 9px 4px #fff, 10px 4px #fff, 11px 4px #fff,
			12px 4px #fff, 13px 4px #fff, 14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px,
			4px 5px #fff, 5px 5px #fff, 6px 5px #fff, 7px 5px #fff, 8px 5px #fff, 9px 5px #fff,
			10px 5px #fff, 11px 5px #fff, 12px 5px #fff, 13px 5px #fff, 14px 5px #fff, 15px 5px #fff,
			16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px #fff, 5px 6px #fff, 6px 6px #fff, 7px 6px #fff,
			8px 6px #fff, 9px 6px #fff, 10px 6px #fff, 11px 6px #fff, 12px 6px #fff, 13px 6px #fff,
			14px 6px #fff, 15px 6px #fff, 16px 6px, 1px 7px, 2px 7px, 3px 7px, 4px 7px #fff, 5px 7px #fff,
			6px 7px #fff, 7px 7px #fff, 8px 7px #fff, 9px 7px #fff, 10px 7px #fff, 11px 7px #fff,
			12px 7px #fff, 13px 7px #fff, 14px 7px #fff, 15px 7px #fff, 16px 7px, 1px 8px, 2px 8px,
			3px 8px, 4px 8px #fff, 5px 8px #fff, 6px 8px #fff, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
			10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px #fff,
			16px 8px, 1px 9px, 2px 9px, 3px 9px, 4px 9px, 5px 9px #fff, 6px 9px #fff, 7px 9px #fff,
			8px 9px #fff, 9px 9px #fff, 10px 9px #fff, 11px 9px #fff, 12px 9px #fff, 13px 9px #fff,
			14px 9px #fff, 15px 9px, 16px 9px, 1px 10px, 2px 10px, 3px 10px, 4px 10px, 5px 10px,
			6px 10px #fff, 7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px #fff,
			12px 10px #fff, 13px 10px #fff, 14px 10px, 15px 10px, 16px 10px, 1px 11px, 2px 11px #fff,
			3px 11px #fff, 4px 11px, 5px 11px, 6px 11px, 7px 11px, 8px 11px #fff, 9px 11px #fff,
			10px 11px #fff, 11px 11px #fff, 12px 11px, 13px 11px, 14px 11px, 15px 11px, 16px 11px,
			1px 12px, 2px 12px, 3px 12px, 4px 12px #fff, 5px 12px, 6px 12px, 7px 12px #fff, 8px 12px #fff,
			9px 12px #fff, 10px 12px #fff, 11px 12px #fff, 12px 12px #fff, 13px 12px, 14px 12px, 15px 12px,
			16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px, 5px 13px #fff, 6px 13px #fff, 7px 13px #fff,
			8px 13px #fff, 9px 13px #fff, 10px 13px #fff, 11px 13px #fff, 12px 13px #fff, 13px 13px,
			14px 13px, 15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px, 6px 14px,
			7px 14px #fff, 8px 14px #fff, 9px 14px #fff, 10px 14px #fff, 11px 14px #fff, 12px 14px #fff,
			13px 14px, 14px 14px, 15px 14px, 16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px,
			6px 15px, 7px 15px #fff, 8px 15px #fff, 9px 15px #fff, 10px 15px #fff, 11px 15px #fff,
			12px 15px #fff, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px,
			5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px,
			14px 16px, 15px 16px;
	}

	.nes-icon.youtube::before {
		width: 1px;
		height: 1px;
		color: red;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px,
			6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
			16px 2px, 1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
			10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px, 15px 3px, 16px 3px, 1px 4px, 2px 4px,
			3px 4px, 4px 4px, 5px 4px, 6px 4px, 7px 4px #fff, 8px 4px, 9px 4px, 10px 4px, 11px 4px,
			12px 4px, 13px 4px, 14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px, 5px 5px,
			6px 5px, 7px 5px #fff, 8px 5px #fff, 9px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px, 14px 5px,
			15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px #fff,
			8px 6px #fff, 9px 6px #fff, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px,
			16px 6px, 1px 7px, 2px 7px, 3px 7px, 4px 7px, 5px 7px, 6px 7px, 7px 7px #fff, 8px 7px #fff,
			9px 7px #fff, 10px 7px #fff, 11px 7px, 12px 7px, 13px 7px, 14px 7px, 15px 7px, 16px 7px,
			1px 8px, 2px 8px, 3px 8px, 4px 8px, 5px 8px, 6px 8px, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff,
			10px 8px #fff, 11px 8px #fff, 12px 8px, 13px 8px, 14px 8px, 15px 8px, 16px 8px, 1px 9px,
			2px 9px, 3px 9px, 4px 9px, 5px 9px, 6px 9px, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff,
			10px 9px #fff, 11px 9px, 12px 9px, 13px 9px, 14px 9px, 15px 9px, 16px 9px, 1px 10px, 2px 10px,
			3px 10px, 4px 10px, 5px 10px, 6px 10px, 7px 10px #fff, 8px 10px #fff, 9px 10px #fff, 10px 10px,
			11px 10px, 12px 10px, 13px 10px, 14px 10px, 15px 10px, 16px 10px, 1px 11px, 2px 11px, 3px 11px,
			4px 11px, 5px 11px, 6px 11px, 7px 11px #fff, 8px 11px #fff, 9px 11px, 10px 11px, 11px 11px,
			12px 11px, 13px 11px, 14px 11px, 15px 11px, 16px 11px, 1px 12px, 2px 12px, 3px 12px, 4px 12px,
			5px 12px, 6px 12px, 7px 12px #fff, 8px 12px, 9px 12px, 10px 12px, 11px 12px, 12px 12px,
			13px 12px, 14px 12px, 15px 12px, 16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px, 5px 13px,
			6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px, 13px 13px, 14px 13px,
			15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px, 6px 14px, 7px 14px,
			8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px, 14px 14px, 15px 14px,
			16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px,
			9px 15px, 10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px,
			2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px,
			11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
	}

	.nes-icon.google::before {
		width: 1px;
		height: 1px;
		color: #fff;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px,
			6px 2px #db4437, 7px 2px #db4437, 8px 2px #db4437, 9px 2px #db4437, 10px 2px #db4437,
			11px 2px #db4437, 12px 2px, 13px 2px, 14px 2px, 15px 2px, 16px 2px, 1px 3px, 2px 3px, 3px 3px,
			4px 3px #db4437, 5px 3px #db4437, 6px 3px #db4437, 7px 3px #db4437, 8px 3px #db4437,
			9px 3px #db4437, 10px 3px #db4437, 11px 3px #db4437, 12px 3px #db4437, 13px 3px #db4437,
			14px 3px, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px #db4437, 4px 4px #db4437,
			5px 4px #db4437, 6px 4px #db4437, 7px 4px #db4437, 8px 4px #db4437, 9px 4px #db4437,
			10px 4px #db4437, 11px 4px #db4437, 12px 4px #db4437, 13px 4px, 14px 4px, 15px 4px, 16px 4px,
			1px 5px, 2px 5px #db4437, 3px 5px #db4437, 4px 5px #db4437, 5px 5px #db4437, 6px 5px, 7px 5px,
			8px 5px, 9px 5px, 10px 5px, 11px 5px #db4437, 12px 5px, 13px 5px, 14px 5px, 15px 5px, 16px 5px,
			1px 6px #f4b400, 2px 6px #db4437, 3px 6px #db4437, 4px 6px #db4437, 5px 6px, 6px 6px, 7px 6px,
			8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px, 15px 6px, 16px 6px,
			1px 7px #f4b400, 2px 7px #f4b400, 3px 7px #db4437, 4px 7px, 5px 7px, 6px 7px, 7px 7px, 8px 7px,
			9px 7px, 10px 7px, 11px 7px, 12px 7px, 13px 7px, 14px 7px, 15px 7px, 16px 7px, 1px 8px #f4b400,
			2px 8px #f4b400, 3px 8px #f4b400, 4px 8px, 5px 8px, 6px 8px, 7px 8px, 8px 8px, 9px 8px #4285f4,
			10px 8px #4285f4, 11px 8px #4285f4, 12px 8px #4285f4, 13px 8px #4285f4, 14px 8px #4285f4,
			15px 8px #4285f4, 16px 8px, 1px 9px #f4b400, 2px 9px #f4b400, 3px 9px #f4b400, 4px 9px,
			5px 9px, 6px 9px, 7px 9px, 8px 9px, 9px 9px #4285f4, 10px 9px #4285f4, 11px 9px #4285f4,
			12px 9px #4285f4, 13px 9px #4285f4, 14px 9px #4285f4, 15px 9px #4285f4, 16px 9px,
			1px 10px #f4b400, 2px 10px #f4b400, 3px 10px #f4b400, 4px 10px, 5px 10px, 6px 10px, 7px 10px,
			8px 10px, 9px 10px #4285f4, 10px 10px #4285f4, 11px 10px #4285f4, 12px 10px #4285f4,
			13px 10px #4285f4, 14px 10px #4285f4, 15px 10px #4285f4, 16px 10px, 1px 11px #f4b400,
			2px 11px #f4b400, 3px 11px #0f9d58, 4px 11px, 5px 11px, 6px 11px, 7px 11px, 8px 11px, 9px 11px,
			10px 11px, 11px 11px, 12px 11px, 13px 11px #4285f4, 14px 11px #4285f4, 15px 11px #4285f4,
			16px 11px, 1px 12px #f4b400, 2px 12px #0f9d58, 3px 12px #0f9d58, 4px 12px #0f9d58, 5px 12px,
			6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px, 11px 12px, 12px 12px #4285f4,
			13px 12px #4285f4, 14px 12px #4285f4, 15px 12px #4285f4, 16px 12px, 1px 13px, 2px 13px #0f9d58,
			3px 13px #0f9d58, 4px 13px #0f9d58, 5px 13px #0f9d58, 6px 13px, 7px 13px, 8px 13px, 9px 13px,
			10px 13px, 11px 13px #0f9d58, 12px 13px #4285f4, 13px 13px #4285f4, 14px 13px #4285f4,
			15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px #0f9d58, 4px 14px #0f9d58, 5px 14px #0f9d58,
			6px 14px #0f9d58, 7px 14px #0f9d58, 8px 14px #0f9d58, 9px 14px #0f9d58, 10px 14px #0f9d58,
			11px 14px #0f9d58, 12px 14px #0f9d58, 13px 14px #4285f4, 14px 14px #4285f4, 15px 14px,
			16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px #0f9d58, 5px 15px #0f9d58, 6px 15px #0f9d58,
			7px 15px #0f9d58, 8px 15px #0f9d58, 9px 15px #0f9d58, 10px 15px #0f9d58, 11px 15px #0f9d58,
			12px 15px #0f9d58, 13px 15px #0f9d58, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px,
			4px 16px, 5px 16px, 6px 16px #0f9d58, 7px 16px #0f9d58, 8px 16px #0f9d58, 9px 16px #0f9d58,
			10px 16px #0f9d58, 11px 16px #0f9d58, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
	}

	.nes-icon.medium::before {
		width: 1px;
		height: 1px;
		color: #12100e;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px #fff, 3px 2px #fff,
			4px 2px #fff, 5px 2px, 6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px #fff,
			13px 2px #fff, 14px 2px #fff, 15px 2px #fff, 16px 2px, 1px 3px, 2px 3px, 3px 3px #fff,
			4px 3px #fff, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px #fff,
			13px 3px #fff, 14px 3px #fff, 15px 3px, 16px 3px, 1px 4px, 2px 4px, 3px 4px #fff, 4px 4px #fff,
			5px 4px #fff, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px #fff,
			13px 4px #fff, 14px 4px #fff, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px #fff, 4px 5px #fff,
			5px 5px #fff, 6px 5px #fff, 7px 5px, 8px 5px, 9px 5px, 10px 5px, 11px 5px #fff, 12px 5px #fff,
			13px 5px #fff, 14px 5px #fff, 15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px #fff, 4px 6px #fff,
			5px 6px #fff, 6px 6px #fff, 7px 6px, 8px 6px, 9px 6px, 10px 6px, 11px 6px #fff, 12px 6px #fff,
			13px 6px #fff, 14px 6px #fff, 15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff, 4px 7px #fff,
			5px 7px #fff, 6px 7px #fff, 7px 7px, 8px 7px, 9px 7px, 10px 7px #fff, 11px 7px #fff,
			12px 7px #fff, 13px 7px #fff, 14px 7px #fff, 15px 7px, 16px 7px, 1px 8px, 2px 8px,
			3px 8px #fff, 4px 8px, 5px 8px #fff, 6px 8px #fff, 7px 8px #fff, 8px 8px, 9px 8px,
			10px 8px #fff, 11px 8px #fff, 12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px,
			1px 9px, 2px 9px, 3px 9px #fff, 4px 9px, 5px 9px #fff, 6px 9px #fff, 7px 9px #fff, 8px 9px,
			9px 9px #fff, 10px 9px #fff, 11px 9px, 12px 9px #fff, 13px 9px #fff, 14px 9px #fff, 15px 9px,
			16px 9px, 1px 10px, 2px 10px, 3px 10px #fff, 4px 10px, 5px 10px, 6px 10px #fff, 7px 10px #fff,
			8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px, 12px 10px #fff, 13px 10px #fff,
			14px 10px #fff, 15px 10px, 16px 10px, 1px 11px, 2px 11px, 3px 11px #fff, 4px 11px, 5px 11px,
			6px 11px #fff, 7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px, 11px 11px,
			12px 11px #fff, 13px 11px #fff, 14px 11px #fff, 15px 11px, 16px 11px, 1px 12px, 2px 12px,
			3px 12px #fff, 4px 12px, 5px 12px, 6px 12px, 7px 12px #fff, 8px 12px #fff, 9px 12px #fff,
			10px 12px, 11px 12px, 12px 12px #fff, 13px 12px #fff, 14px 12px #fff, 15px 12px, 16px 12px,
			1px 13px, 2px 13px, 3px 13px #fff, 4px 13px, 5px 13px, 6px 13px, 7px 13px #fff, 8px 13px #fff,
			9px 13px, 10px 13px, 11px 13px, 12px 13px #fff, 13px 13px #fff, 14px 13px #fff, 15px 13px,
			16px 13px, 1px 14px, 2px 14px, 3px 14px #fff, 4px 14px, 5px 14px, 6px 14px, 7px 14px,
			8px 14px #fff, 9px 14px, 10px 14px, 11px 14px, 12px 14px #fff, 13px 14px #fff, 14px 14px #fff,
			15px 14px, 16px 14px, 1px 15px, 2px 15px #fff, 3px 15px #fff, 4px 15px #fff, 5px 15px,
			6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px #fff, 12px 15px #fff,
			13px 15px #fff, 14px 15px #fff, 15px 15px #fff, 16px 15px, 2px 16px, 3px 16px, 4px 16px,
			5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px,
			14px 16px, 15px 16px;
	}

	.nes-icon.twitch::before {
		width: 1px;
		height: 1px;
		color: #6441a4;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px #fff, 4px 2px #fff,
			5px 2px #fff, 6px 2px #fff, 7px 2px #fff, 8px 2px #fff, 9px 2px #fff, 10px 2px #fff,
			11px 2px #fff, 12px 2px #fff, 13px 2px #fff, 14px 2px #fff, 15px 2px #fff, 16px 2px, 1px 3px,
			2px 3px #fff, 3px 3px #fff, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px,
			11px 3px, 12px 3px, 13px 3px, 14px 3px, 15px 3px #fff, 16px 3px, 1px 4px, 2px 4px #fff,
			3px 4px #fff, 4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px,
			12px 4px, 13px 4px, 14px 4px, 15px 4px #fff, 16px 4px, 1px 5px, 2px 5px #fff, 3px 5px #fff,
			4px 5px, 5px 5px, 6px 5px, 7px 5px, 8px 5px #fff, 9px 5px, 10px 5px, 11px 5px #fff, 12px 5px,
			13px 5px, 14px 5px, 15px 5px #fff, 16px 5px, 1px 6px, 2px 6px #fff, 3px 6px #fff, 4px 6px,
			5px 6px, 6px 6px, 7px 6px, 8px 6px #fff, 9px 6px, 10px 6px, 11px 6px #fff, 12px 6px, 13px 6px,
			14px 6px, 15px 6px #fff, 16px 6px, 1px 7px, 2px 7px #fff, 3px 7px #fff, 4px 7px, 5px 7px,
			6px 7px, 7px 7px, 8px 7px #fff, 9px 7px, 10px 7px, 11px 7px #fff, 12px 7px, 13px 7px, 14px 7px,
			15px 7px #fff, 16px 7px, 1px 8px, 2px 8px #fff, 3px 8px #fff, 4px 8px, 5px 8px, 6px 8px,
			7px 8px, 8px 8px #fff, 9px 8px, 10px 8px, 11px 8px #fff, 12px 8px, 13px 8px, 14px 8px,
			15px 8px #fff, 16px 8px, 1px 9px, 2px 9px #fff, 3px 9px #fff, 4px 9px, 5px 9px, 6px 9px,
			7px 9px, 8px 9px, 9px 9px, 10px 9px, 11px 9px, 12px 9px, 13px 9px, 14px 9px, 15px 9px #fff,
			16px 9px, 1px 10px, 2px 10px #fff, 3px 10px #fff, 4px 10px, 5px 10px, 6px 10px, 7px 10px,
			8px 10px, 9px 10px, 10px 10px, 11px 10px, 12px 10px, 13px 10px, 14px 10px #fff, 15px 10px #fff,
			16px 10px, 1px 11px, 2px 11px #fff, 3px 11px #fff, 4px 11px, 5px 11px, 6px 11px, 7px 11px,
			8px 11px, 9px 11px, 10px 11px, 11px 11px, 12px 11px, 13px 11px #fff, 14px 11px #fff, 15px 11px,
			16px 11px, 1px 12px, 2px 12px #fff, 3px 12px #fff, 4px 12px #fff, 5px 12px #fff, 6px 12px,
			7px 12px, 8px 12px #fff, 9px 12px #fff, 10px 12px #fff, 11px 12px #fff, 12px 12px #fff,
			13px 12px #fff, 14px 12px, 15px 12px, 16px 12px, 1px 13px, 2px 13px #fff, 3px 13px #fff,
			4px 13px #fff, 5px 13px #fff, 6px 13px, 7px 13px #fff, 8px 13px #fff, 9px 13px #fff,
			10px 13px #fff, 11px 13px #fff, 12px 13px #fff, 13px 13px, 14px 13px, 15px 13px, 16px 13px,
			1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px #fff, 6px 14px #fff, 7px 14px #fff,
			8px 14px #fff, 9px 14px, 10px 14px, 11px 14px, 12px 14px, 13px 14px, 14px 14px, 15px 14px,
			16px 14px, 1px 15px, 2px 15px, 3px 15px, 4px 15px, 5px 15px #fff, 6px 15px #fff, 7px 15px,
			8px 15px, 9px 15px, 10px 15px, 11px 15px, 12px 15px, 13px 15px, 14px 15px, 15px 15px,
			16px 15px, 2px 16px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px,
			10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px, 15px 16px;
	}

	.nes-icon.reddit::before {
		width: 1px;
		height: 1px;
		color: #f40;
		box-shadow: 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px, 11px 1px,
			12px 1px, 13px 1px, 14px 1px, 2px 2px, 3px 2px, 4px 2px, 5px 2px, 6px 2px, 7px 2px, 8px 2px,
			9px 2px #fff, 10px 2px #fff, 11px 2px #fff, 12px 2px, 13px 2px #fff, 14px 2px, 15px 2px,
			1px 3px, 2px 3px, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px #fff, 9px 3px, 10px 3px,
			11px 3px, 12px 3px #fff, 13px 3px #fff, 14px 3px #fff, 15px 3px, 16px 3px, 1px 4px, 2px 4px,
			3px 4px, 4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px #fff, 9px 4px, 10px 4px, 11px 4px,
			12px 4px, 13px 4px #fff, 14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px, 3px 5px, 4px 5px,
			5px 5px, 6px 5px, 7px 5px #fff, 8px 5px #fff, 9px 5px #fff, 10px 5px #fff, 11px 5px, 12px 5px,
			13px 5px, 14px 5px, 15px 5px, 16px 5px, 1px 6px, 2px 6px #fff, 3px 6px #fff, 4px 6px,
			5px 6px #fff, 6px 6px #fff, 7px 6px #fff, 8px 6px #fff, 9px 6px #fff, 10px 6px #fff,
			11px 6px #fff, 12px 6px #fff, 13px 6px, 14px 6px #fff, 15px 6px #fff, 16px 6px, 1px 7px,
			2px 7px #fff, 3px 7px, 4px 7px #fff, 5px 7px #fff, 6px 7px #fff, 7px 7px #fff, 8px 7px #fff,
			9px 7px #fff, 10px 7px #fff, 11px 7px #fff, 12px 7px #fff, 13px 7px #fff, 14px 7px,
			15px 7px #fff, 16px 7px, 1px 8px, 2px 8px, 3px 8px #fff, 4px 8px #fff, 5px 8px #fff, 6px 8px,
			7px 8px, 8px 8px #fff, 9px 8px #fff, 10px 8px, 11px 8px, 12px 8px #fff, 13px 8px #fff,
			14px 8px #fff, 15px 8px, 16px 8px, 1px 9px, 2px 9px #fff, 3px 9px #fff, 4px 9px #fff,
			5px 9px #fff, 6px 9px, 7px 9px, 8px 9px #fff, 9px 9px #fff, 10px 9px, 11px 9px, 12px 9px #fff,
			13px 9px #fff, 14px 9px #fff, 15px 9px #fff, 16px 9px, 1px 10px, 2px 10px #fff, 3px 10px #fff,
			4px 10px #fff, 5px 10px #fff, 6px 10px #fff, 7px 10px #fff, 8px 10px #fff, 9px 10px #fff,
			10px 10px #fff, 11px 10px #fff, 12px 10px #fff, 13px 10px #fff, 14px 10px #fff, 15px 10px #fff,
			16px 10px, 1px 11px, 2px 11px #fff, 3px 11px #fff, 4px 11px #fff, 5px 11px #fff, 6px 11px #fff,
			7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px #fff, 11px 11px #fff, 12px 11px #fff,
			13px 11px #fff, 14px 11px #fff, 15px 11px #fff, 16px 11px, 1px 12px, 2px 12px, 3px 12px #fff,
			4px 12px #fff, 5px 12px #fff, 6px 12px, 7px 12px #fff, 8px 12px #fff, 9px 12px #fff,
			10px 12px #fff, 11px 12px, 12px 12px #fff, 13px 12px #fff, 14px 12px #fff, 15px 12px,
			16px 12px, 1px 13px, 2px 13px, 3px 13px, 4px 13px #fff, 5px 13px #fff, 6px 13px #fff, 7px 13px,
			8px 13px, 9px 13px, 10px 13px, 11px 13px #fff, 12px 13px #fff, 13px 13px #fff, 14px 13px,
			15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px, 4px 14px, 5px 14px #fff, 6px 14px #fff,
			7px 14px #fff, 8px 14px #fff, 9px 14px #fff, 10px 14px #fff, 11px 14px #fff, 12px 14px #fff,
			13px 14px, 14px 14px, 15px 14px, 16px 14px, 2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px,
			7px 15px #fff, 8px 15px #fff, 9px 15px #fff, 10px 15px #fff, 11px 15px, 12px 15px, 13px 15px,
			14px 15px, 15px 15px, 3px 16px, 4px 16px, 5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px,
			10px 16px, 11px 16px, 12px 16px, 13px 16px, 14px 16px;
	}

	.nes-icon.whatsapp::before {
		width: 1px;
		height: 1px;
		color: #00ba37;
		box-shadow: 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px, 11px 1px, 12px 1px,
			13px 1px, 14px 1px, 3px 2px, 4px 2px, 5px 2px, 6px 2px #fff, 7px 2px #fff, 8px 2px #fff,
			9px 2px #fff, 10px 2px #fff, 11px 2px #fff, 12px 2px #fff, 13px 2px, 14px 2px, 15px 2px,
			2px 3px, 3px 3px, 4px 3px, 5px 3px #fff, 6px 3px, 7px 3px, 8px 3px, 9px 3px, 10px 3px,
			11px 3px, 12px 3px, 13px 3px #fff, 14px 3px, 15px 3px, 16px 3px, 2px 4px, 3px 4px,
			4px 4px #fff, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px,
			13px 4px, 14px 4px #fff, 15px 4px, 16px 4px, 2px 5px, 3px 5px, 4px 5px #fff, 5px 5px,
			6px 5px #fff, 7px 5px #fff, 8px 5px, 9px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px,
			14px 5px #fff, 15px 5px, 16px 5px, 2px 6px, 3px 6px #fff, 4px 6px, 5px 6px, 6px 6px #fff,
			7px 6px #fff, 8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
			15px 6px #fff, 16px 6px, 2px 7px, 3px 7px #fff, 4px 7px, 5px 7px, 6px 7px #fff, 7px 7px,
			8px 7px, 9px 7px, 10px 7px, 11px 7px, 12px 7px, 13px 7px, 14px 7px, 15px 7px #fff, 16px 7px,
			2px 8px, 3px 8px #fff, 4px 8px, 5px 8px, 6px 8px, 7px 8px #fff, 8px 8px #fff, 9px 8px,
			10px 8px, 11px 8px, 12px 8px, 13px 8px, 14px 8px, 15px 8px #fff, 16px 8px, 2px 9px,
			3px 9px #fff, 4px 9px, 5px 9px, 6px 9px, 7px 9px, 8px 9px #fff, 9px 9px #fff, 10px 9px,
			11px 9px, 12px 9px, 13px 9px, 14px 9px, 15px 9px #fff, 16px 9px, 2px 10px, 3px 10px #fff,
			4px 10px, 5px 10px, 6px 10px, 7px 10px, 8px 10px, 9px 10px #fff, 10px 10px, 11px 10px #fff,
			12px 10px #fff, 13px 10px, 14px 10px, 15px 10px #fff, 16px 10px, 2px 11px, 3px 11px,
			4px 11px #fff, 5px 11px, 6px 11px, 7px 11px, 8px 11px, 9px 11px, 10px 11px #fff,
			11px 11px #fff, 12px 11px #fff, 13px 11px, 14px 11px #fff, 15px 11px, 16px 11px, 2px 12px,
			3px 12px, 4px 12px #fff, 5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px,
			11px 12px, 12px 12px, 13px 12px, 14px 12px #fff, 15px 12px, 16px 12px, 2px 13px, 3px 13px #fff,
			4px 13px, 5px 13px #fff, 6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px,
			12px 13px, 13px 13px #fff, 14px 13px, 15px 13px, 16px 13px, 2px 14px, 3px 14px #fff,
			4px 14px #fff, 5px 14px, 6px 14px #fff, 7px 14px #fff, 8px 14px #fff, 9px 14px #fff,
			10px 14px #fff, 11px 14px #fff, 12px 14px #fff, 13px 14px, 14px 14px, 15px 14px, 3px 15px,
			4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px, 11px 15px, 12px 15px,
			13px 15px, 14px 15px;
	}

	.nes-icon.email::before {
		width: 1px;
		height: 1px;
		color: #eeecec;
		box-shadow: 2px 3px #fd2b2b, 3px 3px, 4px 3px, 5px 3px, 6px 3px, 7px 3px, 8px 3px, 9px 3px,
			10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px, 15px 3px #fd2b2b, 1px 4px #fd2b2b,
			2px 4px #fd2b2b, 3px 4px #fd2b2b, 4px 4px, 5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px,
			10px 4px, 11px 4px, 12px 4px, 13px 4px, 14px 4px #fd2b2b, 15px 4px #fd2b2b, 16px 4px #fd2b2b,
			1px 5px #fd2b2b, 2px 5px #fd2b2b, 3px 5px #fd2b2b, 4px 5px #fd2b2b, 5px 5px, 6px 5px, 7px 5px,
			8px 5px, 9px 5px, 10px 5px, 11px 5px, 12px 5px, 13px 5px #fd2b2b, 14px 5px #fd2b2b,
			15px 5px #fd2b2b, 16px 5px #fd2b2b, 1px 6px #fd2b2b, 2px 6px #fd2b2b, 3px 6px, 4px 6px #fd2b2b,
			5px 6px #fd2b2b, 6px 6px, 7px 6px, 8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px #fd2b2b,
			13px 6px #fd2b2b, 14px 6px, 15px 6px #fd2b2b, 16px 6px #fd2b2b, 1px 7px #fd2b2b,
			2px 7px #fd2b2b, 3px 7px, 4px 7px, 5px 7px #fd2b2b, 6px 7px #fd2b2b, 7px 7px, 8px 7px, 9px 7px,
			10px 7px, 11px 7px #fd2b2b, 12px 7px #fd2b2b, 13px 7px, 14px 7px, 15px 7px #fd2b2b,
			16px 7px #fd2b2b, 1px 8px #fd2b2b, 2px 8px #fd2b2b, 3px 8px, 4px 8px, 5px 8px, 6px 8px #fd2b2b,
			7px 8px #fd2b2b, 8px 8px, 9px 8px, 10px 8px #fd2b2b, 11px 8px #fd2b2b, 12px 8px, 13px 8px,
			14px 8px, 15px 8px #fd2b2b, 16px 8px #fd2b2b, 1px 9px #fd2b2b, 2px 9px #fd2b2b, 3px 9px,
			4px 9px, 5px 9px, 6px 9px, 7px 9px #fd2b2b, 8px 9px #fd2b2b, 9px 9px #fd2b2b, 10px 9px #fd2b2b,
			11px 9px, 12px 9px, 13px 9px, 14px 9px, 15px 9px #fd2b2b, 16px 9px #fd2b2b, 1px 10px #fd2b2b,
			2px 10px #fd2b2b, 3px 10px, 4px 10px, 5px 10px, 6px 10px, 7px 10px, 8px 10px #fd2b2b,
			9px 10px #fd2b2b, 10px 10px, 11px 10px, 12px 10px, 13px 10px, 14px 10px, 15px 10px #fd2b2b,
			16px 10px #fd2b2b, 1px 11px #fd2b2b, 2px 11px #fd2b2b, 3px 11px, 4px 11px, 5px 11px, 6px 11px,
			7px 11px, 8px 11px, 9px 11px, 10px 11px, 11px 11px, 12px 11px, 13px 11px, 14px 11px,
			15px 11px #fd2b2b, 16px 11px #fd2b2b, 1px 12px #fd2b2b, 2px 12px #fd2b2b, 3px 12px, 4px 12px,
			5px 12px, 6px 12px, 7px 12px, 8px 12px, 9px 12px, 10px 12px, 11px 12px, 12px 12px, 13px 12px,
			14px 12px, 15px 12px #fd2b2b, 16px 12px #fd2b2b, 1px 13px #fd2b2b, 2px 13px #fd2b2b, 3px 13px,
			4px 13px, 5px 13px, 6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px,
			13px 13px, 14px 13px, 15px 13px #fd2b2b, 16px 13px #fd2b2b, 2px 14px #fd2b2b, 3px 14px,
			4px 14px, 5px 14px, 6px 14px, 7px 14px, 8px 14px, 9px 14px, 10px 14px, 11px 14px, 12px 14px,
			13px 14px, 14px 14px, 15px 14px #fd2b2b;
	}

	.nes-icon.linkedin::before {
		width: 1px;
		height: 1px;
		color: #2577b9;
		box-shadow: 2px 1px, 3px 1px, 4px 1px, 5px 1px, 6px 1px, 7px 1px, 8px 1px, 9px 1px, 10px 1px,
			11px 1px, 12px 1px, 13px 1px, 14px 1px, 15px 1px, 1px 2px, 2px 2px, 3px 2px, 4px 2px, 5px 2px,
			6px 2px, 7px 2px, 8px 2px, 9px 2px, 10px 2px, 11px 2px, 12px 2px, 13px 2px, 14px 2px, 15px 2px,
			16px 2px, 1px 3px, 2px 3px, 3px 3px #fff, 4px 3px #fff, 5px 3px #fff, 6px 3px, 7px 3px,
			8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px, 15px 3px, 16px 3px,
			1px 4px, 2px 4px, 3px 4px #fff, 4px 4px #fff, 5px 4px #fff, 6px 4px, 7px 4px, 8px 4px, 9px 4px,
			10px 4px, 11px 4px, 12px 4px, 13px 4px, 14px 4px, 15px 4px, 16px 4px, 1px 5px, 2px 5px,
			3px 5px #fff, 4px 5px #fff, 5px 5px #fff, 6px 5px, 7px 5px, 8px 5px, 9px 5px, 10px 5px,
			11px 5px, 12px 5px, 13px 5px, 14px 5px, 15px 5px, 16px 5px, 1px 6px, 2px 6px, 3px 6px, 4px 6px,
			5px 6px, 6px 6px, 7px 6px, 8px 6px, 9px 6px, 10px 6px, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
			15px 6px, 16px 6px, 1px 7px, 2px 7px, 3px 7px #fff, 4px 7px #fff, 5px 7px #fff, 6px 7px,
			7px 7px #fff, 8px 7px #fff, 9px 7px #fff, 10px 7px, 11px 7px #fff, 12px 7px #fff,
			13px 7px #fff, 14px 7px, 15px 7px, 16px 7px, 1px 8px, 2px 8px, 3px 8px #fff, 4px 8px #fff,
			5px 8px #fff, 6px 8px, 7px 8px #fff, 8px 8px #fff, 9px 8px #fff, 10px 8px #fff, 11px 8px #fff,
			12px 8px #fff, 13px 8px #fff, 14px 8px #fff, 15px 8px, 16px 8px, 1px 9px, 2px 9px,
			3px 9px #fff, 4px 9px #fff, 5px 9px #fff, 6px 9px, 7px 9px #fff, 8px 9px #fff, 9px 9px #fff,
			10px 9px #fff, 11px 9px #fff, 12px 9px #fff, 13px 9px #fff, 14px 9px #fff, 15px 9px, 16px 9px,
			1px 10px, 2px 10px, 3px 10px #fff, 4px 10px #fff, 5px 10px #fff, 6px 10px, 7px 10px #fff,
			8px 10px #fff, 9px 10px #fff, 10px 10px #fff, 11px 10px, 12px 10px #fff, 13px 10px #fff,
			14px 10px #fff, 15px 10px, 16px 10px, 1px 11px, 2px 11px, 3px 11px #fff, 4px 11px #fff,
			5px 11px #fff, 6px 11px, 7px 11px #fff, 8px 11px #fff, 9px 11px #fff, 10px 11px, 11px 11px,
			12px 11px #fff, 13px 11px #fff, 14px 11px #fff, 15px 11px, 16px 11px, 1px 12px, 2px 12px,
			3px 12px #fff, 4px 12px #fff, 5px 12px #fff, 6px 12px, 7px 12px #fff, 8px 12px #fff,
			9px 12px #fff, 10px 12px, 11px 12px, 12px 12px #fff, 13px 12px #fff, 14px 12px #fff, 15px 12px,
			16px 12px, 1px 13px, 2px 13px, 3px 13px #fff, 4px 13px #fff, 5px 13px #fff, 6px 13px,
			7px 13px #fff, 8px 13px #fff, 9px 13px #fff, 10px 13px, 11px 13px, 12px 13px #fff,
			13px 13px #fff, 14px 13px #fff, 15px 13px, 16px 13px, 1px 14px, 2px 14px, 3px 14px #fff,
			4px 14px #fff, 5px 14px #fff, 6px 14px, 7px 14px #fff, 8px 14px #fff, 9px 14px #fff, 10px 14px,
			11px 14px, 12px 14px #fff, 13px 14px #fff, 14px 14px #fff, 15px 14px, 16px 14px, 1px 15px,
			2px 15px, 3px 15px, 4px 15px, 5px 15px, 6px 15px, 7px 15px, 8px 15px, 9px 15px, 10px 15px,
			11px 15px, 12px 15px, 13px 15px, 14px 15px, 15px 15px, 16px 15px, 2px 16px, 3px 16px, 4px 16px,
			5px 16px, 6px 16px, 7px 16px, 8px 16px, 9px 16px, 10px 16px, 11px 16px, 12px 16px, 13px 16px,
			14px 16px, 15px 16px;
	}

	.nes-icon.instagram::before {
		width: 1px;
		height: 1px;
		color: #fff;
		box-shadow: 3px 1px #8005c8, 4px 1px #8005c8, 5px 1px #8005c8, 6px 1px #8005c8, 7px 1px #8005c8,
			8px 1px #8005c8, 9px 1px #8005c8, 10px 1px #8005c8, 11px 1px #8005c8, 12px 1px #8005c8,
			13px 1px #8005c8, 14px 1px #8005c8, 2px 2px #8005c8, 3px 2px #8005c8, 4px 2px #8005c8,
			5px 2px #8005c8, 6px 2px #8005c8, 7px 2px #8005c8, 8px 2px #8005c8, 9px 2px #8005c8,
			10px 2px #8005c8, 11px 2px #8005c8, 12px 2px #8005c8, 13px 2px #8005c8, 14px 2px #8005c8,
			15px 2px #8005c8, 1px 3px #8005c8, 2px 3px #8005c8, 3px 3px #8005c8, 4px 3px, 5px 3px, 6px 3px,
			7px 3px, 8px 3px, 9px 3px, 10px 3px, 11px 3px, 12px 3px, 13px 3px, 14px 3px #8005c8,
			15px 3px #8005c8, 16px 3px #8005c8, 1px 4px #8005c8, 2px 4px #8005c8, 3px 4px, 4px 4px,
			5px 4px, 6px 4px, 7px 4px, 8px 4px, 9px 4px, 10px 4px, 11px 4px, 12px 4px #8005c8,
			13px 4px #8005c8, 14px 4px, 15px 4px #8005c8, 16px 4px #8005c8, 1px 5px #8005c8,
			2px 5px #8005c8, 3px 5px, 4px 5px, 5px 5px, 6px 5px, 7px 5px, 8px 5px, 9px 5px, 10px 5px,
			11px 5px, 12px 5px #8005c8, 13px 5px #8005c8, 14px 5px, 15px 5px #8005c8, 16px 5px #8005c8,
			1px 6px #8005c8, 2px 6px #8005c8, 3px 6px, 4px 6px, 5px 6px, 6px 6px, 7px 6px #8005c8,
			8px 6px #8005c8, 9px 6px #8005c8, 10px 6px #8005c8, 11px 6px, 12px 6px, 13px 6px, 14px 6px,
			15px 6px #8005c8, 16px 6px #8005c8, 1px 7px #d40075, 2px 7px #8005c8, 3px 7px, 4px 7px,
			5px 7px, 6px 7px #8005c8, 7px 7px, 8px 7px, 9px 7px, 10px 7px, 11px 7px #8005c8, 12px 7px,
			13px 7px, 14px 7px, 15px 7px #8005c8, 16px 7px #d40075, 1px 8px #d40075, 2px 8px #d40075,
			3px 8px, 4px 8px, 5px 8px, 6px 8px #8005c8, 7px 8px, 8px 8px, 9px 8px, 10px 8px,
			11px 8px #8005c8, 12px 8px, 13px 8px, 14px 8px, 15px 8px #d40075, 16px 8px #d40075,
			1px 9px #d40075, 2px 9px #d40075, 3px 9px, 4px 9px, 5px 9px, 6px 9px #d40075, 7px 9px, 8px 9px,
			9px 9px, 10px 9px, 11px 9px #d40075, 12px 9px, 13px 9px, 14px 9px, 15px 9px #d40075,
			16px 9px #d40075, 1px 10px #d40075, 2px 10px #d40075, 3px 10px, 4px 10px, 5px 10px,
			6px 10px #d40075, 7px 10px, 8px 10px, 9px 10px, 10px 10px, 11px 10px #d40075, 12px 10px,
			13px 10px, 14px 10px, 15px 10px #d40075, 16px 10px #d40075, 1px 11px #e98c25, 2px 11px #e98c25,
			3px 11px, 4px 11px, 5px 11px, 6px 11px, 7px 11px #d40075, 8px 11px #d40075, 9px 11px #d40075,
			10px 11px #d40075, 11px 11px, 12px 11px, 13px 11px, 14px 11px, 15px 11px #d40075,
			16px 11px #d40075, 1px 12px #e98c25, 2px 12px #e98c25, 3px 12px, 4px 12px, 5px 12px, 6px 12px,
			7px 12px, 8px 12px, 9px 12px, 10px 12px, 11px 12px, 12px 12px, 13px 12px, 14px 12px,
			15px 12px #d40075, 16px 12px #d40075, 1px 13px #e98c25, 2px 13px #e98c25, 3px 13px, 4px 13px,
			5px 13px, 6px 13px, 7px 13px, 8px 13px, 9px 13px, 10px 13px, 11px 13px, 12px 13px, 13px 13px,
			14px 13px, 15px 13px #d84646, 16px 13px #d84646, 1px 14px #e98c25, 2px 14px #e98c25,
			3px 14px #e98c25, 4px 14px, 5px 14px, 6px 14px, 7px 14px, 8px 14px, 9px 14px, 10px 14px,
			11px 14px, 12px 14px, 13px 14px, 14px 14px #d84646, 15px 14px #d84646, 16px 14px #d84646,
			2px 15px #e98c25, 3px 15px #e98c25, 4px 15px #e98c25, 5px 15px #e98c25, 6px 15px #e98c25,
			7px 15px #e98c25, 8px 15px #e98c25, 9px 15px #e98c25, 10px 15px #d84646, 11px 15px #d84646,
			12px 15px #d84646, 13px 15px #d84646, 14px 15px #d84646, 15px 15px #d84646, 3px 16px #e98c25,
			4px 16px #e98c25, 5px 16px #e98c25, 6px 16px #e98c25, 7px 16px #e98c25, 8px 16px #e98c25,
			9px 16px #d84646, 10px 16px #d84646, 11px 16px #d84646, 12px 16px #d84646, 13px 16px #d84646,
			14px 16px #d84646;
	}

	.nes-icon.telegram {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAb9QTFRFAAAAIZbzIZbzIZbzIZbzIZbzIZbzIZbzIZbzIZbzIZbzIZbzUKz2vOD7Z7f3ZLb3////hcX4veD70On87e3t09PT6enpgrrmHIHRHIHR5ubmwMDA4ODggbXeGnjDGnjDM570r9n70+r99fX1zc3N3Nzc8vLy+fn5N6H08/Pz2dnZrdj76fX+6/b++/3/9/f3ycnJxcXF0dHR+/v7LJv0w+P8/v7++vr68PDww8PDwcHBxsbG19fX9Pj86PL5d6/b+Pz/z8/PzMzMmMLkMYbJJH7GkMv50tLSjbzheb3z0eTz7fT6ysrKy8vLHofbpMnn9vb2HonfG33KkL/l3ev2xsnLyMjIIZXyIZXxJIfXJn/GobPB/Pz8HojcHH7NGnrGn7LBxMTE5eXldq7buLi4gYGBf39/6urqHojbeKLEjqrBub3Ae3t71dXVG37Np7XBcXFxHYTWqLfDbnF0U3ONTnSSo8nnsdHr+vz+qbrIaXJ5J3e3PIzMh5imkJWZVnyaQXWeIXi9K4LHh7jfr9DqZXeFaHJ5LHezX6HVPIrHPYa/InvCNojKSJPPIJPuIZbzIZbzH4viHondIZbzGnjDoLCtaQAAAJV0Uk5TAE2ZRYD/c0Km085m/////////////////2b//////2b///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ux///PSmNmsLbAAABkElEQVR4nHXSVVPDQBQF4CBbpEjwwsIWStq0uEuDa3ErVpwmuBR3d4fCD2bTBNJONuchk7v3OzObmVAUFRSsmRBKTCjQjA6vw8IjtEFkeBil116L0ZNBVLSUGC0QS0uJI4B4MQl0YlIyBimGVBWQu2kwHT8zkNEfZGaZTCZ8nM0wjNnCqoHVJLVtEMIc35sCcvNw8gvEw8KiYljClvqBMqvVWi51KypZtqraztX4ptq6eh+Iw+UGCVQ2clwxbJL7zS2tPtAmXxz3bUWQ47h2eXYgFAhYBt+OVvIHOjq7xG+zWBK77T0MAfSiPjyJbcj10wQwMDjkdDqHIbSPNBaSwOjYuMvlmsD9qkmaBACYmp5BsxDOmedLlXVdp/sfAGAQAS8sLAb2FbBkWF5Z5YU1bl0DALCBNnnB4/FogqmtbV7Y2d3bPzgkAwCOeOH4BKHTWi1wdn5xeYXQ9Y3DcUsEd/cPSM4jETw9v/yBV7fb/aYC4H0aqWKkPnQ63acExr68Xq8KiAn2++2J4FuvxBiYn19kb26MOUH3+AAAAABJRU5ErkJggg==');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
