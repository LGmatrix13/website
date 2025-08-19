<script lang="ts">
	import Languages from './Languages.svelte';
	interface Props {
		github: string;
		name: string;
		description: string;
		languages: {
			name: string;
			color: string;
			percentage: number;
		}[];
	}

	let { github, name, description, languages }: Props = $props();
</script>

<div class="flex flex-grow flex-col space-y-3 border-b border-gray-300 p-5 last:border-b-0">
	<a href={github} target="_blank" rel="noopener noreferrer">
		<div class="w-full space-y-2">
			<h2 class="font-medium">{name}</h2>
			<p>{description}</p>
		</div>
	</a>
	<Languages {languages} />
</div>
