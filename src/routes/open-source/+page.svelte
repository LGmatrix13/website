<script>
	import Project from '$lib/components/Project.svelte';
	import { animations } from '$lib/utilities/animations';
	import { LINKS } from '$lib/utilities/constants';
</script>

<section id="blog" class="flex flex-grow flex-col" use:animations.fadeBlurIn>
	<h2 class="px-5 pt-5 text-lg font-bold text-black">Open Source</h2>
	<Project
		name="Mini Model"
		description="Create refined, specilized models and agents with LLMs."
		github={LINKS.GITHUB_HYPUR}
		languages={[
			{
				name: 'Python',
				percentage: 100,
				color: '#3572a5'
			}
		]}
	/>
	<Project
		name="Hypur"
		description="JavaScript package to bring reusable and isolated reactivity to legacy client-side code."
		github={LINKS.GITHUB_HYPUR}
		languages={[
			{
				name: 'TypeScript',
				percentage: 69.4,
				color: '#3178c6'
			},
			{
				name: 'JS',
				percentage: 28.5 + 2.1,
				color: '#f1e05a'
			}
		]}
	/>
</section>
