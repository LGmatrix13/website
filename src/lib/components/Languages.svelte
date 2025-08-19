<script lang="ts">
	interface Props {
		languages: {
			name: string;
			color: string;
			percentage: number;
		}[];
	}

	let { languages }: Props = $props();
</script>

<div class="flex flex-col space-y-2">
	<div class="flex h-2 w-full overflow-hidden rounded-full">
		{#each languages as language}
			<div style={`width: ${language.percentage}%; backgroundColor: ${language.color}`}></div>
		{/each}
	</div>
	<div class="flex space-x-3">
		{#each languages as language}
			<div class="flex flex-row items-center space-x-2 text-sm">
				<div class="h-2 w-2 rounded-full" style={`backgroundColor: ${language.color}`}></div>
				<span>{language.name}</span>
			</div>
		{/each}
	</div>
</div>
