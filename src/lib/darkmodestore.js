import { writable } from 'svelte/store';

const initialDarkMode =
	(typeof window !== 'undefined' &&
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches) ||
	false;

export const isDarkMode = writable(initialDarkMode);
