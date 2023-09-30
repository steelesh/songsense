<script>
	import logo_light from '$lib/images/SongSenseAI-light.svg';
	import logo_dark from '$lib/images/SongSenseAI-dark.svg';
	import { Github } from 'lucide-svelte';
	import Darkmodetoggle from '$lib/components/custom/darkmodetoggle/darkmodetoggle.svelte';
	import { isDarkMode } from '$lib/darkmodestore.js';
</script>

<nav class="flex items-center justify-between">
	<div class="flex w-full justify-start">
		<a href="/" class="flex items-center">
			{#if $isDarkMode}
				<img src={logo_light} alt="SongSenseAI logo dark" class="h-10 w-10" />
			{:else}
				<img src={logo_dark} alt="SongSenseAI logo light" class="h-10 w-10" />
			{/if}
			<span class="ml-2 text-xl">SongSenseAI</span>
		</a>
	</div>
	<div class="flex items-center gap-4">
		<button type="button" class="h-5 w-5">
			<a href="https://github.com/steelesh/SongSenseAI" target="_blank">
				<Github class="h-5 w-5" />
			</a>
		</button>
		<Darkmodetoggle />
	</div>
</nav>
