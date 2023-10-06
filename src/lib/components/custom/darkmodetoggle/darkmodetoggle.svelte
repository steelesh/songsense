<script>
	import { Sun, Moon } from 'lucide-svelte';
	import { browser } from '$app/environment';
	import { isDarkMode } from '$lib/darkmodestore.js';

	if (browser) {
		let initialDarkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

		isDarkMode.set(initialDarkMode);

		if (initialDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	const handleSwitchDarkMode = () => {
		isDarkMode.update((value) => {
			const newDarkMode = !value;
			localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
			newDarkMode
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');
			return newDarkMode;
		});
	};
</script>

<button class="h-5 w-5" type="button" aria-label="toggle sun" on:click={handleSwitchDarkMode}>
	{#if $isDarkMode}
		<Sun class="h-5 w-5" />
	{:else}
		<Moon class="h-5 w-5" />
	{/if}
</button>
