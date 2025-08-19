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
<main class="mx-auto flex min-h-screen max-w-6xl divide-x divide-gray-300">
	<div class="h-screen min-w-[350px] p-7">
		<Sidebar />
	</div>
	<div class="flex h-screen flex-grow overflow-y-auto border-r border-gray-300">
		{@render children?.()}
	</div>
</main>
