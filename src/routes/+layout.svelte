<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<main class="min-h-screen md:mx-auto md:flex md:max-w-6xl md:divide-x md:divide-gray-300">
	<div class="md:h-screen md:min-w-[300px]">
		<Sidebar />
	</div>
	<div class="flex flex-grow overflow-y-auto border-r border-gray-300 pb-5 md:h-screen">
		{@render children?.()}
	</div>
</main>
