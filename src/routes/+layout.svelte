<script lang="js">
	import '../app.postcss';
	import Navbar from '$lib/components/custom/navbar/navbar.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navbar />
<slot />
