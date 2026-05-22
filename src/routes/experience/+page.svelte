<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import { animations } from '$lib/utilities/animations';
</script>

<section id="experience" class="flex flex-grow flex-col" use:animations.fadeBlurIn>
	<h2 class="px-5 pt-5 text-lg font-medium text-gray-950">Experience</h2>
	<Experience
		company="Deutsche Bank"
		position="Software Engineer, AI/ML"
		description="Developing bespoke AI/ML solutions to increase developer productivity. AI enablement for thousands of engineers. "
	/>
	<Experience
		company="Deutsche Bank"
		position="Fullstack Software Engineer"
		description="Built payment infrastructure in the Corporate Bank divison."
	/>
	<Experience
		company="Google Summer of Code"
		position="Contributor"
		description="Worked alongside the Scala Center to develop business-centric abstractions."
	/>
	<Experience
		company="Intapp"
		position="Fullstack Software Engineer Intern"
		description="Returning internship. Collaborated with an agile senior engineering team to redesign Intapp's Time product."
	/>
	<Experience
		company="Intapp"
		position="Fullstack Software Engineer Intern"
		description="Rebuilt an compliance rules engine from Java to .NET to ensure a lawyer's time entries comply with terms derived from client contracts."
	/>
</section>
