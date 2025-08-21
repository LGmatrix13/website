<script>
	import Writing from '$lib/components/Writing.svelte';
	import { animations } from '$lib/utilities/animations';
</script>

<section id="blog" class="flex flex-grow flex-col" use:animations.fadeBlurIn>
	<h2 class="px-5 pt-5 text-lg font-bold text-black">Writing</h2>
	<Writing title="Test" description="Something" />
	<Writing title="Test" description="Something" />
</section>
