<script>
	import Project from '$lib/components/Project.svelte';
	import Writing from '$lib/components/Writing.svelte';
	import { animations } from '$lib/utilities/animations';
	import { LINKS } from '$lib/utilities/constants';
</script>

<section id="blog" class="flex flex-grow flex-col" use:animations.fadeBlurIn>
	<h2 class="px-5 pt-5 text-lg font-bold text-black">Open Source</h2>
	<Project
		name="Hymn Together"
		description="Native iOS app for listening, sharing, and saving hymns."
		github={LINKS.GITHUB_HYMN_TOGETHER}
		languages={[
			{
				name: 'Swift',
				percentage: 100,
				color: '#f05138'
			}
		]}
	/>
</section>
