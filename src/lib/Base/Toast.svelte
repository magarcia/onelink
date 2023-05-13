<script>
	import { crossfade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	const duration = 250;
	let animAxis = { x: 0, y: 100 };

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * duration),

		fallback(node) {
			return {
				duration,
				easing: cubicInOut,
				css: (t, u) => `
					transform: translate(${u * animAxis.x}%, ${u * animAxis.y}%);
					opacity: ${t}
				`
			};
		}
	});
</script>

<div
	class="fixed transition-opacity flex items-center w-full max-w-xs p-4 space-x-4 rounded-lg shadow bottom-16 left-5 text-gray-200 divide-gray-200 space-x bg-gray-800 z-50"
	role="alert"
	in:receive={{ key: 1 }}
	out:send={{ key: 1 }}
>
	<div class="text-sm font-normal"><slot /></div>
</div>
